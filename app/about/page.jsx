"use client";
import React, { useState } from "react";
import Footer from "@/component/footerSection/Footer";
import Header from "@/component/headerSection/Header";
import Image from "next/image";
import { FaAnglesDown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("founder");
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNext = (length) => {
    setDirection("next");
    setSlide((prev) => (prev + 1) % length);
  };

  const handlePrev = (length) => {
    setDirection("prev");
    setSlide((prev) => (prev - 1 + length) % length);
  };

  const tabData = {
    founder: [
      {
        heading: "Founder",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic, eos consequuntur consectetur voluptatibus explicabo laborum. 
                Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic, eos consequuntur consectetur voluptatibus explicabo laborum. 
                Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Chaudhary Raghvendra Singh",
        subcaption: "Founder ",
      },
      {
        heading: "Achievements",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        
        
        - Vero cupiditate rem deleniti hic, eos consequuntur consectetur 
        - Voluptatibus explicabo laborum. Doloribus ea id, assumenda atque cumque, 
        - Fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat 
        - Quaerat! Laboriosam placeat vero voluptatem 
        `,
        image: "/images/section-pre-approved1.jpg",
        caption: "Chaudhary Raghvendra Singh",
        subcaption: "Founder",
      },
    ],

    emeritus: [
      {
        heading: "Chairman Emeritus, HDG",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic, eos consequuntur consectetur voluptatibus explicabo laborum. 
                
          Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.`,
        image: "/images/residential.jpg",
        caption: "K.P. Singh",
        subcaption: "Chairman Emeritus",
      },
      {
        heading: "Achievements",
        content: `Doloribus ea id, assumenda atque cumque, fugiat,

- Doloribus ea id, assumenda atque cumque, fugiat,  
- eum consequatur itaque quis perspiciatis ratione.
- eum consequatur itaque quis perspiciatis ratione commodi repellat. 
- eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat.`,
        image: "/images/residential.jpg",
        caption: "K.P. Singh",
        subcaption: "Chairman Emeritus",
      },
    ],

    chairman: [
      {
        heading: "Chairman",
        content: `eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.

Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Rajiv Singh",
        subcaption: "Chairman, HDG",
      },
      {
        heading: "Achievements",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic.  

- Led expansion into sustainable, eco-friendly projects.  
- Spearheaded luxury housing & green building initiatives.  
- Positioned HDG as a leader in modern urban infrastructure.  
- Driving innovation through smart cities and next-gen technology hubs.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Rajiv Singh",
        subcaption: "Chairman, HDG",
      },
    ],
  };

  const tabs = [
    { id: "founder", label: "MEET OUR FOUNDER" },
    { id: "emeritus", label: "MEET OUR CHAIRMAN EMERITUS" },
    { id: "chairman", label: "MEET OUR CHAIRMAN" },
  ];

  const leaders = [
    {
      name: "Mr. Devinder Singh",
      role: "Managing Director",
      image: "/images/section-pre-approved1.jpg",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Chairman",
      image: "/images/residential.jpg",
    },
    {
      name: "Mr. Amit Verma",
      role: "CEO",
      image: "/images/section-pre-approved1.jpg",
    },
    {
      name: "Ms. Anjali Sharma",
      role: "CFO",
      image: "/images/residential.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gray-50 text-gray-900 mb-30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="mb-10">
              <span className="block text-gray-500 italic mb-4 text-lg">
                — About Us
              </span>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                Home Developers Group is a "wholistic" group specializing in
                residential, commercial building and interior design. With over
                25 years of expertise, we have passionately curated premium
                projects, including luxury apartments, commercial complexes, and
                IT parks in South Delhi and beyond.
              </h1>
            </div>
            <div className="border-t border-gray-300 my-8"></div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                From the foundation to the furnishings, every project reflects
                our love for creating spaces that enhance the way people live
                and work
              </p>

              <p>
                Our team of experts combines innovative real estate development
                with sophisticated interior design to deliver spaces that
                inspire. By identifying opportunities and partnering with
                leading professionals, we add value to every asset while
                unlocking new possibilities for our clients and partners.
              </p>
            </div>
            <div className="flex justify-center mt-12">
              <span
                className="text-3xl cursor-pointer"
                onClick={() =>
                  window.scrollBy({ top: 100, behavior: "smooth" })
                }
              >
                <FaAnglesDown />
              </span>
            </div>{" "}
          </div>
        </div>
      </section>

      <>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center border border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-sm font-medium w-full ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSlide(0);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mt-10 bg-gray-100">
            <div className="relative h-[400px] md:h-auto">
              <Image
                src={tabData[activeTab][slide].image}
                alt={tabData[activeTab][slide].caption}
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">
                  {tabData[activeTab][slide].caption}
                </p>
                <p className="text-sm">
                  {tabData[activeTab][slide].subcaption}
                </p>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between h-[600px] overflow-hidden relative">
              <div className="relative h-full pr-4">
                <div
                  key={slide}
                  className={`absolute w-full transition-all duration-700 ${
                    direction === "next"
                      ? "animate-slide-in-right"
                      : "animate-slide-in-left"
                  }`}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    {tabData[activeTab][slide].heading}
                  </h2>
                  <div className="prose prose-lg">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {tabData[activeTab][slide].content}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8">
                <button
                  onClick={() => handlePrev(tabData[activeTab].length)}
                  className="px-6 py-3 bg-black text-white text-lg hover:bg-gray-800 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => handleNext(tabData[activeTab].length)}
                  className="px-6 py-3 bg-black text-white text-lg hover:bg-gray-800 transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      <section className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/4 bg-black text-white p-8 flex flex-col justify-between relative left-[-121px] h-[600px]">
          <h2 className="text-4xl font-bold mb-8">
            Our <br /> leadership
          </h2>
          <div className="flex gap-4">
            <button className="leader-prev w-12 h-12 flex items-center justify-center bg-white text-black hover:bg-gray-300">
              ←
            </button>
            <button className="leader-next w-12 h-12 flex items-center justify-center bg-white text-black hover:bg-gray-300">
              →
            </button>
          </div>
        </div>

        <div className="md:w-3/4 relative left-[30px]">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".leader-next",
              prevEl: ".leader-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-[400px]"
          >
            {leaders.map((leader, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full group cursor-pointer">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-sm text-gray-300">{leader.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
