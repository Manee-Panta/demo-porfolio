import HeroSection7 from "../Component/HomePageComponent/Component7/HeroSection";
import ServicesHeader from "../Component/ServicesComponent/Header";
import OfferingsSection from "../Component/ServicesComponent/OfferingsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "My Offerings | Logo Design, Brand Identity, Web & Mobile Design by Manita Panta",
  },
  description:
    "Explore the creative and development services, including logo design, brand identity, web/mobile design, illustration, and social media content creation.",
  alternates: {
    canonical: "http://localhost:3000/services",
  },
};

export default function ServicesSection() {
  return (
    <div>
      <ServicesHeader />
      <OfferingsSection />
      <HeroSection7 />
    </div>
  );
}
