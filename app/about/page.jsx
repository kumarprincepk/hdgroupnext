"use client";
import React, { useState } from "react";
import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import Image from "next/image";
import { FaAnglesDown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";

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
        subcaption: "Founder",
      },
    ],

    projectsLink: [
      {
        heading: "Projects",
        list: [
          { label: "Residential", link: "/projects/residential-projects" },
          { label: "Commercial", link: "/projects/commercial-projects" },
        ],
        image: "/images/residential.jpg",
      },
    ],

    servicesLink: [
      {
        heading: "Services",
        list: [
          {
            label: "Sales & Collaboration",
            link: "/services/sales-collaboration",
          },
          { label: "Interior Design", link: "/services/interior-design" },
          { label: "Turnkey Execution", link: "/services/turnkey-execution" },
          { label: "Commercial Leasing", link: "/services/commercial-leasing" },
          {
            label: "Building Management",
            link: "/services/building-management",
          },
          { label: "New Construction", link: "/services/new-construction" },
          { label: "Real Estate Consultancy", link: "/services/real-estate-consultancy" },
          { label: "Interior Design", link: "/services/interior-design" },
          { label: "Maintenance Services", link: "/services/maintenance-services" },

        ],
        image: "/images/section-pre-approved1.jpg",
      },
    ],
  };

  const tabs = [
    { id: "founder", label: "MEET OUR FOUNDER" },
    { id: "projectsLink", label: "PROJECTS" },
    { id: "servicesLink", label: "SERVICES" },
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
      image: "/images/residential/residential.jpg",
    },
    {
      name: "Mr. Amit Verma",
      role: "CEO",
      image: "/images/section-pre-approved1.jpg",
    },
    {
      name: "Ms. Anjali Sharma",
      role: "CFO",
      image: "/images/residential/residential.jpg",
    },
  ];

  return (
    <>
      <Header />
      {/* About Page */}
      <section>
        <div className="main-about-text mt-5 py-md-3 py-xl-5 mt-xl-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="about-heading mb-3 ">— About Us</div>

                <h1 className="about-text fw-bold lh-base">
                  Home Developers Group is a wholistic group specializing in
                  turnkey design and build services, as well as collaborations
                  with plot owners for redeveloping and monetizing their assets.
                </h1>

                <h1 className="about-text fw-bold lh-base mb-4 pb-4">
                  With over 25 years of expertise, we have curated premium
                  projects, luxury apartments, commercial complexes, and IT
                  parks in New Delhi & beyond.
                </h1>

                <hr className="my-2 my-lg-4 pt-2 pt-lg-4" />

                <div className="text-secondary other-text">
                  <p>
                    From the foundation to the furnishings, every project
                    reflects our love for creating spaces that enhance the way
                    people live and work.
                  </p>
                  <p>
                    Our team of experts combines innovative real estate
                    development with sophisticated interior design to deliver
                    spaces that inspire. By identifying opportunities and
                    partnering with leading professionals, we add value to every
                    asset while unlocking new possibilities for our clients and
                    partners.
                  </p>
                </div>

                <div className="text-center my-5">
                  <span
                    className="fs-2 cursor-pointer"
                    onClick={() =>
                      window.scrollBy({ top: 100, behavior: "smooth" })
                    }
                  >
                    <FaAnglesDown />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 mt-xl-5 pt-4">
              <div className="d-flex justify-content-center border border-secondary">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`btn flex-fill rounded-0 ${
                      activeTab === tab.id
                        ? "btn-dark"
                        : "btn-light text-secondary"
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
          </div>
        </div>

        <div className="container">
          <div className="row g-3 mt-4 bg-light">
            {/* Left Side: Image */}
            <div className="col-md-6 position-relative order-md-0 order-1 mt-0">
              <div className="position-relative h-100">
                <Image
                  src={tabData[activeTab][slide].image}
                  alt={
                    tabData[activeTab][slide]?.caption ||
                    tabData[activeTab][slide].heading
                  }
                  fill
                  sizes="100vh"
                  style={{ objectFit: "cover", filter: "grayscale(100%)" }}
                  className="d-none d-md-block"
                />
                {(tabData[activeTab][slide]?.caption ||
                  tabData[activeTab][slide]?.subcaption) && (
                    <>

                  <div className="position-absolute bottom-0 start-0 text-white p-3 d-none d-md-block">
                    <p className="fw-bold text-white">
                      {tabData[activeTab][slide]?.caption}
                    </p>
                    <p className="small text-white">
                      {tabData[activeTab][slide]?.subcaption}
                    </p>
                  </div>

                  <div className="position-relative bottom-0 start-0 text-white p-3 d-block d-md-none">
                    <p className="fw-bold text-dark">
                      {tabData[activeTab][slide]?.caption}
                    </p>
                    <p className="small text-dark">
                      {tabData[activeTab][slide]?.subcaption}
                    </p>
                  </div>
                    </>
                )}
              </div>
            </div>

            <div className="col-md-6 px-4 py-4 pb-md-5 pb-0 mt-0 d-flex flex-column justify-content-between order-md-0 order-0">
              <div>
                <h2 className="fs-3 fw-bold mb-4">
                  {tabData[activeTab][slide].heading}
                </h2>

                {tabData[activeTab][slide].list ? (
                  <ul className="list-unstyled">
                    {tabData[activeTab][slide].list.map((item, index) => (
                      <li
                        key={index}
                        className="mb-3 d-flex align-items-center"
                      >
                        <span className="me-2 text-dark rhombus"></span>
                        <Link
                          href={item.link}
                          className="fw-semibold list-link"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className="text-muted fs-6"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {tabData[activeTab][slide].content}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <div className="d-md-flex d-none bg-dark text-white py-4 px-3 flex-md-column justify-content-between rounded-end h-100">
                <h2 className="fs-2 fw-bold">
                  Our <br /> Leadership
                </h2>
                <div className="d-flex gap-2">
                  <button className="leader-prev btn btn-light">←</button>
                  <button className="leader-next btn btn-light">→</button>
                </div>
              </div>

              <div className="d-md-none">
                <div className="d-flex bg-dark text-white p-3 rounded d-flex justify-content-between mb-4">
                  <h2 className="fs-4 fw-bold mb-0">Our Leadership</h2>
                  <div className="d-flex gap-2">
                    <button className="leader-prev btn btn-outline-light btn-sm">
                      ←
                    </button>
                    <button className="leader-next btn btn-outline-light btn-sm">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="position-relative ps-xl-4 py-md-5">
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
                  className="h-100 leadership-slider"
                >
                  {leaders.map((leader, index) => (
                    <SwiperSlide key={index}>
                      <div className="position-relative overflow-hidden rounded leadership-item">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="100vw"
                          priority={index < 3}
                          style={{
                            objectFit: "cover",
                            filter: "grayscale(80%)",
                          }}
                        />
                        <div className="position-absolute leadership-detail">
                          <h3 className="fs-5 fw-bold mb-1">{leader.name}</h3>
                          <p className="m-0">{leader.role}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
