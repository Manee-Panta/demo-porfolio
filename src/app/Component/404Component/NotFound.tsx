/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";

const NotFoundComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-white-50">
        <div className="flex flex-col items-center md:flex-row space-x-0 md:space-x-12 p-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                404
              </span>
            </h1>{" "}
            <h2 className="mt-2 text-2xl font-semibold text-gray-800">
              Page Not Found
            </h2>
            <p className="mt-4 text-gray-500">
              We're sorry, the page you requested could not be found. <br />
              Please go back to the homepage.
            </p>
            <Link
              className="inline-block px-6 py-2 mt-6 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-md"
              href="/"
            >
              Go Home
            </Link>
          </div>

                    <div className="mt-8 md:mt-0">
            <Image
              src="/404.jpg"
              alt="Fallen Plant Pot"
              width={320} // example width in pixels
              height={100} // keeping height auto-adjusting
              className="w-80 h-auto"
             
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
