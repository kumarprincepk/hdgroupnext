"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./HeaderSection.module.css";
import "@/style/globals.css";
import { FaAngleDown } from "react-icons/fa6";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHeader = scrolled || pathname !== "/";
  const isSticky = scrolled || pathname !== "/";

  const logoSrc = isDarkHeader ? "/images/HDwhite.png" : "/images/HDwhite.png";

  const headerPositionClass = isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative";
  const headerBgClass = isDarkHeader ? "bg-black text-white shadow-md" : "bg-transparent text-white";
  const headerTransition = "transition-all duration-300 ease-in-out";

  const headerClassName = `${styles.header} ${styles.style2} ${styles.headerSticky} ${headerPositionClass} ${headerBgClass} ${headerTransition}`;

  return (
    <>
      {/* Desktop Header */}
      <header className={headerClassName}>
        <div className={styles.headerInner}
          style={{
            backgroundColor: isDarkHeader ? "rgb(44 46 51)" : "transparent",
          }}>
          <div className="flex flex-wrap w-full">
            <div className="w-full">
              <div className="tf-container flex items-center justify-between">
                {/* Logo */}
                <div className={styles.headerLogo}>
                  <Link className={`${styles.a} ${styles.siteLogo}`} href="/">
                    <Image
                      className={styles.imgDefault}
                      alt="header-image"
                      src={logoSrc}
                      width={300}
                      height={50}
                      priority
                    />
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className={`${styles.headerRight} hidden lg:flex items-center`}>
                  <nav className={styles.mainMenu}>
                    <ul className={`${styles.navigation} flex space-x-1`}>
                      <li className={styles.currentMenu}>
                        <Link className={styles.a} href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.a} href="/about">
                          About
                        </Link>
                      </li>

                      {/* Projects Dropdown */}
                      <li className={`${styles.hasChild} ${styles.style2} relative group`}>
                        <Link className={`${styles.a}`} href="/">
                          Projects <FaAngleDown className="inline-block" />
                        </Link>
                        <ul
                          className={`${styles.submenu} absolute right-7 bg-white shadow-lg transform opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
                        >
                          <li>
                            <ul className={styles.submenu2}>
                              <li>
                                <Link className={styles.a} href="/">
                                  <Image
                                    className={styles.linkImg}
                                    src="/images/residential.jpg"
                                    width={635}
                                    height={350}
                                    alt="residential"
                                  />
                                </Link>
                              </li>
                            </ul>
                            <Link className={styles.a} href="/">
                              Residential
                            </Link>
                          </li>
                          <li>
                            <ul className={styles.submenu2}>
                              <li>
                                <Link className={styles.a} href="/">
                                  <Image
                                    className={styles.linkImg}
                                    src="/images/commercial.jpg"
                                    width={635}
                                    height={350}
                                    alt="commercial"
                                  />
                                </Link>
                              </li>
                            </ul>
                            <Link className={styles.a} href="/">
                              Commercial
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Services Dropdown */}
                      <li className={`${styles.hasChild} relative group`}>
                        <Link className={styles.a} href="/">
                          Services <FaAngleDown className="inline-block" />
                        </Link>
                        <ul
                          className={`${styles.submenu} absolute bg-white shadow-lg transform opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
                        >
                          <li>
                            <Link className={styles.a} href="/">
                              Sales &amp; Collaboration
                            </Link>
                          </li>
                          <li>
                            <Link className={styles.a} href="/">
                              Interior Design
                            </Link>
                          </li>
                          <li>
                            <Link className={styles.a} href="/">
                              Turnkey Execution
                            </Link>
                          </li>
                          <li>
                            <Link className={styles.a} href="/">
                              Commercial Leasing
                            </Link>
                          </li>
                          <li>
                            <Link className={styles.a} href="/">
                              Building Management
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link className={styles.a} href="/">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className={`${styles.boxUser} ${styles.linkOnHover} ml-12`}>
                    <div className={`${styles.name} text-white`}>Menu</div>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div
                  className={`${styles.mobileButton} cursor-pointer lg:hidden`}
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <i className="icon-menu"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ top: 0 }}
      >
        {/* Mobile Header */}
        <div className={`${styles.topNavMobile} flex justify-between items-center p-4 border-b`}>
          <div className={styles.offcanvasLitle}>
            <Link className={styles.a} href="/">
              <Image src="/images/logo.png" alt="logo" width={150} height={50} />
            </Link>
          </div>
          <div className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <i className="icon-close"></i>
          </div>
        </div>

        {/* Mobile Menu Body */}
        <div className={`${styles.innerMobileNav} p-4 overflow-y-auto`}>
          <ul className="space-y-4" id={styles.menuMobileMenu}>
            <li>
              <Link className={`${styles.a} ${styles.itemMenuMobile}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${styles.a} ${styles.itemMenuMobile}`} href="/about">
                About
              </Link>
            </li>

            {/* Projects Submenu */}
            <li>
              <button
                className={`${styles.itemMenuMobile} w-full text-left`}
                onClick={() => toggleSubmenu("projects")}
                aria-expanded={openSubmenu === "projects"}
              >
                Projects
              </button>
              <div
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${openSubmenu === "projects" ? "max-h-[500px]" : "max-h-0"
                  }`}
              >
                <ul className={`${styles.subMobile} pl-4 mt-2 space-y-2`}>
                  <li>
                    <Link className={styles.a} href="/">
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.a} href="/">
                      Commercial
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Services Submenu */}
            <li>
              <button
                className={`${styles.itemMenuMobile} w-full text-left`}
                onClick={() => toggleSubmenu("services")}
                aria-expanded={openSubmenu === "services"}
              >
                Services
              </button>
              <div
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${openSubmenu === "services" ? "max-h-[500px]" : "max-h-0"
                  }`}
              >
                <ul className={`${styles.subMobile} pl-4 mt-2 space-y-2`}>
                  <li>
                    <Link className={styles.a} href="/">
                      Sales &amp; Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.a} href="/">
                      Interior Design
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.a} href="/">
                      Turnkey Execution
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.a} href="/">
                      Commercial Leasing
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.a} href="/">
                      Building Management
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link className={`${styles.a} ${styles.itemMenuMobile}`} href="/">
                Contact
              </Link>
            </li>
          </ul>

          {/* Support Info */}
          <div className={`${styles.support} mt-6`}>
            <Link className={`${styles.a} ${styles.textNeed}`} href="/">
              Need help?
            </Link>
            <ul className={`${styles.mbInfo} mt-2 space-y-1`}>
              <li>
                Call Us Now: <span className="number">91932-56985</span>
              </li>
              <li>
                Support 24/7:{" "}
                <Link className={styles.a} href="/">
                  info@homedevelopersgroup.com
                </Link>
              </li>
              <li>
                <div className={styles.wrapSocial}>
                  <p>Follow us:</p>
                  <ul className={`${styles.tfSocial} ${styles.style2} flex space-x-2`}>
                    <li>
                      <Link className={styles.a} href="/">
                        <i className="icon-fb"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.a} href="/">
                        <i className="icon-X"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.a} href="/">
                        <i className="icon-linked"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.a} href="/">
                        <i className="icon-ins"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
