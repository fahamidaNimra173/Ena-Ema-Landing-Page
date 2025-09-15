

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const images = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
"/assets/gallery-1.png"
];

export default function TwoImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 2 >= images.length ? 0 : prev + 2
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) => (prev + 2 >= images.length ? 0 : prev + 2)),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 2 < 0 ? images.length - 2 : prev - 2)),
    trackMouse: true,
  });

  // Get two images for current frame
  const currentImages = images.slice(current, current + 2);
  if (currentImages.length < 2) {
    // wrap around if we are at the end
    currentImages.push(...images.slice(0, 2 - currentImages.length));
  }

  return (
    <div
      {...handlers}
      className="w-full lg:mt-[131px] md:mt-0 mt-7 pb-5  overflow-hidden rounded-lg px-2"
    >
      <div className="flex transition-transform duration-700 ease-in-out gap-4">
        {currentImages.map((img, idx) => (
          <div key={idx} className="relative rounded-lg md:w-1/2 w-full overflow-hidden   h-64 md:h-[470px]">
            <Image
              src={img}
              alt={`Slide ${current + idx + 1}`}
              fill
              className="object-cover   rounded-lg "
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(images.length / 2) }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx * 2)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === idx * 2 ? "bg-green-400" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
