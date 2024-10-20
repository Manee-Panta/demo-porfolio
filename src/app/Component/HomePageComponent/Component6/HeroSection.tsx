import React from "react";
import { BlogPostCard } from "./BlogPost";

const HeroSection6: React.FC = () => {
  const posts = [
    {
      title: "It’s a blog that focuses on showcasing the UX",
      description:
        "It’s a blog that focuses on showcasing the UX breakdowns of top apps.",
      content:
        "It’s a blog that focuses on showcasing the UX breakdowns of top apps in a comic book format, making it super fun.",
      imageUrl: "/Focus.webp",
    },
    {
      title: "One-stop place to learn about User Experience",
      description:
        "Their blog covers a wide range of topics related to UX, usability, user research, and testing.",
      content:
        "Their blog covers a wide range of topics related to UX, including usability, user research, and user testing.",
      imageUrl: "/user experience.webp",
    },
    {
      title: "Just one word for the blogs on this platform",
      description:
        "The blogs’ topics range from tips & tricks to how to learn UX and the best resources out there.",
      content:
        "The blogs’ topics range from tips & tricks, how to learn, the best resources out there, and much more.",
      imageUrl: "/platform.webp",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest Blog Post</h2>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100">
            My Portfolio →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              description={post.description}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection6;
