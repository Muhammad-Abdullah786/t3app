import { getImage } from "~/server/queries";
import ImageZoom from "./zoom";
import { clerkClient } from "@clerk/nextjs/server";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);
  const user = await clerkClient();
  const userInfo = await user.users.getUser(image.userId);
  return (
    <div className="flex h-screen items-center justify-center space-x-4 p-4">
      {/* Left Side: Image */}
      <div className="flex max-h-screen w-full max-w-xl flex-shrink-0">
        {/* <Image
          src={image.url}
          width={700}
          height={600}
          className="w-full rounded-lg object-contain"
          alt={image.name}
        /> */}
        <ImageZoom image={image} />
      </div>

      {/* Right Side: Text Information */}
      <div className="flex w-1/2 flex-col justify-center">
        <p className="text-xl font-bold">{image.name}</p>
        <p className="flex flex-row text-gray-500">
          <span className="flex p-2 text-stone-500"> Upoaded By</span>
          <span className="flex p-2 text-stone-500"> {userInfo?.fullName}</span>
        </p>
        <p className="flex flex-row text-gray-500">
          <span className="flex p-2 text-stone-500">Created On</span>
          <span className="flex p-2 text-stone-500">
            {" "}
            {new Date(image.createdAt).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
}
