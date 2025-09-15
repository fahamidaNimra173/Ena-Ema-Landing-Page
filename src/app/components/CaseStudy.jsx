"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { FaArrowRight } from "react-icons/fa";

const productCards = [
    {
        image: "/assets/slider1.png",
        title: "Flowpilot",
        features: [
            "20% higher conversion in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        image: "/assets/slider2.png",
        title: "GrowthSummit",
        features: [
            "20% higher conversion in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        image: "/assets/slider3.png",
        title: "Flowpilot",
        features: [
            "20% higher conversion in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        image: "/assets/slider1.png",
        title: "Flowpilot",
        features: [
            "20% higher conversion in first week",
            "Clean and modern design with clear CTA",
        ],
    },
    {
        image: "/assets/slider2.png",
        title: "Blog Platform",
        features: [
            "20% higher conversion in first week",
            "Clean and modern design with clear CTA",
        ],
    },
];

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
};

export default function CaseStudy() {
    return (
        <div className="overflow-hidden  lg:py-[120px] py-16 px-4">
            <h2 className="text-5xl font-medium text-center text-[#F5F5F5] mb-12">
                Case Studies
            </h2>
            <p className="text-white text-center font-normal text-[16px] mb-14">
                See the designs that delivered results
            </p>

            <Slider {...settings}>
                {productCards.map((card, idx) => (
                    <div key={idx} className="px-4">
                        <div className="border-2 p-4 border-[#2a3c36] rounded-2xl overflow-hidden min-h-[400px] shadow-lg">
                            {/* Image */}
                            <Image
                                src={card.image}
                                alt='project image'
                                width={559}
                                height={372}
                                className="w-full mt-3 h-48 object-cover rounded-lg"
                            />

                            <div className="p-6 flex flex-col gap-4">
                                <h3 className="text-2xl font-bold text-white">{card.title}</h3>

                                {/* Features list */}
                                <ul className="space-y-2 text-[#B3B3B3] text-sm">
                                    {card.features.map((f, i) => (
                                        <li key={i} className="flex items-start bg-[#003d25] rounded-2xl px-3 py-[9px] gap-2">
                                            <CheckIcon className="w-4 h-4 text-[#1FFFA5]" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="mt-12 flex flex-col items-center justify-center">
                <button className="btn justify-center  text-[#201301] text-[16px] font-normal flex items-center gap-2">Claim my 10% discount <ArrowRightIcon></ArrowRightIcon> </button>
            </div>

        </div>
    );
}
