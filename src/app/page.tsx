import { HeroSection1 } from "./Component/HomePageComponent/Component1/HeroSection";
import { HeroSection2 } from "./Component/HomePageComponent/Component2/HeroSection";
import { HeroSection3 } from "./Component/HomePageComponent/Component3/HeroSection";
import { HeroSection4 } from "./Component/HomePageComponent/Component4/HeroSection";
import HeroSection5 from "./Component/HomePageComponent/Component5/HeroSection";
import HeroSection6 from "./Component/HomePageComponent/Component6/HeroSection";
import HeroSection7 from "./Component/HomePageComponent/Component7/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="space-y-11">
        <HeroSection1 />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <HeroSection5 />
        <HeroSection6 />
        <HeroSection7 />
      </div>
    </div>
  );
}
