import Image from "next/image"

export default function Home() {
  return <div className="relative min-h-screen w-full bg-gradient-to-t from-[#290F4C] to-[#1A0019] py-6">
        <Image src="/welcome/mountain-bg.svg" alt="" priority className="fixed bottom-0 left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
        <div className="relative z-10">
            <div className="text-center w-fit mx-auto font-oxanium">
                <span className="text-4xl text-[#FADED3]">Welcome User 21</span>
                <br />
                <span className="text-2xl text-[#DD8EB8]">What would you like to do today?</span>
            </div>
        </div>
  </div>
}