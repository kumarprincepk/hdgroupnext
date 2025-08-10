"use client";
import Image from "next/image";
import loadingImage from "../public/images/fav-icon.png";
import Loader from "@/component/Loader";
import CounterScroll from "@/component/CounterScroll";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div>
      {/* <div className="theme-color-1"> */}
      <div>
        {/* <Loader />
        <CounterScroll /> */}
        <Header />
        <main className="page-title home02 mb-96">
          <div className="hero-bg-video">
            <video autoPlay muted loop>
              <source src="images/hd_group.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="hero-text">
              <div className="animated-line">
                <span style={{ "--i": 0 }}>B</span>
                <span style={{ "--i": 1 }}>u</span>
                <span style={{ "--i": 2 }}>i</span>
                <span style={{ "--i": 3 }}>l</span>
                <span style={{ "--i": 4 }}>d</span>
                <span style={{ "--i": 5 }}>i</span>
                <span style={{ "--i": 6 }}>n</span>
                <span style={{ "--i": 7 }}>g</span>
                <span style={{ "--i": 15 }}>&nbsp;</span>
                <span style={{ "--i": 8 }}>L</span>
                <span style={{ "--i": 9 }}>a</span>
                <span style={{ "--i": 10 }}>s</span>
                <span style={{ "--i": 11 }}>t</span>
                <span style={{ "--i": 12 }}>i</span>
                <span style={{ "--i": 13 }}>n</span>
                <span style={{ "--i": 14 }}>g</span>
                <span style={{ "--i": 15 }}>&nbsp;</span>
                <span style={{ "--i": 16 }}>L</span>
                <span style={{ "--i": 17 }}>e</span>
                <span style={{ "--i": 18 }}>g</span>
                <span style={{ "--i": 19 }}>a</span>
                <span style={{ "--i": 20 }}>c</span>
                <span style={{ "--i": 21 }}>i</span>
                <span style={{ "--i": 22 }}>e</span>
                <span style={{ "--i": 23 }}>s</span>
                <span style={{ "--i": 15 }}>.</span>
              </div>
            </div>

            <div className="ui-banner__scrollButton">
              <div className="ui-banner__scrollButtonScrollbar">
                <span className="ui-banner__scrollButtonScrollbarBg"></span>
                <span className="ui-banner__scrollButtonScrollbarFg"></span>
              </div>
              <p className="ui-banner__scrollButtonText">Find out how</p>
            </div>
          </div>
        </main>

        {/* section-About */}
        <div className="text-with-img style-2 tf-spacing-1">
          <div className="tf-container">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <h4 className="text-1 split-text effect-right">About Us</h4>
              </div>
              <div className="lg:w-2/3">
                <div>
                  <div className="heading-section mb-8 gap-8">
                    <p
                      className="text-8 text-color-default wow animate__fadeInUp animate__animated"
                      data-wow-duration="1.5s"
                      data-wow-delay="0s"
                    >
                      We invest globally, seeking attractive, value-oriented
                      opportunities across real asset classes. We prioritize
                      sustainable growth, focusing on innovative strategies to
                      maximize long-term returns for our stakeholders.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="tf-btn bg-color-primary px-4 rounded-full h-12 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0s"
                  >
                    About the firm
                    <i className="icon-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section-About */}

        {/* section-What-We-Do */}
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
                              width={50} height={50}
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
                              width={50} height={50}
                            />
                          </a>
                        </div>
                        <div className="content justify-center">
                          <div className="author text-center">
                            <h4 className="name lh-30">
                              <a>Real Estate Consultancy</a>
                            </h4>
                            <p className="text-3 lh-18">
                              We blend our 30 years of expertise with our
                              dedication to service to give our clients the best
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
                              width={50} height={50}
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
                              width={50} height={50}
                            />
                          </a>
                        </div>
                        <div className="content justify-center">
                          <div className="author text-center">
                            <h4 className="name lh-30">
                              <a>Maintenance Services</a>
                            </h4>
                            <p className="text-3 lh-18">
                              Our comprehensive maintenance solutions ensure
                              that your space remains efficient,
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
        {/* section-What-We-Do */}

{/* section-Why-trust-us */}
            <div class="tf-spacing-2">
                <div class="tf-container">
                    <div class="row">
                        <div class="heading-section mb-30 text-left">
                            <h4 class="text-1 split-text effect-right">Why Trust Us</h4>
                        </div>
                        <div class="col-12">
                            <div class="wrap-counter style-1 tf-grid-layout-2  lg-col-4">
                                <div class="counter-item style-4 text-center ">
                                    <div class="count">
                                        <div class="counter-number  mx-auto">
                                            <div class="odometer style-4 style-4-1"><strong>100</strong>
                                            </div>
                                            <span class="sub plus">+</span>
                                        </div>
                                        <p class="text-1 mt_-9 ">Dream house</p>
                                    </div>
                                </div>
                                <div class="counter-item style-4 text-center">
                                    <div class="count ">
                                        <div class="counter-number mx-auto ">
                                            <div class="odometer style-4 style-4-2"><strong>1</strong>
                                            </div>
                                            <span class="sub plus">+</span>
                                        </div>
                                        <p class="text-1 mt_-9">Happy clients</p>
                                    </div>
                                </div>
                                <div class="counter-item style-4 text-center">
                                    <div class="count">
                                        <div class="counter-number mx-auto ">
                                            <div class="odometer style-4 style-4-3"><strong>100</strong>
                                            </div>
                                            <span class="sub plus">+</span>
                                        </div>
                                        <p class="text-1 mt_-9 ">Local Agent</p>
                                    </div>
                                </div>
                                <div class="counter-item style-4 text-center">
                                    <div class="count ">
                                        <div class="counter-number mx-auto ">
                                            <div class="odometer style-4 style-4-4"><strong>1</strong>
                                            </div>
                                            <span class="sub plus">+</span>
                                        </div>
                                        <p class="text-1 mt_-9">Property Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* section-Why-trust-us */}

        <Footer className="" />
      </div>
    </div>
  );
}
