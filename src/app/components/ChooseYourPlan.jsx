import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const plans = [
  {
    title: "Basic",
    price: "$200",
    tagline: "Perfect for solopreneurs",
    features: [
      "Hosting Deployment",
      "1 Landing Page (Design + Development)",
      "5-Day Delivery",
      "Basic Support",
    ],
  },
  {
    title: "Standard",
    price: "$300",
    tagline: "Best balance of value & features",
    features: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Hosting Setup",
      "Free Consultation Call",
      "Priority Support",
    ],
    popular: true, 
  },
  {
    title: "Enterprise",
    price: "$800",
    tagline: "For growing businesses",
    features: [
      "Custom Hosting Setup",
      "Unlimited Landing Pages",
      "10-Day Delivery",
      "Dedicated Support",
    ],
  },
];

export default function ChoosePlan() {
  return (
    <div className="lg:p-[120px] bg-[#0A0F0D] md:p-16 py-16 px-4">
      <div className="text-left">
        <h1 className="text-5xl text-[#F5F5F5] font-medium">
          Simple, Transparent Pricing —{" "}
          <span className="text-[#1FFFA5]">Choose Your Plan</span>
        </h1>
        <p className="text-[#B3B3B3] text-lg font-normal">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl md:p-9 p-6 bg-[#192420]
                         hover:border-2 focus:border-2 border-[#1FFFA5]"
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="bg-[#192420] absolute -top-5 left-5 px-3 py-1.5 rounded-2xl border-2 border-[#1FFFA5]">
                  <span className="font-normal text-xs text-[#1FFFA5]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="pb-11 border-b-2 border-[#2A3C36]">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl text-[#e7e7e7]">
                    {plan.title}
                  </h1>
                  <h1 className="text-[#1FFFA5] font-bold text-2xl">
                    {plan.price}
                  </h1>
                </div>
                <p className="text-[#B3B3B3] font-normal text-[14px]">
                  {plan.tagline}
                </p>
              </div>

              {/* Fixed-height features area */}
              <div className="mt-11 flex flex-col text-left my-auto gap-3 min-h-[160px]">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center justify-items-start gap-3.5">
                    <span className="h-2 w-2 rounded-full bg-[#1FFFA5]" />
                    <p className="text-[#B3B3B3] text-xs">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="btn1 bg-[#003D25] hover:bg-[#1FFFA5] hover:text-black text-[#1FFFA5] text-[16px] font-normal text-center mt-6 w-full flex justify-center items-center gap-2">
                Start my project
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    
    {/* Limited availability section */}
    <div>
      <div className="flex flex-row items-center gap-4  md:m-12 my-9">
        <Image
        src='/assets/Lightning.png'
        width={36}
        height={36}
        alt="Lightning icon"
        
        />
        <div>
          <h1 className="text-2xl leading-6 mb-2 font-bold text-[#F5F5F5]">Limited Availability</h1>
          <p className="font-normal text-sm text-[#B3B3B3]">We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.</p>
        </div>
      </div>

      <div className="md:py-12 p-6 rounded-2xl bg-[#192420FF] flex flex-col items-center justify-center ">
        <h1 className=" md:text-5xl text-[#1FFFA5] text-2xl font-bold">Special Offer For Early Clients</h1>
        <p className="text-[#F5F5F5] font-normal text-[14px] mt-2 mb-12">Get 10% OFF + Free Hosting Setup when you book this week.</p>

        <button className="btn text-[#201301] text-[16px] font-normal flex items-center gap-2">Claim my 10% discount <FaArrowRight/> </button>
      </div>
    </div>
    
    
    
    
    </div>
  );
}
