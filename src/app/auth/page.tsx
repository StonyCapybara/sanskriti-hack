"use client";
import Image from "next/image";

export default function Auth() {
    return <div className="relative min-h-screen w-full bg-gradient-to-t from-[#411F31] to-[#804C68] py-6">
          <Image src="/authbg.svg" alt="" priority className="fixed bottom-0 left-1/2 w-full -translate-x-1/2" width={1024} height={1024}/>
          <div className="relative z-10">
                <Image src={"/logo.svg"} width={512} height={512} alt="" className="max-w-3xs w-fit m-auto mt-4" />
                <div className="m-auto w-fit">
                    <span className="text-[#2B124C] mt-8 mb-4 w-fit m-auto block font-oxanium font-extrabold text-4xl">Login</span>
                    <input className="min-w-sm py-4 px-6 font-oxanium rounded-2xl text-[#DDCCF3] placeholder:text-[#DDCCF3] bg-[#2B124C7F] m-auto block" placeholder="Email Address" />
                    <input className="min-w-sm mt-8 py-4 px-6 font-oxanium rounded-2xl text-[#DDCCF3] placeholder:text-[#DDCCF3] bg-[#2B124C7F] m-auto block" placeholder="Password" />
                </div>
          </div>
        </div> 
}