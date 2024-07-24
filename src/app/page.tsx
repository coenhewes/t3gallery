import Link from "next/link";
import { db } from "../server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/6dc090bb-54be-4dcc-804c-176348b0b8b2-7kaas9.png",
  "https://utfs.io/f/4268961a-505b-43a1-8a1f-e4d01e11990c-7kaas9.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
  }));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
      {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
      {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
      </div>
      ))}
      </div>
    </main>
  );
}
