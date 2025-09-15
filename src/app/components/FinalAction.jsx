import Contact from "./shared/contact";


export default function FinalAction() {
    return (
        <div className="flex bg-[#0a0f0d] flex-col items-center justify-center lg:p-[120px] md:p-[64px] py-[64px] px-4">
            <h1 className="md:text-7xl text-4xl text-center font-bold text-[#F5F5F5]">Ready to Turn Visitors Into <span className="text-[#1FFFA5]">Real Customers?</span>
            </h1>
            <p className="font-normal text-center text-[18px] text-[#F5F5F5] mb-12">Don't settle for an average page. Get a premium, conversion-focused
                landing page that pays for itself.</p>
            <Contact></Contact>
        </div>
    )
}