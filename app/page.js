"use client";
import Loader from "@/component/Loader";
import CounterScroll from "@/component/CounterScroll";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import VideoSection from "@/component/VideoSection";
import AboutSection from "@/component/AboutSection";
import WhatWeDoSection from "@/component/WhatWeDoSection";
import WhyTrustUsSection from "@/component/WhyTrustUsSection";
import ReadMoreSection from "@/component/ReadMoreSection";

export default function Home() {
  return (
    <div>
      {/* <div className="theme-color-1"> */}
      <div>
        {/* <Loader />
        <CounterScroll /> */}
        <Header />
        <VideoSection />
        <AboutSection />
        <WhatWeDoSection />
        <WhyTrustUsSection />
        <ReadMoreSection />
        <Footer className="" />
      </div>
    </div>
  );
}
