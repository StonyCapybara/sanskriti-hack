"use client";

import { useState } from "react";
import Image from "next/image";

export default function ConnectionsComponent() {
    const [connections, setConnections] = useState([
            {name: "User 10", time: "Today 6:57"},
            {name: "User 11", time: "Today 6:57"},
            {name: "User 12", time: "Today 6:57"},
            {name: "User 13", time: "Today 6:57"},
            {name: "User 14", time: "Today 6:57"},
            {name: "User 15", time: "Today 6:57"},
            {name: "User 16", time: "Today 6:57"},
        ]);
    
    return <>
    {connections.map(({ name, time }, idx) => (
          <div key={idx} 
               className="cursor-pointer bg-[#844C697F] transition duration-200 hover:bg-[#844C69] text-xl 
                          m-auto w-[80%] rounded-xl font-oxanium text-[#FFFFFF] mt-4 flex p-4 justify-between items-stretch">
            <div className="flex items-center gap-4">
                <Image src="/connections/pfp.png" alt="pfp" height={64} width={64} />
                <span className="text-3xl">{name}</span>
            </div>
            <span className="flex items-center">{time}</span>
          </div>
        ))}
    </>

}