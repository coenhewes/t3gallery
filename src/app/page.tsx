import Link from "next/link";
import { db } from "../server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export const dynamic = "force-dynamic";



export default async function HomePage() {

  

async function Images() {

const images = await db.query.images.findMany({
    orderBy: ( model, { desc}) => desc(model.id),
    });



 return(<div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
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
