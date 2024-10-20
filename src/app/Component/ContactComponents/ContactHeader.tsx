/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactHeader = () => {
  return (
    <div>
      <section className="flex flex-col items-center lg:mt-6 lg:mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
            Contact
          </span>
        </h1>
        <div className="border-t-4 border-gray-300 w-52 my-4"></div>
        <p className="text-gray-600 text-sm md:text-base px-4 max-w-xl">
          Let's connect and Cerate something amazaing Togerther; Reach Out to
          Start Conversation About Your Project or Idea Today!
        </p>
      </section>
    </div>
  );
};

export default ContactHeader;
