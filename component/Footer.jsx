import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white">
      <div className="tf-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-6">
          <div className="footer-logo flex justify-center lg:justify-start">
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

          <div className="wrap-contact-item flex flex-wrap justify-center gap-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/service" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <div className="contact-item" key={index}>
                <div className="content">
                  <h6>
                    <Link href={item.href}>{item.name}</Link>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-main">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="footer-menu-list footer-col-block style-2 w-full lg:w-4/12">
              <h5 className="title lh-30 title-desktop">
                Home Developers Group
              </h5>
              <p>
                19, Sector 38 <br />
                Gurugram, Haryana
              </p>
              <div className="mt-6">
                <h5>
                  <b>All Rights Reserved 2025</b>
                </h5>
              </div>
            </div>

            <div className="footer-menu-list footer-col-block w-full lg:w-3/12">
              <ul className="tf-social mb-5 flex justify-center lg:justify-start gap-4">
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
              <p className="text-center lg:text-left mb-1">+91-91932-56985</p>
              <p className="text-center lg:text-left">info@homedevelopersgroup.com</p>
            </div>

            <div className="footer-menu-list newsletter w-full lg:w-5/12 flex justify-center lg:justify-end">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.552378388211!2d77.4803739155954!3d28.651447852211042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf3a4d3e503d9%3A0x4bae765955c98d20!2sPark%20Town%20Commercial!5e0!3m2!1sen!2sin!4v1693298092117!5m2!1sen!2sin"
                className="img-default w-full max-w-[800px] rounded-md shadow-md"
                height={250}
                title="park-title"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
