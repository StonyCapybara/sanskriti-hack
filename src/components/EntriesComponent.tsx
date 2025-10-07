"use client";

import { useState } from "react";

export default function EntriesComponent() {
    const [entries, ] = useState([
            {name: "Journal Entry 1", time: "Today 6:57"},
            {name: "Journal Entry 2", time: "Today 6:57"},
            {name: "Journal Entry 3", time: "Today 6:57"},
            {name: "Draw Pad", time: "Today 6:57"},
            {name: "Note Pad", time: "Today 6:57"},
            {name: "Draw Pad", time: "Today 6:57"},
            {name: "Memo", time: "Today 6:57"},
        ]);
    
    return <>
    {entries.map(({ name, time }, idx) => (
          <div key={idx} 
               className="cursor-pointer bg-[#844C697F] transition duration-200 hover:bg-[#844C69] text-xl 
                          m-auto w-[75%] rounded-xl font-oxanium text-[#FFFFFF] mt-4 flex px-4 py-6 justify-between items-stretch gap-2">
            <div className="flex items-center gap-4">
                <span className="text-2xl">{name}</span>
            </div>
            <span className="flex items-center text-[#CA89AC]">{time}</span>
          </div>
        ))}
    </>

}