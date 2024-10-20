/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const socialIconClass =
  "text-md text-gray-700 hover:text-gray-900 transition-transform duration-300 transform hover:scale-125 hover:shadow-lg";

const Component1 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Blog Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          It’s a blog that focuses on showcasing the UX
        </h2>
        <p className="text-gray-600 mb-6">
          It’s a blog that focuses on showcasing the UX breakdowns of top apps
          in a comic book format, making it super fun. Dive into the fascinating
          world of color theory and learn how to create captivating visual
          designs Dive into the fascinating world of color theory and learn how
          to create captivating visual designs. Dive into the fascinating world
          of color theory and learn how to create captivating visual designs!
        </p>

        {/* Featured Image and Description */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <Image
            src="/Focus.webp"
            alt="Demo Blog"
            className="w-full rounded-lg mb-4"
            width={800}
            height={400}
          />
        </div>

        {/* Share Section */}
        <div className="flex items-center justify-start space-x-4 mb-6">
          <span className="text-gray-600 font-semibold">Share this:</span>
          {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map(
            (Icon, idx) => (
              <a href="#" key={idx} className={socialIconClass}>
                <Icon />
              </a>
            )
          )}
        </div>

        {/* Blog Content */}
        <p className="text-gray-600">
          Thankfully, there are many blogs and resources out there that can help
          you grow your expertise as a UI/UX designer. Here are 10 blogs that
          you should check out. The design world is constantly changing and here
          are 10 blogs to keep you updated with it. It’s crucial for you to keep
          up with the latest trends and technologies to stay ahead of the curve.
          It’s a blog that focuses on showcasing the UX breakdowns of top apps
          in a comic book format, making it super fun to read, visualize and
          grasp concepts.
        </p>
      </div>
    </div>
  );
};

export default Component1;
