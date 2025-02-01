import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages(userId:string) {
  //?the default order will be oldest to newest we will change that
  const user = await auth();
  if (!user.userId) console.log("unautherize");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}
