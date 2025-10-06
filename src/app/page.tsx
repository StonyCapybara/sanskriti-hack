import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return <div className="relative min-h-screen w-full bg-gradient-to-t from-[#1A0019] to-[#4F3C67] py-6">
          <div className="relative z-10">
                <Image src={"/logo.svg"} width={512} height={512} alt="" className="max-w-3xs w-fit m-auto mt-4" />
                <div className="m-auto w-fit">
                    <div className="text-center font-wallpoet text-8xl text-[#FEE3D8]">HYPEN</div>
                    <div className="font-oxanium text-4xl text-center mt-4 text-[#A78CCA]">Where dreams <br />are hyped</div>
                    <div className="flex w-full justify-between my-8">
                      <Link href={"/auth"} className="bg-[#1A0019] transition duration-200  hover:bg-[#1A001990] cursor-pointer rounded px-16 py-1.5 font-oxanium text-white">Login</Link>
                      <Link href={"/auth"} className="bg-[#1A0019] transition duration-200  hover:bg-[#1A001990] cursor-pointer rounded px-16 py-1.5 font-oxanium text-white">Sign Up</Link>
                    </div>
                    <Image src={"/ball.svg"} alt="" width={128} height={128} className="block m-auto"/>
                </div>
          </div>
        </div> 
}