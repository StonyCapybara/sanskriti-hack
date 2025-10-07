import Image from "next/image";
import EntriesComponent from "@/components/EntriesComponent";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Saved Entries",
}

export default function Connections() {
    return <div className="relative min-h-screen w-full bg-gradient-to-b from-[#361D2A] to-[#290F4C] py-6">
        <Image src="/saved/bgplanet.svg" alt="" priority className="fixed bottom-0 left-1/2 w-full -translate-x-1/2" width={1024} height={1024} />
        <div className="relative z-10">
            <div className="pt-8 flex flex-nowrap">
                <div className="grow-[15]">
                    <Image src="/connections/header-left.svg" alt="" width={2048} height={2048} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-nowrap items-end grow-[15] gap-3">
                    <div className="grow-[13] aspect-square relative">
                        <Image src="/saved/circle.svg" alt="" width={2048} height={2048} className="w-full h-full object-contain" />
                        <div className="absolute inset-0 flex items-center justify-center font-oxanium text-center text-2xl text-[#1C1A24] max-w-10/12 m-auto">
                            <span><span className="font-[600] text-2xl">Reminder</span> <br /> You have a date tonight</span>
                        </div>
                    </div>
                    <div className="grow-[2] relative bottom-1/5">
                        <Image src="/connections/header-right.svg" alt="" width={2048} height={2048} className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            
            <Link href={"/"} className="fixed top-3 left-3 font-oxanium text-[#FEE3D8] rounded-full bg-[#D7ADAB7F] py-1 px-3 cursor-pointer hover:bg-[#D7ADAB] transition duration-200">Back</Link>

            <EntriesComponent />
        </div>
    </div>
}