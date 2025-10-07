"use client";

import Image from "next/image"
import Link from "next/link";
import Notepad from "@/components/Notepad"
import Drawpad from "@/components/Drawpad";
import { useState } from "react";

export default function Journal() {
    const [open, setOpen] = useState("notepad")
    return <div className="relative min-h-screen w-full bg-gradient-to-b from-[#1A0019] to-[#290F4C] py-6">
            <div className="w-full flex justify-between items-center px-3">
                <Image src={"/connections/pfp.png"} alt="" width={64} height={64} />
                <Link href={"/saved"} className="text-white font-oxanium text-xl cursor-pointer select-none">Saved Entries →</Link>
            </div>
            {open==="notepad"?<Notepad />:<Drawpad />}
            <div className="flex justify-between w-[85%] m-auto">
                <button className={`rounded-2xl font-oxanium text-xl px-8 py-2 ${open==="drawpad"?"bg-[#DAB0AD]":"bg-[#DAB0AD7F]"} ${open==="drawpad"?"text-[#512F41]":"text-[#E3BED2]"}`} onClick={()=>{setOpen("drawpad")}}>DRAWPAD</button>
                <button className={`rounded-2xl font-oxanium text-xl px-8 py-2 ${open==="notepad"?"bg-[#DAB0AD]":"bg-[#DAB0AD7F]"} ${open==="notepad"?"text-[#512F41]":"text-[#E3BED2]"}`} onClick={()=>{setOpen("notepad")}}>NOTEPAD</button>
            </div>
        </div>
}