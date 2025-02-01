// "use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  async function showImages() {
    const images = await getMyImages();

    return (
      <div className="flex flex-wrap">
        {images.map((image) => {
          return (
            <div key={image.id} className="w-48 p-2 sm:w-32 md:w-64">
              <Link href={`/img/${image.id}`}>
                <Image
                  src={image.url}
                  width={500}
                  height={500}
                  alt={image.name}
                  className="h-64 w-full object-cover"
                />
              </Link>
              <h2 className="text-white">{image.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-3xl">
          <p>You are not signed in.</p>
          <p>Please sign in to access your images.</p>
        </div>
      </SignedOut>
      <SignedIn>{showImages()}</SignedIn>
    </main>
  );
}
