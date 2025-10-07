"use client";

import { useEffect, useRef, useState } from "react";

export default function Notepad() {
  const [notes, setNotes] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineHeight = 40;
  const storageKey = "my-notepad";

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
    setNotes(saved ?? "");
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, notes);
  }, [notes]);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    ta.style.height = `${ta.scrollHeight}px`;
  }, [notes]);

  const ruledBackground = `
    repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent calc(var(--lh) - 1px),
      #512F41 calc(var(--lh) - 1px),
      #512F41 var(--lh)
    )
  `;

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
          className="rounded-md"
          style={{
            background: ruledBackground,
            WebkitBackgroundClip: "padding-box",
            backgroundClip: "padding-box",
            padding: 12,
            paddingLeft: 28,
            ["--lh" as any]: `${lineHeight}px`,
          }}
        >
          <textarea
            ref={textareaRef}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full resize-none bg-transparent outline-none font-oxanium"
            style={{
              lineHeight: `${lineHeight}px`,
              fontSize: 16,
              color: "#1A0019",
              minHeight: "570px",
              border: "none",
              padding: 0,
              margin: 0,
              backgroundAttachment: "local",
            }}
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
