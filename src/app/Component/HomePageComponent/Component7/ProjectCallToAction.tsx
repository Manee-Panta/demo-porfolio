import React from "react";

const ProjectCallToAction = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Have a project in
          <br /> mind? Let’s get to
          <br /> work.{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          <span role="img" aria-label="mailbox">
            📬
          </span>
        </h2>
      </div>

      <div className="flex space-x-4">
        {/* Say Hello Button with Gradient */}
        <button className="px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 font-semibold rounded-full shadow-lg hover:opacity-90">
          Say Hello →
        </button>

        {/* My Portfolio Button with Outline */}
        <button className="px-6 py-3 text-gray-900 border border-gray-300 font-semibold rounded-full hover:bg-gray-100">
          My Portfolio
        </button>
      </div>
    </div>
  );
};

export default ProjectCallToAction;
