"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      
      <h1 className="text-3xl font-bold mb-4">
        404 Page Not Found
      </h1>

      <p className="text-gray-500 mb-4">
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <button className="mt-2 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
           Back to Home
        </button>
      </Link>

    </div>
  );
}