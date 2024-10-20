import Image from "next/image";

export function ImageSection() {
  return (
    <div className="relative lg:w-1/2">
      <div className="w-64 md:w-80 lg:w-100 h-64 md:h-80 lg:h-96 bg-gradient-to-r from-yellow-100 via-purple-100 to-pink-200 rounded-full flex items-center justify-center mx-auto">
        <Image
          src="/Manita_Panta.webp" // Update with actual path to the profile image
          width={200}
          height={250}
          alt="Profile Picture"
          className="rounded-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
