// app/services/[slug]/page.jsx
import Footer from "@/component/footerSection/Footer";
import Header from "@/component/headerSection/Header";
import serviceDetails from "@/public/data/pageInfo";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist.
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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {service.heading}
          </h1>

          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.heading}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              {service.details}
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Services
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
