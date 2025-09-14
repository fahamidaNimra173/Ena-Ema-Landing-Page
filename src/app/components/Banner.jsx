import Image from "next/image";
import Contact from "./shared/contact";

export default function Banner() {
    return (

        <div className="lg:px-[120px] md:px-16 px-4 pt-20 bg-[#151E1B] ">
            <div className="lg:px-[120px]  flex flex-col items-center justify-center">
                <div className="flex items-center justify-center px-4 rounded-4xl gap-2 py-2 border-t-2 border-[#1FFFA5] bg-[#192420] ">
                    <Image
                        src='/assets/Sparkle.png'
                        width={16}
                        height={16}
                        alt="Sparkle icon"
                    />
                    <p className="text-[#B3B3B3] font-normal text-[12px] text-left">Trusted by 30+ startups & entrepreneurs worldwide</p>
                </div>
                <div className="space-y-4 mt-6  text-center mb-12">
                    <h1 className="lg:text-7xl md:text-[64px] text-4xl text-[#F5F5F5] font-bold">Strategic Landing Pages That Convert From Just <span className="text-[#1FFFA5]">$200</span> </h1>
                    <p className="md:text-[18px] text-[12px] font-normal text-[#F5F5F5] ">Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed, developed, and launched in just 5 days.</p>
                </div>
                <Contact></Contact>
            </div>
        </div>
    )
}