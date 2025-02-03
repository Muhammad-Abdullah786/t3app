import { Modal } from "./modal";
import FullPageImageView from "~/common/full-image-reusabel";
export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
