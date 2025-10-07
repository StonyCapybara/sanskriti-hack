import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings",
}

export default function Reminders() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-t from-[#462177] to-[#804C68] py-6">
      <Image src="/settings/planetbg2.svg" alt="" priority className="fixed bottom-[-5%] left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
      <div className="relative z-10">
        <div className="m-auto bg-[#53295B] w-fit mx-auto text-center p-5 px-16 rounded-xl mb-8 text-4xl font-oxanium text-[#FADED3]">
            SETTINGS
        </div>
        <div className="flex flex-col gap-4 bg-[#4621777F] w-fit m-auto rounded-3xl p-6 px-20 font-oxanium text-[#F6CBE2] text-xl relative mt-20">
            <Image src={"/settings/pfp.png"} alt="" width={256} height={256} />
            <div>Name: USER 221</div>
            <div>Note: Skibidi</div>
            <div>Email: Abcd@efg.com</div>
            <div>Connections:</div>
            <Image src={"/settings/pfps.png"} alt="" width={128} height={64} className="relative bottom-4"/>
        </div>
      </div>
      <Link href={"/"} className="fixed bottom-3 left-3 font-oxanium text-[#FEE3D8] rounded-full bg-[#D7ADAB7F] py-1 px-3 cursor-pointer hover:bg-[#D7ADAB] transition duration-200">Back</Link>
    </div>
  )
}
