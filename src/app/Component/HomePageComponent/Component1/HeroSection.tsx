import { ImageSection } from "./ImageSection";
import { TextSection } from "./TextSection";

export function HeroSection1() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between max-w-screen-xl mx-auto px-6 md:px-16">
      <TextSection />
      <ImageSection />
    </section>
  );
}
