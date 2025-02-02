"use client"; // This makes it a client component

import Image from "next/image";
export default function ImageZoom({
  image,
}: {
  image: { url: string; name: string };
}) {
  return (
    <div
      className={`flex flex-1 justify-center transition-transform duration-300`}
    >
      <Image
        src={image.url}
        width={1200}
        height={900}
        className="max-h-[85vh] w-auto rounded-lg object-contain"
        alt={image.name}
      />
    </div>
  );
}
