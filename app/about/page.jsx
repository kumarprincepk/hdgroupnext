// import Footer from "@/component/footerSection/Footer";
// import Header from "@/component/headerSection/Header";

// export default function About() {
//   return (
//     <>
//     <Header/>
//     <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
//       Hello About
//     </span>
//     <Footer/>
//     </>
//   );
// }

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
        heading: "Founder, DLF",
        content: `Chaudhary Raghvendra Singh founded DLF in 1946, in pre-independent India.
A born businessman, he began his real estate career by transforming the urban landscape of Delhi's National Capital Region,
providing millions of homes to families displaced by partition who settled in the capital.

Born on September 19, 1910 and originally a graduate of St. Stephen's College, Delhi, Chaudhary Saheb went on to join the Indian Army
where he rose to the rank of Major and was decorated with an MBE for exemplary service.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Chaudhary Raghvendra Singh",
        subcaption: "Founder DLF",
      },
      {
        heading: "Achievements",
        content: `Chaudhary Raghvendra Singh’s vision transformed the Indian real estate industry.

- Development of 22 urban colonies in Delhi before independence.  
- Expansion into Gurugram in 1985, creating a modern business hub.  
- Establishing DLF as India's largest publicly listed real estate company.  
- Contributions to education, philanthropy and welfare for ex-servicemen.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Chaudhary Raghvendra Singh",
        subcaption: "Founder DLF",
      },
    ],

    emeritus: [
      {
        heading: "Chairman Emeritus, DLF",
        content: `K.P. Singh, Chairman Emeritus of DLF, is widely regarded as the man who
transformed Gurugram into a global business destination. His leadership turned DLF
into a powerhouse in Indian real estate.

Educated at DSOE (UK), he joined DLF in 1979 and spearheaded expansion into commercial,
retail, and IT parks that reshaped India's corporate infrastructure.`,
        image: "/images/residential.jpg",
        caption: "K.P. Singh",
        subcaption: "Chairman Emeritus, DLF",
      },
      {
        heading: "Achievements",
        content: `K.P. Singh’s visionary leadership reshaped modern India.  

- Pioneered Gurugram as India’s financial & technology hub.  
- Expanded DLF’s footprint across residential, retail, and IT parks.  
- Credited with creating millions of jobs through infrastructure growth.  
- Honored globally for entrepreneurship and leadership in real estate.`,
        image: "/images/residential.jpg",
        caption: "K.P. Singh",
        subcaption: "Chairman Emeritus, DLF",
      },
    ],

    chairman: [
      {
        heading: "Chairman, DLF",
        content: `Rajiv Singh, the current Chairman of DLF, continues the legacy with a
forward-looking vision. He has been instrumental in steering DLF into sustainable
development, luxury housing, and green building initiatives.

Under his leadership, DLF has embraced technology-driven projects, urban mobility, and
next-generation workspaces.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Rajiv Singh",
        subcaption: "Chairman, DLF",
      },
      {
        heading: "Achievements",
        content: `Rajiv Singh has strengthened DLF’s position in India’s real estate sector.  

- Led expansion into sustainable, eco-friendly projects.  
- Spearheaded luxury housing & green building initiatives.  
- Positioned DLF as a leader in modern urban infrastructure.  
- Driving innovation through smart cities and next-gen technology hubs.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Rajiv Singh",
        subcaption: "Chairman, DLF",
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
          {/* About Section (top) */}
          <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Section Heading */}
            <div className="mb-10">
              <span className="block text-gray-500 italic mb-4 text-lg">
                — About Us
              </span>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                At DLF, we take pride in our unwavering integrity in customer
                engagement and quality assurance. Throughout our over 78-year
                legacy, it has been our core mission to deliver real-estate
                development, management, and investment services of the highest
                calibre.
              </h1>
            </div>
            {/* Divider */}
            <div className="border-t border-gray-300 my-8"></div>
            {/* Paragraphs */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Founded in 1946 by Chaudhary Raghvendra Singh, DLF began with
                the development of 22 urban colonies in Delhi. In 1985, the
                company expanded into the then-unknown region of Gurugram,
                creating exceptional living and working spaces for India’s
                emerging global professionals. Today, DLF is the largest
                publicly listed real estate company in India, with residential,
                commercial, and retail properties spanning 15 states and 24
                cities.
              </p>

              <p>
                Our diverse verticals reflect our dedication to developing
                ecosystems for India’s evolving needs. However, our true
                foundation lies in our employees, customers, stakeholders, and
                shareholders. We invest in spearheading innovation through
                empowerment and optimism, to build the foundation of India’s
                future grounded in the legacy of our past.
              </p>
            </div>
            {/* Down Arrow */}
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

      {/* Tabs */}
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

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mt-10 bg-gray-100">
            {/* Left Image */}
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
            {/* Right Content*/}
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

              {/* Navigation Buttons */}
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
        {/* Left Section with Black BG */}
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

        {/* Right Section */}
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
