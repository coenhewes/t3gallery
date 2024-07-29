import Link from "next/link";
import { db } from "../server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from "next/image";
import { getMyImages } from "../server/queries";

export const dynamic = "force-dynamic";



export default async function HomePage() {

  

async function Images() {
  const images = await getMyImages();

 return(<div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
          <Image 
            src={image.url} 
            style={{objectFit: "contain"}}
            width={192}
            height={192}
            alt={image.name} />
            </Link>
        <div>{image.name}</div>
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
