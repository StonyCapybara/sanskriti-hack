import Image from "next/image"

export default function Reminders() {
    return <div className="h-screen w-full bg-gradient-to-t from-[#DDB3AF] to-[#53295B] pt-4">
        <div className="w-full h-screen absolute flex align-middle items-center">
            <Image src={"/planetbg.svg"} alt="" className="w-full" width={1024} height={1024} />
        </div>

        <div className="m-auto bg-[#1C1A247F] text-center text-white p-1">
            
        </div>
    </div>
}