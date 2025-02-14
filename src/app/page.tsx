// "use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getAllImages } from "~/server/queries";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  async function showImages() {
    const allImages = await getAllImages()

    return (
      <div className="flex flex-wrap">
        {allImages.map((image) => {
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
                <h2 className="text-white">{image.name}</h2>
              </Link>
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
        <Button className="flex p-4 text-2xl text-center  items-center justify-center text-white  " variant={'secondary'}>View As Guest</Button>
      </SignedOut>
      <SignedIn>{showImages()}</SignedIn>
    </main>
  );
}
