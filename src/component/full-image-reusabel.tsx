import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div className="flex h-screen items-center justify-center space-x-4 p-4">
      {/* Left Side: Image */}
      <div className="flex w-1/2 max-w-xl flex-shrink-0">
        <Image
          src={image.url}
          width={700}
          height={600}
          className="w-full rounded-lg object-contain"
          alt={image.name}
        />
      </div>

      {/* Right Side: Text Information */}
      <div className="flex w-1/2 flex-col justify-center space-y-4">
        <p className="text-xl font-bold">{image.name}</p>
        <p className="text-gray-500">Additional text here...</p>
      </div>
    </div>
  );
}
