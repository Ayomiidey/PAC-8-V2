"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-white border border-gray-300 text-gray-700 shadow hover:bg-gray-50"
      type="button"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
