import { ButtonSection } from "./ButtonSection";
import { SocialIcons } from "./SocialIcons";

export function TextSection() {
  return (
    <div className="max-w-2xl space-y-4 md:space-y-6 text-center lg:text-left mt-6 lg:mt-0 lg:w-1/2">
      <SocialIcons />
      <div className="flex justify-center lg:justify-start items-center space-x-2 md:space-x-3 mb-4 lg:mt-20 md:mt-10">
        <span className="text-3xl md:text-4xl">👋</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Hey there, <br /> It’s{" "}
          <span className="underline decoration-yellow-400 decoration-4">
            Manita
          </span>
          .
        </h1>
      </div>
      <p className="text-sm md:text-lg text-gray-600 leading-relaxed px-2 lg:px-0 text-justify">
        Welcome to my creative corner! I’m Manita Panta, a passionate UI/UX
        designer and frontend developer with three years of experience crafting
        digital experiences that are not only visually stunning but also
        user-friendly. My expertise lies in creating seamless interfaces that
        engage users, and I’m equally excited about optimizing websites for
        search engines to ensure they reach the right audience.
      </p>
      <ButtonSection />
    </div>
  );
}
