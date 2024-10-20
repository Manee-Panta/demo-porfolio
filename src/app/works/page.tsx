import HeroSection7 from "../Component/HomePageComponent/Component7/HeroSection";
import Component1 from "../Component/WorksComponent/Component1";
import Component2 from "../Component/WorksComponent/Component2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute:"Manita Panta's Portfolio & Blog | UI/UX Design, Development, and SEO"
},
  description: "Browse my portfolio and blog to see my latest works in UI/UX design and frontend development, along with tips and insights on SEO and web design.",
  alternates: {
    canonical: 'http://localhost:3000/works',
  },
};
  
export default function BlogSection() {
  return (
    <section className="bg-white text-gray-800 py-12 px-6">
      <Component1 />
      <Component2 />
      <HeroSection7 />
    </section>
  );
}
