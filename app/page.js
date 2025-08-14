"use client";
import Loader from "@/component/Loader";
import CounterScroll from "@/component/CounterScroll";
import Header from "@/component/headerSection/Header";
import Footer from "@/component/footerSection/Footer";
import VideoSection from "@/component/heroSection/VideoSection";
import AboutSection from "@/component/AboutSection";
import WhatWeDoSection from "@/component/WhatWeDoSection";
import WhyTrustUsSection from "@/component/WhyTrustUsSection";
import ReadMoreSection from "@/component/ReadMoreSection";
import TestimonialsSection from "@/component/TestimonialsSection";
import GalleryImage from "@/component/GalleryImage";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
    </div>
  );
}
