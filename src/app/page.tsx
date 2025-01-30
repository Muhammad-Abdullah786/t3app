import Image from "next/image";
import { db } from "~/server/db";

export default async function HomePage() {
  const mockData = [
    "https://images.pexels.com/photos/30320386/pexels-photo-30320386/free-photo-of-vintage-bicycle-leaning-against-old-wall-in-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/29734498/pexels-photo-29734498/free-photo-of-green-parakeet-perched-in-brazilian-rainforest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/29847097/pexels-photo-29847097/free-photo-of-scenic-icelandic-landscape-with-grazing-sheep.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  const images = mockData.map((url, index) => ({
    id: index + 1,
    url,
  }));

  const posts = await db.query.posts.findMany();

  console.log("hello ", posts);

  return (
    <main>
      <div className="flex flex-wrap">
        {posts.map((post, index) => (
          <div
            key={post.id + "-" + index}
            className="w-48 p-2 text-white sm:w-32 md:w-64"
          >
            <p>{post.name}</p>
          </div>
        ))}
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
              <Image
                src={image.url}
                width={200}
                height={200}
                alt=""
                className="h-64 w-full object-cover"
              />
            </div>
          );
        })}
      </div>
      hello workd!!
    </main>
  );
}
