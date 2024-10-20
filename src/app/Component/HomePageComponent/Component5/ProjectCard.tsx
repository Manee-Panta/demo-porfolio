import Image from "next/image";

interface ProjectCardProps {
  category: string;
  title: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-600">{category}</p>
      <div className="mt-4 flex items-center">
        <span className="inline-block w-6 h-6 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.707l3 3a1 1 0 01-1.414 1.414L11 9.414V14a1 1 0 11-2 0V9.414L7.707 10.707A1 1 0 116.293 9.293l3-3a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
