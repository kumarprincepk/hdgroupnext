"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay  } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  return (
    <div className="section-testimonials tf-spacing-3">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="heading-section mb-8 text-left">
              <h4 className="text-1 split-text effect-right">Clients Testimonials</h4>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".nav-next-layout",
                prevEl: ".nav-prev-layout",
              }}
              breakpoints={{
                768: { slidesPerView: 1, spaceBetween: 30 },
                1024: { slidesPerView: 1, spaceBetween: 40 },
              }}
              className="sw-layout style-pagination"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="wg-testimonial text-center">
                  <p className="text-11 description">
                    Phasellus efficitur dictum urna, non elementum mauris mollis a.
                    Duis lacinia arcu ac lorem ultricies porta. Maecenas eleifend
                    malesuada egestas. In eu eros hendrerit, pharetra justo id,
                    blandit orci.
                  </p>
                  <div className="avatar"></div>
                  <div className="author">
                    <h6 className="name">
                      <a href="#">Ronald Richards</a>
                    </h6>
                    <p className="text-2">CEO Themesflat</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="wg-testimonial text-center">
                  <p className="text-11 description">
                    From the moment I contacted them, I knew I was in good hands.
                    The property exceeded all my expectations, and the team's
                    expertise made the entire buying experience seamless.
                  </p>
                  <div className="avatar"></div>
                  <div className="author">
                    <h6 className="name">
                      <a href="#">Ronald Richards</a>
                    </h6>
                    <p className="text-2">CEO Themesflat</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="wg-testimonial text-center">
                  <p className="text-11 description">
                    Phasellus efficitur dictum urna, non elementum mauris mollis a.
                    Duis lacinia arcu ac lorem ultricies porta. Maecenas eleifend
                    malesuada egestas. In eu eros hendrerit, pharetra justo id,
                    blandit orci.
                  </p>
                  <div className="avatar"></div>
                  <div className="author">
                    <h6 className="name">
                      <a href="#">Ronald Richards</a>
                    </h6>
                    <p className="text-2">CEO Themesflat</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="wg-testimonial text-center">
                  <p className="text-11 description">
                    From the moment I contacted them, I knew I was in good hands.
                    The property exceeded all my expectations, and the team's
                    expertise made the entire buying experience seamless.
                  </p>
                  <div className="avatar"></div>
                  <div className="author">
                    <h6 className="name">
                      <a href="#">Ronald Richards</a>
                    </h6>
                    <p className="text-2">CEO Themesflat</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Swiper Navigation Buttons */}
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
