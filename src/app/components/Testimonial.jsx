"use client";

import Slider from "react-slick";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";

const testimonials = [
  {
    rating: 5,
    comment:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "Sarah Johnson",
    designation: "SaaS Founder",
    image: "/assets/user1.png",
  },
  {
    rating: 5,
    comment:
     "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    name: "Mike Cheny",
    designation: "Fitness Coach",
    image: "/assets/user2.png",
  },
  {
    rating: 5,
    comment:
      "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    name: "Amanda Rodriguez",
    designation: "E-Commerce Owner",
    image: "/assets/user3.png",
  },
  {
    rating: 5,
    comment:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "David Lee",
    designation: "SaaS Founder",
    image: "/assets/user4.png",
  },
 {
    rating: 5,
    comment:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "Sarah Johnson",
    designation: "SaaS Founder",
    image: "/assets/user1.png",
  }
];

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 4,     
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, 
      { breakpoint: 640,  settings: { slidesToShow: 1 } }, 
    ],
  };

  return (
    <div className="lg:p-[120px] md:p-16 py-16 px-4">
      <h2 className="text-5xl font-semibold  text-[#F5F5F5] mb-12">
       What Our Clients Are Saying <span className="text-[#1FFFA5]">About Us</span>
      </h2>
      <p className="text-[16px] text-[#F5F5F5] font-normal mt-[9px] mb-12">Real feedback from real businesses who've seen real results.</p>

      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="px-4">
            <div className="bg-[#192420] p-6 text-white rounded-xl  h-full flex flex-col justify-between">
              {/* Ratings */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarFilledIcon key={i} className="text-[#1FFFA5] w-5 h-5" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#B3B3B3] mb-9 text-base  leading-relaxed">
                “{t.comment}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-6 mt-auto">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-[16px] font-medium">{t.name}</p>
                  <p className="text-[#B3B3B3] text-[12px] font-normal">{t.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
