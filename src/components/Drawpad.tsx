"use client";

import { useEffect, useRef, useState } from "react";

export default function Drawpad() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawingRef = useRef(false);
  const storageKey = "drawpad";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    ctxRef.current = context;

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      const cssWidth = canvas.clientWidth;
      const cssHeight = canvas.clientHeight;

      canvas.width = Math.floor(cssWidth * ratio);
      canvas.height = Math.floor(cssHeight * ratio);

      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineWidth = 3;
      context.strokeStyle = "#512F41";
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const img = new Image();
        img.src = saved;
        img.onload = () => {
          context.clearRect(0, 0, cssWidth, cssHeight);
          context.drawImage(img, 0, 0, cssWidth, cssHeight);
        };
      } else {
        context.clearRect(0, 0, cssWidth, cssHeight);
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);
  const getPosFromPointerEvent = (e: PointerEvent | React.PointerEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e as any).clientX - rect.left,
      y: (e as any).clientY - rect.top,
    };
  };
  const handlePointerDown = (e: React.PointerEvent) => {
    const context = ctxRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas) return;
    if (canvas.setPointerCapture) canvas.setPointerCapture(e.pointerId);

    const pos = getPosFromPointerEvent(e);
    isDrawingRef.current = true;
    context.beginPath();
    context.moveTo(pos.x, pos.y);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const context = ctxRef.current;
    if (!context || !isDrawingRef.current) return;
    const pos = getPosFromPointerEvent(e);
    context.lineTo(pos.x, pos.y);
    context.stroke();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const context = ctxRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas) return;
    if (canvas.releasePointerCapture && (e as any).pointerId != null) {
      try { canvas.releasePointerCapture((e as any).pointerId); } catch {}
    }
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    context.closePath();
    try {
      const dataURL = canvas.toDataURL();
      localStorage.setItem(storageKey, dataURL);
    } catch (err) {
      console.warn("Could not save drawing:", err);
    }
  };

  const clearCanvas = () => {
    const context = ctxRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas) return;
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    localStorage.removeItem(storageKey);
  };

  const exportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "drawing.png";
    a.click();
  };

  return (
    <div className="mx-auto my-8 rounded-xl shadow-lg" style={{ width: "min(980px, 85%)" }}>
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#DAB0AD",
          padding: "24px 20px",
        }}
      >
        <div
          className="relative rounded-md"
          style={{
            background: "#DAB0AD",
            border: "2px solid #512F41",
            padding: 12,
          }}
        >
          <canvas
            ref={canvasRef}
            width={980}
            height={570}
            style={{
              width: "100%",
              height: "570px",
              cursor: "crosshair",
              background: "#DAB0AD",
              display: "block",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
          <img
                src="/logo.svg"
                alt=""
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-1/3"
            />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={clearCanvas}
              className="bg-[#512F41] text-[#DAB0AD] font-oxanium text-sm py-1 px-3 rounded-md hover:bg-[#2B124C] transition"
            >
              Clear
            </button>
            <button
              onClick={exportPNG}
              className="bg-[#512F41] text-[#DAB0AD] font-oxanium text-sm py-1 px-3 rounded-md hover:bg-[#2B124C] transition"
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
