/* eslint-disable react/no-unescaped-entities */
import { ButtonSection } from "./ButtonSection";

export function TextSection() {
  return (
    <div className="max-w-2xl space-y-4 md:space-y-6 text-center lg:text-left mt-6 lg:mt-0 lg:w-2/3">
      <div className="flex justify-center lg:justify-start items-center space-x-2 md:space-x-3 mb-4 lg:mt-20 md:mt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          About Me
        </h2>
      </div>
      <p className="text-sm md:text-lg text-gray-600 leading-relaxed px-2 lg:px-0 text-justify">
        I thrive on blending creativity with functionality, ensuring that every
        project I work on delivers a captivating user experience and performs
        well across platforms. With my strong foundation in frontend
        development, I bring designs to life with clean, efficient code, while
        my deep interest in SEO helps optimize those experiences for visibility
        and engagement. Whether it's building an intuitive interface, enhancing
        usability, or improving a site's search engine ranking, I’m always
        driven by the goal of creating meaningful, user-centered solutions.
      </p>
      <ButtonSection />
    </div>
  );
}
