import Image from "next/image";
// import localFont from "next/font/local";
// const generalSans = localFont({
//   src: [
//     {
//       path: "../fonts/GeneralSans-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     }

//   ],
//   variable: "--font-general-sans",
// });

export default function Contact() {
  return (
    <div>
      <div className={`flex  flex-col  shadow-[0_12px_32px_0_rgba(31,255,165,0.1)] gap-6 rounded-lg border-2 border-[#2A3C36] p-3 md:p-9 `}>
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
              type="email"
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
              type="tel"
              placeholder="Phone Number"
              className="border-2 w-full border-[#2A3C36] rounded-sm py-[18px] lg:p-[18px] pl-12 lg:pl-12"
            />
          </div>
        </div>

        <div>
          <button className="w-full text-[15px] text-[#201301] font-medium btn">Get my high-converting landing page</button>
        </div>

      </div>
      <div className="flex items-center leading-[1.4rem] mt-4 md:justify-around justify-between flex-wrap">
        <div className="flex gap-2" >
          <Image
            src="/assets/Lock.png"
            alt="Email icon"
            width={16}
            height={16}

          />
          <p className="text-[#B3B3B3] leading-[1.4rem] font-normal text-xs">SSL secure</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/assets/Lock.png"
            alt="Email icon"
            width={16}
            height={16}

          />
          <p className="text-[#B3B3B3] font-normal text-xs">Money-back guaranteed</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/assets/Check.png"
            alt="Money-back guaranteed icon"
            width={16}
            height={16}

          />
          <p className="text-[#B3B3B3] leading-[1.4rem] font-normal text-xs">Satisfaction guaranteed</p>
        </div>
      </div>
    </div>

  );
}
