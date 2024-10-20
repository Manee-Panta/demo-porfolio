/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function Component2() {
  return (
    <section className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          It explains what kind of UX laws are used
        </h2>
        <p className="text-gray-600 mb-4">
          One-stop place to learn about User Experience. NNgroup is a
          consultancy firm that specializes in UX research and design. Their
          blog covers a wide range of topics related to UX, including usability,
          user research, and user testing. If you are looking for in-depth
          knowledge of any UX topics then this is the blog you should refer to
          and learn from.
        </p>

        {/* Fun Fact Section */}
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-md mb-6">
          <p className="text-purple-600 font-semibold">
            <span className="font-bold">Fun fact:</span> Founder of NNgroup Don
            Norman was the one who coined the term User
            <br /> Experience ! Just one word for the blogs on this platform,
            Awesome!
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/user experience.webp"
              alt="Demo Blog"
              className="w-full rounded-lg mb-4"
              width={800}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-semibold">
                  Discover creativity and how brands expand horizons
                </h2>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/platform.webp"
              alt="Demo Blog"
              className="w-full rounded-lg mb-4"
              width={800}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-semibold">EXPAND OUR HORIZON</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content Section */}
        <p className="text-gray-600">
          The blogs' topics range from tips & tricks, how to learn, the best
          resources out there, and so much more. It’s a great place to find
          inspiration and learn about the latest design trends. They not only
          have blogs related to UI/UX design but also on typography, branding,
          and user research, among other topics. If you are a junior UI/UX
          designer, you must check it out. Thankfully, there are many blogs and
          resources out there that can help you grow your expertise as a UI/UX
          designer.
        </p>
        <p className="text-gray-600 mt-4">
          The design world is constantly changing and here are 10 blogs to keep
          you updated with it. It’s crucial for you to keep up with the latest
          trends and technologies to stay ahead of the curve. It’s a blog that
          focuses on showcasing the UX breakdowns of top apps in a comic book
          format, making it super fun to read, visualize, and grasp concepts.
        </p>
      </div>
    </section>
  );
}
