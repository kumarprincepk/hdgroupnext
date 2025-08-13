
export default function AboutSection() {
  return (
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
  );
}
