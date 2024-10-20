import React from "react";
import { HeroSection2 } from "../Component/HomePageComponent/Component2/HeroSection";
import BrandsPartnered from "../Component/AboutUsComponent/Brands";
import { HeroSection3 } from "../Component/HomePageComponent/Component3/HeroSection";
import { HeroSection4 } from "../Component/HomePageComponent/Component4/HeroSection";
import HeroSection5 from "../Component/HomePageComponent/Component5/HeroSection";
import HeroSection7 from "../Component/HomePageComponent/Component7/HeroSection";
import HeroSection6 from "../Component/HomePageComponent/Component6/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Me | Manita Panta, Creative UI/UX Designer & Developer",
  },
  description:
    "Manita, UI/UX designer and frontend developer specializing in seamless, user-centered web experiences. Discover my journey, skills, and design approach.",
  alternates: {
    canonical: "http://localhost:3000/about",
  },
};

const page = () => {
  return (
    <div>
      <section className="flex flex-col items-center lg:mt-6 lg:mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
            About Us
          </span>
        </h1>
        <div className="border-t-4 border-gray-300 w-52 my-4"></div>
        <p className="text-gray-600 text-sm md:text-base px-4 max-w-xl">
          Empowering Your Vision Through Creative Design Solutions, Intuitive
          User Experiences, and Innovative Design Thinking
        </p>
      </section>
      <HeroSection2 />
      <BrandsPartnered />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroSection6 />
      <HeroSection7 />
    </div>
  );
};

export default page;
