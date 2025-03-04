import { Metadata } from "next";
import Image from "next/image";
import SignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/images/pac8BlackLogo.png"
          alt="Pac8 logo"
          fill
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};

export default SignInPage;
