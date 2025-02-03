import { getImage } from "~/server/queries";
// import ImageZoom from "./zoom";
import Image from "next/image";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "../components/ui/button";
import { deleteImage } from "~/server/queries";
export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);
  const user = await clerkClient();
  const userInfo = await user.users.getUser(image.userId);
  return (
    <div className="flex h-screen items-center justify-center space-x-2 text-white">
      {/* Left Side: Image */}
      <div className="flex max-h-screen w-full max-w-xl flex-shrink-0">
        <Image
          src={image.url}
          width={700}
          height={600}
          className="w-full rounded-lg object-contain"
          alt={image.name}
        />
        {/* <ImageZoom image={image} /> */}
      </div>

      {/* Right Side: Text Information */}
      <div className="flex w-1/2 flex-col justify-center">
        <p className="text-xl font-bold">{image.name}</p>
        <div className="p-2 text-base">
          <p className="flex flex-row text-gray-500">
            <span className="flex font-semibold text-stone-500">
              {" "}
              Upoaded By:{" "}
            </span>
            <span className="flex text-orange-400"> {userInfo?.fullName}</span>
          </p>
          <p className="flex flex-row text-gray-500">
            <span className="flex font-semibold text-stone-500">
              Created On:{" "}
            </span>
            <span className="flex text-orange-400">
              {" "}
              {new Date(image.createdAt).toLocaleDateString()}
            </span>
          </p>
          <form
            action={async () => {
              "use server";
              await deleteImage(props.photoId);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
