"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
              <h4 className="text-1 split-text effect-right">Insight & Opinion</h4>
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
                    <div className="image-wrap">
                      <a href="blog-details.html">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="lazyload"
                        />
                      </a>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock"></i>
                        </div>
                        <p className="fw-5">{post.date}</p>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html" className="line-clamp-2">
                          {post.title}
                        </a>
                      </h4>
                      <a href="blog-details.html" className="tf-btn-link">
                        <span>Read More</span>{" "}
                        <i className="icon-circle-arrow"></i>
                      </a>
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
