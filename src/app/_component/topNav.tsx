import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  // show gallery btn and sign and sign up
  return (
    <nav
      className={`flex items-center justify-between border-b-2 border-gray-200 px-4 py-2`}
    >
      <div>
        <h1 className={`text-3xl font-bold text-white`}>Gallery App</h1>
      </div>

      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {/* <div>
        <button
          className={`rounded-md px-4 py-2 text-sm text-white hover:text-orange-200`}
        >
          Sign In
        </button>
        <button
          className={`rounded-md px-4 py-2 text-sm text-white hover:text-orange-200`}
        >
          Sign Up
        </button>
      </div> */}
    </nav>
  );
}
