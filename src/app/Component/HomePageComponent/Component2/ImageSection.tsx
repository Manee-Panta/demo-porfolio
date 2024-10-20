import Image from "next/image";

export function ImageSection() {
  return (
    <div className="mx-auto">
      <div className="relative w-[500px] h-[500px]" >
        {" "}
        {/* Set width and height for the container */}
        <Image
          src="/Manita.webp" // Update with the actual image path
          layout="fill" // Makes the image fill the container dimensions
          objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
          alt="Profile Picture"
          className="rounded-lg" // Applying a slight curve to the image
          loading="lazy"
        />
      </div>
    </div>
  );
}
