import Image from "next/image";

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  content: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  imageUrl,
  content,
}) => {
  return (
    <div className="flex flex-col items-start justify-start bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm font-medium text-gray-500 mb-4">{description}</p>
        <p className="text-sm text-gray-700">{content}</p>
      </div>
    </div>
  );
};
