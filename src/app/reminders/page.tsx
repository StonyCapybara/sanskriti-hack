import Image from "next/image"
import ReminderHeading from "@/components/ReminderHeader"

export default function Reminders() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-t from-[#DDB3AF] to-[#53295B] pt-6">
      <Image src="/planetbg.svg" alt="" priority className="absolute bottom-[10%] left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
      <div className="relative z-10">
        <div className="m-auto bg-[#1C1A247F] w-fit mx-auto text-center p-4 px-12 rounded-xl mb-8">
          <ReminderHeading />
        </div>
        {[
            {name: "Chemistry Lecture", date: "26th October, 10:00 AM"},
            {name: "Chemistry Lecture", date: "26th October, 10:00 AM"},
            {name: "Physics Lecture", date: "26th October, 10:00 AM"},
            {name: "Economics Lecture", date: "26th October, 10:00 AM"},
            {name: "Economics Lecture", date: "26th October, 10:00 AM"},
            {name: "Physics Lecture", date: "26th October, 10:00 AM"},
            {name: "Chemistry Lecture", date: "26th October, 10:00 AM"},
        ].map(({ name, date }, idx) => (
          <div key={idx} className="cursor-pointer bg-[#844C697F] text-xl m-auto w-80 mx-auto text-center p-4 px-8 rounded-xl font-oxanium text-[#D7ADAB] mt-4">
            <span>{name}</span>
            <br />
            <span>{date}</span>
          </div>
        ))}

        <div className="cursor-pointer bg-[#844C697F] text-xl m-auto w-fit mx-auto text-center p-4 px-8 rounded-xl font-oxanium text-[#FEE3D8] mt-4">
            ADD REMINDER
        </div>
      </div>
    </div>
  )
}
