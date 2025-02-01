// import Image from "next/image";
// import { getImage } from "~/server/queries";
// import { Modal } from "./modal";

// export default async function PhotoModal({
//   params: { id: photoId },
// }: {
//   params: { id: string };
// }) {
//   const idNumber = Number(photoId);
//   if (Number.isNaN(idNumber))
//     throw new Error(`invalid id its not a number!!!  🤬 `);
//   const image = await getImage(idNumber);

//   return (
//     <div>
//       <Modal>
//         {/* <FullPageImageView photoId={photoId} /> */}
//         <Image src={image.url} width={700} height={600} alt={image.name} />
//       </Modal>
//     </div>
//   );
// }

import Image from "next/image";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const photoId = params.id; // Access params.id properly

  const idNumber = Number(photoId);
  if (Number.isNaN(idNumber))
    throw new Error(`Invalid ID! It's not a number! 🤬`);

  const image = await getImage(idNumber);

  return (
    <div>
      <Modal>
        <Image src={image.url} width={700} height={600} alt={image.name} />
      </Modal>
    </div>
  );
}
