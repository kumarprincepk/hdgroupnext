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
                  <Link href="/">
                    <Image
                      id="logo_footer"
                      src="/images/logo-white.png"
                      alt="logo-footer"
                      width={50} 
                      height={50}
                    />
                  </Link>
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
                        <Link href="/">
                          <i className="icon-fb"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="icon-X"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="icon-linked"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="icon-ins"></i>
                        </Link>
                      </li>
                    </ul>
                    <p className="text-white mb-10">+91-91932-56985</p>
                    <p className="text-white">info@homedevelopersgroup.com</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6">
                  <div
                    className="footer-menu-list newsletter text-right"
                    style={{display:"inline-block"}}
                  >
                     <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.552378388211!2d77.4803739155954!3d28.651447852211042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf3a4d3e503d9%3A0x4bae765955c98d20!2sPark%20Town%20Commercial!5e0!3m2!1sen!2sin!4v1693298092117!5m2!1sen!2sin"
                      className="img-default"
                      style={{maxWidth:"800px", marginLeft: "auto"}}
                      width={550}
                      height={250}
                      title="park-title"
                      ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  );
}
