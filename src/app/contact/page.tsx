import React from "react";
import ContactHeader from "../Component/ContactComponents/ContactHeader";
import ContactForm from "../Component/ContactComponents/ContactForm";
import HeroSection7 from "../Component/HomePageComponent/Component7/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Connect with Manita Panta | UI/UX Design & Frontend Development",
  },
  description:
    "Interested in working with Manita Panta? Contact me for UI/UX design, frontend development, or SEO consulting. I’m excited to discuss your next project.",
  alternates: {
    canonical: "http://localhost:3000/contact",
  },
};

const page = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <HeroSection7 />
    </div>
  );
};

export default page;
