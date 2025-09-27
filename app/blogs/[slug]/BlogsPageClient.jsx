"use client";

import Footer from "@/component/footerSection/Footer";
import Header from "@/component/headerSection/Header";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient({ blog, slug }) {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The blog you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold my-7">{blog.title}</h1>
        <p className="text-gray-500 mb-6">
          {blog.date} | {blog.category}
        </p>

        <div className="relative w-full h-[400px] mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded"
            priority // for ensures above the fold image loads fast
          />
        </div>

        <p className="text-lg leading-relaxed">{blog.details}</p>
      </div>

      <Footer />
    </>
  );
}
