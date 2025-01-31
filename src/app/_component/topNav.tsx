"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <>
      <nav
        className={`flex items-center justify-between border-b-2 border-gray-200 px-4 py-2`}
      >
        <div>
          <h1 className={`text-3xl font-bold text-white`}>Gallery App</h1>
        </div>

        <div className="flex flex-col">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => router.refresh()}
            />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}
