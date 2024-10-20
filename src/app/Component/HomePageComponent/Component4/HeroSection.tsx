import Accordion from "./Accordin";

export function HeroSection4() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row justify-between max-w-screen-xl mx-auto px-6 md:px-16 lg:mb-10">
        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900 leading-tight">
          My Offerings for You
        </h2>
      </section>

      <Accordion />
    </div>
  );
}
