// import { ImageSection } from "./ImageSection";
// import { TextSection } from "./TextSection";

import CardSection from "./Card";

export function HeroSection3() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row justify-between max-w-screen-xl mx-auto px-6 md:px-16 lg:mb-10">
        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900 leading-tight">
          Explore My Latest Work
        </h2>
      </section>

      <section className="flex flex-col-reverse lg:flex-row justify-between max-w-screen-xl mx-auto px-6 md:px-16">
        <CardSection />
      </section>
    </div>
  );
}
