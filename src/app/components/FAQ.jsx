import { DotFilledIcon, DotIcon } from "@radix-ui/react-icons";


export default function FAQ() {
    return (
        <div className="lg:p-[240px] md:p-16 py-16 mx-auto">

            <h1 className=" text-5xl text-[#F5F5F5] font-bold text-center">Got Questions<span className="text-[#1FFFA5]">?</span> We’ve Got The Answers</h1>
            <div className="flex flex-col gap-6 mt-12">
                <div className="flex flex-col rounded-[12px] bg-[#192420] p-6 gap-6 items-start">
                    <DotFilledIcon className="w-10 h-10 text-2xl text-[#1FFFA5]"></DotFilledIcon>
                    <h1 className="font-bold text-2xl text-[#F5F5F5] ">How long does it take?</h1>
                    <p className="text-[18px] font-normal text-[#B3B3B3]">5 days from start to finish - design, development, and deployment included.</p>
                </div>
                <div className="flex flex-col gap-6 rounded-[12px] bg-[#192420] p-6 items-start">
                    <DotFilledIcon className="w-10 h-10 text-2xl text-[#1FFFA5]"></DotFilledIcon>
                    <h1 className="font-bold text-2xl text-[#F5F5F5] ">Do you provide revisions?</h1>
                    <p className="text-[18px] font-normal text-[#B3B3B3]">Yes, unlimited revisions until you're 100% satisfied with the final result.</p>
                </div>
                <div className="flex flex-col gap-6 p-6 rounded-[12px] bg-[#192420] items-start">
                    <DotFilledIcon className="w-10 h-10 text-2xl text-[#1FFFA5]"></DotFilledIcon>
                    <h1 className="font-bold text-2xl text-[#F5F5F5] ">What's the payment process?</h1>
                    <p className="text-[18px] font-normal text-[#B3B3B3]">50% upfront to get started, 50% after final delivery and your approval.</p>
                </div>
                <div className="flex flex-col gap-6 p-6 rounded-[12px] bg-[#192420] items-start">
                    <DotFilledIcon className="w-10 h-10 text-2xl text-[#1FFFA5]"></DotFilledIcon>
                    <h1 className="font-bold text-2xl text-[#F5F5F5]">Can you deploy on my hosting?</h1>
                    <p className="text-[18px] font-normal text-[#B3B3B3]">Absolutely! Deployment is included in every package, on your hosting or ours.</p>
                </div>
                <div className="flex flex-col gap-6 p-6 rounded-[12px] bg-[#192420] items-start">
                    <DotFilledIcon className="w-10 h-10 text-2xl text-[#1FFFA5]"></DotFilledIcon>
                    <h1 className="font-bold text-2xl text-[#F5F5F5]">Why are your prices so affordable compared to agencies?</h1>
                    <p className="text-[18px] font-normal text-[#B3B3B3]">We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.</p>
                </div>
            </div>

        </div>
    )
}