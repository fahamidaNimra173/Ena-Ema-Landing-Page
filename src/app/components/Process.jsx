import { CookieIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";


export default function Process() {
    return (
        <div className="lg:p-[120px] py-[60px] px-4">
            <h1 className="text-5xl font-medium text-center text-[#F5F5F5]">From Idea to Live Landing Page in <span className="text-[#1FFFA5]">Just 5 Days</span></h1>
            <p className=" text-[16px] mb-12 text-center text-[#F5F5F5] mt-2 font-normal">Our streamlined process ensures fast delivery without compromising quality.</p>
            <div className="flex lg:flex-row flex-col  gap-6">
                <div className="bg-[#192420] relative flex flex-col items-center justify-center p-9">
                    <div className="bg-[#192420]  absolute -top-3 left-42 px-2  rounded-2xl border-2 border-[#1FFFA5]">
                        <span className="font-normal text-xs text-[#1FFFA5]">
                            Day 1
                        </span>
                    </div>
                    <div className="p-6 rounded-full mb-9 text-[#1FFFA5]  bg-[#003d25]">
                        <PersonIcon />
                    </div>
                    <h5 className="text-[20px] font-medium text-center  text-[#F5F5F5]">Book Your Project</h5>
                    <p className="text-[20px] font-normal text-center mt-2 text-[#B3B3B3]">Fill out a short form and we'll get started immediately.</p>
                </div>
                <div className="bg-[#192420] relative flex flex-col items-center justify-center p-9">
                     <div className="bg-[#192420] absolute -top-3 left-44 px-2  rounded-2xl border-2 border-[#1FFFA5]">
                        <span className="font-normal  text-xs text-[#1FFFA5]">
                            Day 2-4
                        </span>
                    </div>
                    <div className="p-6 rounded-full mb-9 text-[#1FFFA5] text-4xl  bg-[#003d25]">
                        <RocketIcon />
                    </div>
                    <h5 className="text-[20px] font-medium text-center text-[#F5F5F5]">Design & Development</h5>
                    <p className="text-[20px] font-normal text-center mt-2 text-[#B3B3B3]">Unlimited revisions until perfect. You're involved every step.</p>
                </div>
                <div className="bg-[#192420] flex relative flex-col items-center justify-center p-9">
                     <div className="bg-[#192420] absolute -top-3 left-44 px-2  rounded-2xl border-2 border-[#1FFFA5]">
                        <span className="font-normal text-xs text-[#1FFFA5]">
                            Day 5
                        </span>
                    </div>
                    <div className="p-6 rounded-full mb-9  text-[#1FFFA5] text-4xl bg-[#003d25]">
                        <CookieIcon ></CookieIcon>
                    </div>
                    <h5 className="text-[20px] text-center font-medium text-[#F5F5F5]">Launch</h5>
                    <p className="text-[20px] text-center font-normal mt-2 text-[#B3B3B3]">Fully deployed on your hosting and ready to convert visitors.</p>
                </div>
            </div>
        </div>
    )

}