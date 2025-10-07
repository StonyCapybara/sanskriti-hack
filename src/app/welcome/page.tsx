import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return <div className="relative min-h-screen w-full bg-gradient-to-t from-[#290F4C] to-[#1A0019] py-6">
        <Image src="/welcome/mountain-bg.svg" alt="" priority className="fixed bottom-0 left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
        <div className="relative z-10">
            <div className="text-center w-fit mx-auto font-oxanium mt-4">
                <span className="text-4xl text-[#FADED3]">Welcome User 21</span>
                <br />
                <span className="text-2xl text-[#DD8EB8]">What would you like to do today?</span>
            </div>
            <div className="w-fit m-auto mt-12">
                <div className="grid grid-cols-2 gap-8 justify-items-center">
                    {["reminders", "connections", "notepad", "settings", "finance", "journal"].map((name)=>{
                        return <Link href={`/${name}`} key={name} className="cursor-pointer py-4 px-20 mx-2 transition duration-200 bg-gradient-to-b from-[#512F417F] hover:from-[#512F41] to-[#290F4C7F] hover:to-[#290F4C] w-[30vw] rounded-xl flex flex-col justify-between items-center">
                                <div className="w-24 h-24 flex items-center justify-center">
                                    <Image src={`/welcome/${name}.svg`} alt={name} width={128} height={128} className="object-contain w-full h-full" />
                                </div>
                                <div className="font-oxanium text-white">{name.toUpperCase()}</div>
                            </Link>
                    })}
                    <Link href={"/chatbot"} className="cursor-pointer py-4 w-full px-20 mx-2 transition duration-200 bg-gradient-to-b from-[#512F417F] hover:from-[#512F41] to-[#290F4C7F] hover:to-[#290F4C] rounded-xl flex flex-col justify-between items-center col-span-2">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <Image src={`/welcome/robot.svg`} alt="ai tutor bot" width={128} height={128} className="object-contain w-full h-full" />
                        </div>
                        <div className="font-oxanium text-white">AI TUTOR BOT</div>
                    </Link>
                </div>
            </div>
        </div>
  </div>
}