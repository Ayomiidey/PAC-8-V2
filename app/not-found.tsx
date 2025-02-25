"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500">
        <p>
          Need help?{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
