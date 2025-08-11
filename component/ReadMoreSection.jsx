import Image from "next/image";

export default function ReadMoreSection() {
  return (
    <section className="section-opinion tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="heading-section mb-7 text-left">
              <h4 className="text-1 split-text effect-right">
                Insight & Opinion
              </h4>
            </div>
            <div
              className="swiper style-pagination sw-layout"
              data-preview="3"
              data-tablet="2"
              data-mobile-sm="2"
              data-mobile="1"
              data-space-lg="40"
              data-space-md="20"
              data-space="15"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <a href="blog-details.html">
                        <Image
                          className="lazyload"
                          data-src="/images/blog-grid-1.jpg"
                          src="/images/blog-grid-1.jpg"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          Real estate
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock"></i>
                        </div>
                        <p className="fw-5">26 August, 2024</p>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html" className="line-clamp-2">
                          Building gains into housing stocks and how to trade
                          the...
                        </a>
                      </h4>
                      <a href="blog-details.html" className="tf-btn-link">
                        <span>Read More</span>{" "}
                        <i className="icon-circle-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <a href="blog-details.html">
                        <Image
                          className="lazyload"
                          data-src="/images/blog-grid-2.jpg"
                          src="/images/blog-grid-2.jpg"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          News
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock"></i>
                        </div>
                        <p className="fw-5">26 August, 2024</p>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html" className="line-clamp-2">
                          Building gains into housing stocks and how to trade
                          the...
                        </a>
                      </h4>
                      <a href="blog-details.html" className="tf-btn-link">
                        <span>Read More</span>{" "}
                        <i className="icon-circle-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <a href="blog-details.html">
                        <Image
                          className="lazyload"
                          data-src="/images/blog-grid-3.jpg"
                          src="/images/blog-grid-3.jpg"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          Real estate
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock"></i>
                        </div>
                        <p className="fw-5">26 August, 2024</p>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html" className="line-clamp-2">
                          Building gains into housing stocks and how to trade
                          the...
                        </a>
                      </h4>
                      <a href="blog-details.html" className="tf-btn-link">
                        <span>Read More</span>{" "}
                        <i className="icon-circle-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sw-pagination sw-pagination-layout text-center lg:hidden block mt-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
