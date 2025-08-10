import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
  return (
   
      <footer id="footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-top">
                <div className="footer-logo">
                  <a>
                    <Image
                      id="logo_footer"
                      src="/images/logo-white.png"
                      alt="logo-footer"
                      width={50} 
                      height={50}
                    />
                  </a>
                </div>
                <div className="wrap-contact-item">
                  <div className="contact-item">
                    <div className="content">
                      <h6>
                        <Link href="/">Home</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="content">
                      <h6>
                        <Link href="/about">About</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="content">
                      <h6>
                        <Link href="/projects">Projects</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="content">
                      <h6>
                        <Link href="/service">Services</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="content">
                      <h6>
                        <Link href="/contact">Contact</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-menu-list footer-col-block style-2">
                    <h5 className="title lh-30 title-desktop">
                      Home Developers Group <br /> Headquaters
                    </h5>
                    <p className="text-white">
                      19, Sector 38 <br />
                      Gurugram, Haryana
                    </p>
                    <br />
                    <br />
                    <h5 className="text-white">
                      <b>All Rights Reserved 2025</b>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-menu-list footer-col-block">
                    <ul className="tf-social mb-20">
                      <li>
                        <a href="#">
                          <i className="icon-fb"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-X"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-linked"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-ins"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="text-white mb-10">+91-91932-56985</p>
                    <p className="text-white">info@homedevelopersgroup.com</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6">
                  <div
                    className="footer-menu-list newsletter text-right"
                    style={{display:"flex"}}
                  >
                    <Image
                      src="/images/icon.png"
                      className="img-default"
                      style={{maxWidth:"300px", marginLeft: "auto"}}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  );
}
