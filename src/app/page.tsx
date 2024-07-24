import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6dc090bb-54be-4dcc-804c-176348b0b8b2-7kaas9.png",
  "https://utfs.io/f/4268961a-505b-43a1-8a1f-e4d01e11990c-7kaas9.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
  }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> 
      {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
      </div>
      ))}
      </div>
    </main>
  );
}
