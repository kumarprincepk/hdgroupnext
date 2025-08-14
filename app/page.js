"use client";
import Loader from "@/component/Loader";
import CounterScroll from "@/component/CounterScroll";
import Header from "@/component/Header";
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
    <div className="counter-scroll theme-color-1">
      {/* <div className="theme-color-1"> */}
      <div id="wrapper">
        {/* <Loader />
        <CounterScroll /> */}
        <Header />
        <VideoSection />
        <AboutSection />
        <GalleryImage/>
        <WhatWeDoSection />
        <WhyTrustUsSection />
        <TestimonialsSection/>
        <ReadMoreSection />
        <Footer className="" />
      </div>
    </div>
  );
}
