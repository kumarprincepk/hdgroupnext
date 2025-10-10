import Image from "next/image";
import Link from "next/link";
import styles from "./FooterSection.module.css";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id={styles.footer} className="bg-black text-white">
      <div className="tf-container-all">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-6">
          <div className={`${styles.footerLogo} flex justify-center lg:justify-start`}>
            <Link href="/">
              <Image
                id="logo_footer"
                src="/images/logo-white.png"
                alt="logo-footer"
                width={300}
                height={50}
              />
            </Link>
          </div>

          <div className={`${styles.wrapContactItem} flex flex-wrap justify-center gap-4`}>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects/residential-projects" },
              { name: "Services", href: "/service/sales-collaboration" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <div className={styles.contactItem} key={index}>
                <div className={styles.content}>
                  <h6>
                    <Link href={item.href}>{item.name}</Link>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerMain}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`${styles.footerMenuList} ${styles.footerColBlock} style2 w-full lg:w-4/12`}>
              <h5 className={`${styles.title} lh-30 ${styles.titleDesktop}`}>
                Home Developers Group
              </h5>
              <p>
                D - 22, Defence Colony, <br />
                New Delhi - 110024
              </p>
              <div className="mt-6">
                <h5>
                  <b>All Rights Reserved 2025</b>
                </h5>
              </div>
            </div>

            <div className={`${styles.footerMenuList} ${styles.footerColBlock} w-full lg:w-3/12`}>
              <ul className={`flex justify-center lg:justify-start gap-4`}>
                <li>
                  <Link href="/">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <RiTwitterXLine />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
              <p className="text-center lg:text-left mb-1">+91-93549-40979</p>
              <p className="text-center lg:text-left">info@homedevelopersgroup.com</p>
            </div>

            <div className={`${styles.footerMenuList} ${styles.newsletter} w-full lg:w-5/12 flex justify-center lg:justify-end`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56055.88806164287!2d77.15092854480741!3d28.584983353358897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25a04d8f1f1%3A0xeea20a333b35542d!2sHome%20Developers%20India!5e0!3m2!1sen!2sin!4v1756556221088!5m2!1sen!2sin"
                className={`${styles.imgDefault} w-full max-w-[800px] rounded-md shadow-md`}
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
