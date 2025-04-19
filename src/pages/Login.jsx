import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

function Login(){
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
             {/* <SignedOut> */}
        <SignIn/>
      {/* </SignedOut> */}
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}
        </div>
    )
}

export default Login