import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div>
      <Image src={image.url} width={700} height={600} alt={image.name} />={" "}
    </div>
  );
}
