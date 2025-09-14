import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex  flex-col  shadow-[0_12px_32px_0_rgba(31,255,165,0.1)] gap-6 rounded-lg border-2 border-[#2A3C36] p-3 md:p-9">
      <div className="flex flex-col  gap-[12px] md:flex-row ">
        {/* Name */}
        <div className="flex relative lg:p-[18px]  gap-4 text-[12px] text-[#B3B3B3]">
          <Image
            src="/assets/User.png"
            width={20}
            height={20}
            alt="User Icon"
            className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 w-full border-[#2A3C36] rounded-sm py-[18px] lg:p-[18px] pl-12 lg:pl-12"  
          />
        </div>

        {/* Email */}
        <div className="flex lg:p-[18px] relative  gap-4 text-[12px] text-[#B3B3B3]">
          <Image
            src="/assets/EnvelopeSimpleOpen (1).png"
            alt="Email icon"
            width={20}
            height={20}
            className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Email Address"
             className="border-2 w-full border-[#2A3C36] rounded-sm py-[18px] lg:p-[18px] pl-12 lg:pl-12" 
          />
        </div>

        {/* Phone */}
        <div className="flex relative lg:p-[18px]  gap-4 text-[12px] text-[#B3B3B3]">
          <Image
            src="/assets/Phone.png"
            alt="phone icon"
            width={20}
            height={20}
            className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
             className="border-2 w-full border-[#2A3C36] rounded-sm py-[18px] lg:p-[18px] pl-12 lg:pl-12" 
          />
        </div>
      </div>

      <div>
        <button className="w-full text-[15px] text-[#201301] font-medium btn">Get my high-converting landing page</button>
      </div>
    </div>
  );
}
