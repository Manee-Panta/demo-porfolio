/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";

// Accordion Item Component
interface AccordionItemProps {
  title: string;
  description: string;
  imageUrl: string | null; // The imageUrl can be null or a string
  active: boolean;
  onToggle: () => void;
}

// Accordion Item Component with TypeScript
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  imageUrl,
  active,
  onToggle,
}) => {
  return (
    <div className="border-t border-gray-300 py-4">
      <div className="flex justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex">
          <span className="text-2xl font-bold text-black">{title}</span>
        </div>
        <span className="text-xl">{active ? "-" : "+"}</span>
      </div>
      {active && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">{description}</p>
          {imageUrl && (
            <div className="mt-4">
              <Image
                src={imageUrl}
                alt="example"
                width={600}
                height={300}
                className="rounded-md"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Main Accordion Component
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Web Design",
      description:
        "Passionate web designer with 3 years' experience. User-centric, visually captivating websites. Let's create your digital masterpiece together",
      imageUrl: '/web development.webp', // Update with your image
    },
    {
      title: "UI/UX Design",
      description:
        "Experienced UI/UX designer. Intuitive, delightful digital experiences. Let's design user-centered solutions that resonate and inspire.",
      imageUrl: '/UI.webp',
    },
    {
      title: "Mobile Application",
      description:
        "Expert mobile app designer. Crafting sleek, user-friendly experiences. Let's transform your idea into a stunning, intuitive mobile application",
      imageUrl: "/mobile application.webp", // Update with your image
    },
    {
      title: "User Research",
      description:
        "User-centric researcher. Leveraging insights to shape impactful experiences. Let's valuable perspectives for your project's success.",
      imageUrl: '/user research.webp', // Update with your image
    },
  ];

  const handleToggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mx-52 px-4 py-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          active={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
