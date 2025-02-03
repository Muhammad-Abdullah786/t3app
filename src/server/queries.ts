// import "server-only";
// import { db } from "./db";
// import { auth } from "@clerk/nextjs/server";
// import { and, eq } from "drizzle-orm";
// import { images } from "./db/schema";
// import { redirect } from "next/navigation";
// import serverSideAnalytics from "./analytics";
// import { revalidatePath } from "next/cache";

// export async function getMyImages() {
//   const user = await auth();

//   if (!user.userId) throw new Error("Unauthorized");

//   const images = await db.query.images.findMany({
//     where: (model, { eq }) => eq(model.userId, user.userId),
//     orderBy: (model, { desc }) => desc(model.id),
//   });

//   return images;
// }

// export async function getImage(id: number) {
//   const user = await auth();

//   if (!user.userId) throw new Error("user not exist");
//   const image = await db.query.images.findFirst({
//     // ?find first will only give one image this time
//     where: (model, { eq }) => eq(model.id, id),
//   });

//   if (!image?.userId) throw new Error("Image not found");

//   if (image?.userId !== user.userId)
//     throw new Error("you are not suppose to be here!! 😥  ");

//   return image;
// }

// export async function deleteImage(id: number) {
//   const user = await auth();

//   if (!user.userId) throw new Error("user not exist");
//   await db
//     .delete(images)
//     .where(and(eq(images.id, id), eq(images.userId, user.userId)));

//   serverSideAnalytics().capture({
//     distinctId: user.userId,
//     event: "deleting image",
//     properties: {
//       imageId: id,
//     },
//   });
//   revalidatePath("/");
//   redirect("/");
// }

import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import serverSideAnalytics from "./analytics";

export async function getMyImages() {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export async function getImage(id: number) {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image) throw new Error("Image not found");

  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
}

export async function deleteImage(id: number) {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  serverSideAnalytics().capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });
  redirect("/");
}
