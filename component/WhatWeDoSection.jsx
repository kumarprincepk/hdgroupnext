"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatWeDoSection() {
  const services = [
    {
      id: 1,
      title: "New Construction",
      description: `We design spaces with a timeless vision, balancing innovation and aesthetic appeal while keeping your budget in mind. Whether residential or commercial, our collaborative approach ensures that every project is thoughtfully designed and executed.`,
      image: "/images/Screenshot.png",
      ctaText: "Read More",
    },
    {
      id: 2,
      title: "Real Estate Consultancy",
      description: `We blend our 30 years of expertise with our dedication to service to give our clients the best solutions to their real
 estate challenges. If it is finding the right location for your dream house, or it is providing expertise on investment opportunities.`,
      image: "/images/Screenshot (85) (1).png",
      ctaText: "Read More",
    },

    {
      id: 3,
      title: "Interior Design",
      description: `Our interior design solutions are client centric, mixing bold elements with timeless sophistication. From traditional
 to contemporary, our portfolio is a reflection of your style and passions, creating environments that are a harmonious blend of contrast and unity.`,
      image: "/images/agent-item.jpg",
      ctaText: "Read More",
    },
    {
      id: 4,
      title: "Maintenance Services",
      description: `Our comprehensive maintenance solutions ensure that your space remains efficient, professional and safe. From daily
 inspections to cleaning and security, we handle it all.`,
      image: "/images/section-pre-approved1.jpg",
      ctaText: "Read More",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto">
        <div className="heading-section mb-7 text-left">
          <h4 className="text-1 split-text effect-right text-black">What we do</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-md overflow-hidden shadow-sm bg-[#07090b] w-full"
            >
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <div className="absolute inset-0 transform transition-transform duration-500 ease-in-out hover:scale-105 w-full">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover w-full"
                  />
                </div>
              </div>

              <div className="text-white p-6 w-full">
                {" "}
                <h3 className="text-xl md:text-2xl font-serif leading-tight">
                  <Link
                    href="/"
                    className="cursor-default"
                    // className="hover:underline"
                  >
                    {s.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-300 mt-4">{s.description}</p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="relative inline-flex items-center gap-3 rounded-full px-4 py-2 border border-white/10 text-sm font-medium
                               overflow-hidden text-white transition-colors duration-300 group"
                    aria-label={s.ctaText}
                  >
                    <span
                      className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out
                                 group-hover:scale-x-100"
                      aria-hidden="true"
                    ></span>

                    <span
                      className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/6
                                 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>

                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                      {s.ctaText}
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
