import Link from "next/link";
import { db } from "../server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { getMyImages } from "../server/queries";

export const dynamic = "force-dynamic";



export default async function HomePage() {

  

async function Images() {
  const images = await getMyImages();

 return(<div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
      </div>
      ))}
      </div>
);
}

  return (
    <main className="">

    <SignedOut>
      <div className="w-full h-full text-2x1 text-center"> Please Sign In Above</div>
    </SignedOut>
    <SignedIn>
     <Images /> 
      </SignedIn>
    </main>
  );
}
