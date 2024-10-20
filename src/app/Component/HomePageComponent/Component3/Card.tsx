/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const buttonClass =
  "px-5 md:px-7 py-2 rounded-full text-xs md:text-sm font-medium transition ease-in-out duration-300";
import Image from "next/image";

export default function CardSection() {
  return (
    <div className="w-full">
      {/* Container for 2 cards in 1 row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Card Image */}
          <Image
            src="/Energy Saver - Website design.webp"
            alt="Card Image 1"
            className="w-full h-64 object-cover"
            width={384}
            height={256}
          />
          
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Energy Saver - Website design
            </h3>
            <p className="text-gray-500">Web Design</p>
            {/* Arrow Button */}
            <div className="mt-4">
              <button className="inline-flex items-center text-blue-600 font-semibold">
                <span className="mr-2">Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Card Image */}
          <Image
            src="/Website design.webp"
            alt="Card Image 2"
            className="w-full h-64 object-cover"
            width={384}
            height={256}
          />
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Creative - Website design
            </h3>
            <p className="text-gray-500">Web Design</p>
            {/* Arrow Button */}
            <div className="mt-4">
              <button className="inline-flex items-center text-blue-600 font-semibold">
                <span className="mr-2">Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Full Width Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden md:col-span-2">
          {/* Card Image */}
          <Image
            src="/online-shopping.webp"
            alt="Card Image 3"
            className="w-full h-64 object-cover"
            width={584}
            height={256}
          />
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Ecommerce - Website design
            </h3>
            <p className="text-gray-500">Web Design</p>
            {/* Arrow Button */}
            <div className="mt-4">
              <button className="inline-flex items-center text-blue-600 font-semibold">
                <span className="mr-2">Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className={`${buttonClass} lg:mt-12 lg:mb-16 bg-gradient-to-r from-gray-400 to-red-500 text-black shadow-lg hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transform transition-transform`}
        >
          Let's see more
        </button>
      </div>
    </div>
  );
}
