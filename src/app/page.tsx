import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  async function showImages() {
    //?the default order will be oldest to newest we will change that
    const images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });

    return (
      <div className="flex flex-wrap">
        {[
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
        ].map((image, index) => {
          return (
            <div
              key={image.id + "-" + index}
              className="w-48 p-2 sm:w-32 md:w-64"
            >
              <img
                src={image.url}
                width={200}
                height={200}
                alt=""
                className="h-64 w-full object-cover"
              />
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
