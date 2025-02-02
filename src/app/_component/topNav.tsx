import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./single-upload-btn";

export function TopNav() {
  return (
    <>
      <nav
        className={`flex items-center justify-between border-b-2 border-gray-200 px-4 py-2`}
      >
        <div>
          <h1 className={`text-3xl font-bold text-white`}>Gallery App</h1>
        </div>

        <div className="flex flex-row items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            {/* <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => router.refresh()}
            /> */}
            <div className="cursor-pointer px-3">
              {" "}
              <SimpleUploadButton />
            </div>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}
