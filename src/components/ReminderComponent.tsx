"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ReminderComponent() {
    const [reminders, setReminders] = useState([
            {name: "Chemistry Lecture", date: "26th October, 10:00 AM"},
            {name: "Chemistry Lecture", date: "26th October, 10:00 AM"},
            {name: "Physics Lecture", date: "26th October, 10:00 AM"},
            {name: "Economics Lecture", date: "26th October, 10:00 AM"},
            {name: "Economics Lecture", date: "26th October, 10:00 AM"},
            {name: "Physics Lecture", date: "26th October, 10:00 AM"},
            {name: "Chemistry Lecture", date: "26th October, 10:00 AM"},
        ]);
    const [open, setOpen] = useState(false);
    
    return <>
    {reminders.map(({ name, date }, idx) => (
          <div key={idx} className="cursor-pointer bg-[#844C697F] transition duration-200 hover:bg-[#844C69] text-xl m-auto w-80 mx-auto text-center p-4 px-8 rounded-xl font-oxanium text-[#D7ADAB] mt-4">
            <span>{name}</span>
            <br />
            <span>{date}</span>
          </div>
        ))}

        <div className="select-none cursor-pointer bg-[#844C697F] transition duration-200 hover:bg-[#844C69] text-xl m-auto w-fit mx-auto text-center p-4 px-8 rounded-xl font-oxanium text-[#FEE3D8] mt-4" onClick={()=>{setOpen(true)}}>
            ADD REMINDER
        </div>

        {open ? (<>
    <div className="fixed top-0 min-h-screen w-full bg-gradient-to-t from-[#804C68] to-[#D7ADAB] py-6">
      <Image src="/planetbg3.svg" alt="" priority className="fixed bottom-[-5%] left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
      <div className="relative z-10">
        <div className="m-auto bg-[#512F4197] w-fit mx-auto text-center p-5 px-16 rounded-xl mb-8 text-4xl font-oxanium text-[#FADED3]">
            ADD REMINDER
        </div>
        <div className="flex flex-col gap-2 bg-[#D7ADAB2C] w-fit m-auto rounded-3xl p-12 px-4 font-oxanium text-[#F6CBE2] text-xl relative mt-32">
            <div className="text-white text-2xl">Title:</div>
            <input placeholder="title" id="title" className="rounded-full bg-[#1A001940] px-4 py-1 min-w-[22rem]" />
            <div className="text-white text-2xl">Time:</div>
            <input placeholder="time" id="time" className="rounded-full bg-[#1A001940] px-4 py-1 min-w-[22rem]" />
            <button className="block w-full p-4 bg-[#D7ADAB7F] hover:bg-[#D7ADAB] cursor-pointer rounded-2xl mt-5 text-2xl transition duration-200" onClick={()=>{
                const title = (document.getElementById("title") as HTMLInputElement)?.value;
                const time = (document.getElementById("time") as HTMLInputElement)?.value;
                setReminders([...reminders, {name: title, date: time}]);
                setOpen(false);
            }}>Add Reminder</button>
        </div>
      </div>
      <Link href={""} onClick={()=>{setOpen(false)}} className="fixed bottom-3 left-3 font-oxanium text-[#FEE3D8] rounded-full bg-[#D7ADAB7F] py-1 px-3 cursor-pointer hover:bg-[#D7ADAB] transition duration-200">Back</Link>
    </div>
        </>) : (<></>)}
    </>

}