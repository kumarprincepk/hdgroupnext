"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function WhatWeDoSection() {
  const services = [
    {
      id: 1,
      title: "New Construction",
      description:
        "We design spaces with a timeless vision, balancing innovation and aesthetic appeal.",
      image: "/images/Screenshot.png",
    },
    {
      id: 2,
      title: "Real Estate Consultancy",
      description:
        "We blend our 30 years of expertise with our dedication to service to give our clients the best.",
      image: "/images/Screenshot (85) (1).png",
    },
    {
      id: 3,
      title: "Interior Design",
      description:
        "Our interior design solutions are client-centric, mixing bold elements with timeless sophistication.",
      image: "/images/agent-item.jpg",
    },
    {
      id: 4,
      title: "Maintenance Services",
      description:
        "Our comprehensive maintenance solutions ensure that your space remains efficient.",
      image: "/images/section-pre-approved1.jpg",
    },
  ];

  return (
    <section className="section-local-agent">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="heading-section mb-7 text-left">
              <h4 className="text-1 split-text effect-right">What we do</h4>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={15}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                575: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              style={{
                WebkitOverflowScrolling: "touch", // smooth on iOS Safari
              }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="agent-item hover-img style-2">
                    <div className="image-wrap">
                      <Link href="/">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={200}
                          height={200}
                          className="lazyload"
                        />
                      </Link>
                    </div>
                    <div className="content justify-center">
                      <div className="author text-center">
                        <h4 className="name lh-30">
                          <Link href="/">{service.title}</Link>
                        </h4>
                        <p className="text-3 lh-18">{service.description}</p>
                        <Link href="/" className="tf-btn-link">
                          <span>Read More</span>{" "}
                          <i className="icon-circle-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
