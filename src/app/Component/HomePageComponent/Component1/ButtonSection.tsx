const buttonClass =
  "px-5 md:px-7 py-2 rounded-full text-xs md:text-sm font-medium transition ease-in-out duration-300";

export function ButtonSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
      <button
        className={`${buttonClass} bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transform transition-transform`}
      >
        Say Hello
      </button>
      <button
        className={`${buttonClass} border-2 border-gray-300 hover:border-gray-400 text-black shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform`}
      >
        My Portfolio
      </button>
    </div>
  );
}
