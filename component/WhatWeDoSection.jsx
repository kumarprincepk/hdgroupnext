import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <section className="section-local-agent">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="heading-section mb-7 text-left">
              <h4 className="text-1 split-text effect-right">What we do</h4>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1"
              data-screen="575"
              data-preview="1"
              data-space="15"
            >
              <div className="swiper-wrapper tf-layout-mobile-sm sm-col-2 lg-col-4 mb-12">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div
                    className="agent-item hover-img style-2 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    <div className="image-wrap">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src="/images/Screenshot.png"
                          src="/images/Screenshot.png"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="content justify-center">
                      <div className="author text-center">
                        <h4 className="name lh-30">
                          <a>New Construction</a>
                        </h4>
                        <p className="text-3 lh-18">
                          we design spaces with a timeless vision, balancing
                          innovation and aesthetic appeal
                        </p>
                        <a href="#" className="tf-btn-link">
                          <span>Read More</span>{" "}
                          <i className="icon-circle-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div
                    className="agent-item hover-img style-2 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <div className="image-wrap">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src="/images/Screenshot (85) (1).png"
                          src="/images/Screenshot (85) (1).png"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="content justify-center">
                      <div className="author text-center">
                        <h4 className="name lh-30">
                          <a>Real Estate Consultancy</a>
                        </h4>
                        <p className="text-3 lh-18">
                          We blend our 30 years of expertise with our dedication
                          to service to give our clients the best
                        </p>
                        <a href="#" className="tf-btn-link">
                          <span>Read More</span>{" "}
                          <i className="icon-circle-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div
                    className="agent-item hover-img style-2 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <div className="image-wrap">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src="/images/agent-item.jpg"
                          src="/images/agent-item.jpg"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="content justify-center">
                      <div className="author text-center">
                        <h4 className="name lh-30">
                          <a>Interior Design</a>
                        </h4>
                        <p className="text-3 lh-18">
                          Our interior design solutions are client-centric,
                          mixing bold elements with timeless sophistication.
                        </p>
                        <a href="#" className="tf-btn-link">
                          <span>Read More</span>{" "}
                          <i className="icon-circle-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="swiper-slide">
                  <div
                    className="agent-item hover-img style-2 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <div className="image-wrap">
                      <a>
                        <Image
                          className="lazyload"
                          data-src="/images/section-pre-approved1.jpg"
                          src="/images/section-pre-approved1.jpg"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="content justify-center">
                      <div className="author text-center">
                        <h4 className="name lh-30">
                          <a>Maintenance Services</a>
                        </h4>
                        <p className="text-3 lh-18">
                          Our comprehensive maintenance solutions ensure that
                          your space remains efficient,
                        </p>
                        <a href="#" className="tf-btn-link">
                          <span>Read More</span>{" "}
                          <i className="icon-circle-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center lg:hidden block mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
