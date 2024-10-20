import React from "react";
import { ProjectCard } from "./ProjectCard";

const HeroSection5: React.FC = () => {
  const projects = [
    {
      category: "Web Design",
      title: "Energy Saver - Website",
      imageUrl: "/Energy Saver - Website design.webp", // Replace with actual image path
    },
    {
      category: "Mobile Application",
      title: "Financial Application Design",
      imageUrl: "/Finance.webp",
    },
    {
      category: "UX Case Study",
      title: "Real Estate Dashboard Design",
      imageUrl: "/Real Estate Dashboard Design.webp",
    },
    {
      category: "UX Case Study",
      title: "Health Dashboard Design",
      imageUrl: "/digital-health-management.webp",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black">Latest Project</h2>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100">
          Let&apos;s See More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            category={project.category}
            title={project.title}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection5;
