"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta. Maecenas eleifend malesuada egestas. In eu eros hendrerit, pharetra justo id, blandit orci.",
      name: "Ronald Richards",
      role: "CEO Themesflat",
    },
    {
      id: 2,
      text: "From the moment I contacted them, I knew I was in good hands. The property exceeded all my expectations, and the team's expertise made the entire buying experience seamless.",
      name: "Ronald Richards",
      role: "CEO Themesflat",
    },
    {
      id: 3,
      text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta. Maecenas eleifend malesuada egestas. In eu eros hendrerit, pharetra justo id, blandit orci.",
      name: "Ronald Richards",
      role: "CEO Themesflat",
    },
    {
      id: 4,
      text: "From the moment I contacted them, I knew I was in good hands. The property exceeded all my expectations, and the team's expertise made the entire buying experience seamless.",
      name: "Ronald Richards",
      role: "CEO Themesflat",
    },
  ];

  return (
    <div className="section-testimonials tf-spacing-3">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="w-full">
            {/* Heading */}
            <div className="heading-section mb-8 text-left">
              <h4 className="text-1 split-text effect-right">
                Clients Testimonials
              </h4>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, 
              }}
              navigation={{
                nextEl: ".nav-next-layout",
                prevEl: ".nav-prev-layout",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 1, spaceBetween: 30 },
                1024: { slidesPerView: 1, spaceBetween: 40 },
              }}
              className="sw-layout style-pagination"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="wg-testimonial text-center">
                    <p className="text-11 description">{item.text}</p>
                    <div className="avatar"></div>
                    <div className="author">
                      <h6 className="name">
                        <p>{item.name}</p>
                      </h6>
                      <p className="text-2">{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="sw-wrap-btn">
              <div className="swiper-button-prev sw-button nav-prev-layout">
                <i className="icon-arrow-left-3"></i>
              </div>
              <div className="swiper-button-next sw-button nav-next-layout">
                <i className="icon-arrow-right-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
