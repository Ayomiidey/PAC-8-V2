"use client";

import { signUpUser } from "@/lib/actions/user.action";
import { signUpDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import GoogleLoginButton from "../googleLoginButton";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    message: "",
    success: false,
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        disabled={pending}
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-purple-800 text-white shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
      >
        {pending ? "Submitting..." : "Sign Up"}
      </button>
    );
  };

  return (
    <form action={action} className="flex flex-col gap-6">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl  tracking-tight">Create an account</h1>
        <p className="text-sm text-gray-600">
          Enter your information below to sign up
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium leading-none ">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={signUpDefaultValues.name}
            required
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium leading-none ">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={signUpDefaultValues.email}
            required
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none "
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            defaultValue={signUpDefaultValues.password}
            required
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium leading-none "
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="confirmPassword"
            defaultValue={signUpDefaultValues.confirmPassword}
            required
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          />
        </div>
        <div>
          <SignUpButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-600">OR</span>
          </div>
        </div>

        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-primary underline-offset-4 hover:underline"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
