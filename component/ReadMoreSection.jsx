"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CiStopwatch } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import "swiper/css";

export default function ReadMoreSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Building gains into housing stocks and how to trade the...",
      date: "26 August, 2024",
      category: "Real estate",
      image: "/images/blog-grid-1.jpg",
    },
    {
      id: 2,
      title: "Building gains into housing stocks and how to trade the...",
      date: "26 August, 2024",
      category: "News",
      image: "/images/blog-grid-2.jpg",
    },
    {
      id: 3,
      title: "Building gains into housing stocks and how to trade the...",
      date: "26 August, 2024",
      category: "Real estate",
      image: "/images/blog-grid-3.jpg",
    },
  ];

  return (
    <section className="section-opinion tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="heading-section mb-7 text-left">
              <h4 className="text-1 split-text effect-right text-black">
                Insight & Opinion
              </h4>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {blogPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="blog-article-item style-2 hover-img">
                    {/* image-wrap: rounded + overflow-hidden so image scales inside rounded corners */}
                    <div className="image-wrap relative overflow-hidden rounded-md">
                      {/* use group so child img reacts on hover while container keeps rounded corners */}
                      <Link
                        href="/"
                        className="block group"
                        aria-label={post.title}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={300}
                          // apply transform on the img only; rounded corners preserved by parent overflow-hidden
                          className="block w-full h-[200px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <div className="box-tag absolute top-4 left-4 z-10">
                        <div className="tag-item text-sm text-white font-semibold bg-[#C99855] px-3 py-1 rounded-full">
                          {post.category}
                        </div>
                      </div>
                    </div>

                    {/* article-content: use flex-col and consistent gaps.
                        Put Read More at the end using mt-auto so spacing between elements is consistent */}
                    <div className="article-content flex flex-col mt-3">
                      <div className="time flex items-center gap-2 text-sm text-gray-500">
                        <div className="icons">
                          <CiStopwatch size={18} />
                        </div>
                        <p className="fw-5">{post.date}</p>
                      </div>

                      <h4 className="title mt-2 text-lg md:text-xl font-bold leading-tight">
                        <Link
                          href="/"
                          className="line-clamp-2 text-black hover:text-[#C99855]"
                        >
                          {post.title}
                        </Link>
                      </h4>

                      <div className="mt-2">
                        <Link
                          href="/"
                          className="tf-btn-link group inline-flex items-center text-sm font-semibold"
                        >
                          <span>Read More</span>
                          <GrFormNextLink
                            size={18}
                            className="ml-2 transition-transform group-hover:translate-x-1"
                          />
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
