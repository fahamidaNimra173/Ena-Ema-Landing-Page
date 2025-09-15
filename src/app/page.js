import Image from "next/image";
import Banner from "./components/Banner";
import ImageSlider from "./components/ImageSlider";
import WhyToTrustUs from "./components/WhyToTrustUs";
import ChoosePlan from "./components/ChooseYourPlan";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import FinalAction from "./components/FinalAction";
import CaseStudy from "./components/CaseStudy";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ImageSlider></ImageSlider>
      <WhyToTrustUs></WhyToTrustUs>
     
      <div className="bg-[#151E1B]">
        <CaseStudy></CaseStudy>
         <ChoosePlan></ChoosePlan>
        <Process></Process>
        <Testimonial></Testimonial>
        <FAQ></FAQ>

      </div>
      <FinalAction></FinalAction>
    </div>
  );
}
