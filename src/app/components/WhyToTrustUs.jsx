const cards = [
  {
    image: "/assets/trust1.png",
    title: "Proven Conversion Framework",
    description:
      "Designs based on 100+ tested layouts that actually convert visitors into customers.",
  },
  {
    image: "/assets/trust2.png",
    title: "EAgency Level Design",
    description:
      "Modern, premium, and tailored for your brand - without the agency price tag.",
  },
  {
    image: "/assets/trust3.png",
    title: "5-day Guaranteed Delivery",
    description:
      "With a highly professional team, we deliver on time, everytime.",
  },
 
  {
    image: "/assets/trust5.png",
    title: "Transparent Process",
    description:
      "No hidden fees, just clear value. What you see is what you pay.",
  },
  {
    image: "/assets/trust6.png",
    title: "Revisions Until You're Happy",
    description:
      "We keep working until it's right. Your satisfaction is guaranteed.",
  },
   {
    image: "/assets/trust4.png",
    title: "Results That Speak",
    description:
      "Our pages consistently outperform industry averages for conversions.",
  }
];

export default function WhyToTrustUs() {
  return (
    <div className="md:p-16 lg:p-[120px] py-16 px-4  text-white">
      <div className="text-center mb-12">
        <h1 className="font-medium lg:text-5xl text-4xl">
          Why Businesses{" "}
          <span className="text-[#1FFFA5]">Trust Us</span> With Their Designs
        </h1>
        <p className="text-[16px] leading-6 mt-4 text-[#F5F5F5]">
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid gap-8 text-left rounded-b-lg grid-cols-1 md:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#192420] rounded-lg p-6  shadow-md hover:shadow-xl transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className=" mb-9 h-20 w-20 object-contain"
            />
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-[#B3B3B3] leading-4 text-sm ">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
