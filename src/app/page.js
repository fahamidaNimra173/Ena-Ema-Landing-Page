import Image from "next/image";
import Banner from "./components/Banner";
import ImageSlider from "./components/ImageSlider";
import WhyToTrustUs from "./components/WhyToTrustUs";
import ChoosePlan from "./components/ChooseYourPlan";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <ImageSlider></ImageSlider>
    <WhyToTrustUs></WhyToTrustUs>
    <ChoosePlan></ChoosePlan>
    <div className="bg-[#151E1B]">

    </div>
  </div>
  );
}
