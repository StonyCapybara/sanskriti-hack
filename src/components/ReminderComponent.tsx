"use client";

import { useState } from "react";

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
    
    return <>
    {reminders.map(({ name, date }, idx) => (
          <div key={idx} className="cursor-pointer bg-[#844C697F] text-xl m-auto w-80 mx-auto text-center p-4 px-8 rounded-xl font-oxanium text-[#D7ADAB] mt-4">
            <span>{name}</span>
            <br />
            <span>{date}</span>
          </div>
        ))}

        <div className="select-none cursor-pointer bg-[#844C697F] text-xl m-auto w-fit mx-auto text-center p-4 px-8 rounded-xl font-oxanium text-[#FEE3D8] mt-4" onClick={()=>setReminders(prev => [...reminders, {"name": "Math Lecture", "date": "6th October, 10:00AM"}])}>
            ADD REMINDER
        </div>
    </>

}