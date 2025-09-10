"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "From the moment I contacted them, I knew I was in good hands. The property exceeded all my expectations, and the team's expertise made the entire buying experience seamless.",
      name: "Ronald Richards",
      role: "CEO Trussreal",
    },
    {
      id: 2,
      text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta.",
      name: "Ronald Richards",
      role: "CEO Themesflat",
    },
    {
      id: 3,
      text: "The experience was seamless and exceeded our expectations in every way possible.",
      name: "Ronald Richards",
      role: "CEO Thornerlik",
    },
  ];

  return (
    <section className="pt-20 relative">
      <div className="container mx-auto px-4">
        <div className="heading-section mb-8 text-left">
          <h4 className="text-1 split-text effect-right text-black">
            Clients Testimonials
          </h4>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            className="pb-10"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-10 relative">
                  <div className="absolute top-6 left-6 text-blue-100 text-7xl opacity-20 select-none">
                    “
                  </div>

                  <p className="text-gray-700 text-lg italic relative z-10">
                    "{item.text}"
                  </p>

                  <div className="flex flex-col items-center mt-8 relative z-10">
                    <div className="text-center">
                      <h6 className="font-semibold text-gray-800">
                        {item.name}
                      </h6>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="testimonial-prev text-black absolute top-1/2 -translate-y-1/2 -left-6 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full text-black-600 hover:bg-blue-50 transition"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="testimonial-next text-black absolute top-1/2 -translate-y-1/2 -right-6 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full text-black-600 hover:bg-blue-50 transition"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
