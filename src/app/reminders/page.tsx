import Image from "next/image"
import ReminderHeading from "@/components/ReminderHeader"
import ReminderComponent from "@/components/ReminderComponent"

export default function Reminders() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-t from-[#DDB3AF] to-[#53295B] py-6">
      <Image src="/planetbg.svg" alt="" priority className="fixed bottom-[10%] left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
      <div className="relative z-10">
        <div className="m-auto bg-[#1C1A247F] w-fit mx-auto text-center p-4 px-12 rounded-xl mb-8">
          <ReminderHeading />
        </div>
        <ReminderComponent />
      </div>
    </div>
  )
}
