"use client";
import React, { useState, useEffect } from "react";
import { usePathname,useRouter } from "next/navigation";
import serviceDetails from "@/public/data/pageInfo";
import Link from "next/link";
import Image from "next/image";
import projectInfo from "@/public/data/projectInfo";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 20) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Function to close the Bootstrap modal
  const closeModal = () => {
    const modal = document.getElementById('staticBackdrop');
    if (modal) {
      // Use Bootstrap's modal instance to close it properly
      const modalInstance = window.bootstrap?.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      } else {
        // Fallback if Bootstrap not loaded yet
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  };

  // Handler for mobile menu links
  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();
    closeModal();
    
    // Small delay to allow modal animation to complete
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  const isHome = pathname === "/";
  return (
    <>
      <header className={`header-sticky 
          ${isHome && !isSticky ? "transparent-header" : "is-sticky"}
        `}>
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container-fluid">
            <div className="position-relative w-100 d-flex align-items-center justify-content-between">
              <Link className="navbar-brand" href="/" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/images/logo/HDwhite.png"
                  alt="logo - hdg"
                  height={200}
                  width={200}
                  className="img-fluid"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                data-aos="fade-left" data-aos-duration="1000"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="ms-auto d-flex justify-content-end menu-on-hover" data-aos="fade-left" data-aos-duration="1000">
                  <ul className="navbar-nav navigation me-lg-5">
                    <li className="current-menu">
                      <Link href="/">Home</Link>
                    </li> 
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-child submenu-full">
                      <Link href="/projects/residential-projects">Projects</Link>
                      <ul className="submenu">
                        {projectInfo.map((project) => (
                          <li key={project.id}>
                            <ul className="submenu2">
                              <li>
                                <Link href={`/projects/${project?.slug}`} className="position-relative">
                                  <Image
                                    src={project?.image}
                                    alt={project?.heading}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="rounded-3 img-fluid"
                                  />
                                </Link>
                              </li>
                            </ul>
                            <Link href={`/projects/${project?.slug}`} className="text-lg-center">
                              {project.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-child ">
                      <Link href="/services/sales-collaboration">Services</Link>
                      <ul className="submenu">
                        {serviceDetails.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="a"
                              href={`/services/${service.slug}`}
                            >
                              {service.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div
                    className="linkOnHover text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    role="button"
                    tabIndex={0}
                  >
                    Menu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <header className="">
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container-fluid">
            <div className="position-relative w-100 d-flex align-items-center justify-content-between">
              <Link className="navbar-brand" href="/" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/images/logo/HDwhite.png"
                  alt="logo Image"
                  height={250}
                  width={200}
                  className="img-fluid"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                data-aos="fade-left" data-aos-duration="1000"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="ms-auto d-flex justify-content-end menu-on-hover" data-aos="fade-left" data-aos-duration="1000">
                  <ul className="navbar-nav navigation me-lg-5">
                    <li className="current-menu">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-child submenu-full">
                      <Link href="/projects/residential-projects">Projects</Link>
                      <ul className="submenu">
                        {projectInfo.map((project) => (
                          <li key={project.id}>
                            <ul className="submenu2">
                              <li>
                                <Link href={`/projects/${project?.slug}`} className="position-relative">
                                  <Image
                                    src={project?.image}
                                    alt={project?.heading}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="rounded-3 img-fluid"
                                  />
                                </Link>
                              </li>
                            </ul>
                            <Link href={`/projects/${project?.slug}`} className="text-lg-center">
                              {project.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-child ">
                      <Link href="/services/sales-collaboration">Services</Link>
                      <ul className="submenu">
                        {serviceDetails.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="a"
                              href={`/services/${service.slug}`}
                            >
                              {service.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>

                  <div
                    className="linkOnHover text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    role="button"
                    tabIndex={0}
                  >
                    Menu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="modal fade left"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <img
                  src="/images/logo/logo-dark.png"
                  className="img-fluid"
                  height={200}
                  width={200}
                  alt="logo"
                />
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <nav className="navbar navbar-expand-lg mobile-menu">
                <div className="container-fluid">
                  <div className="navbar-collapse collapse show" id="navbarNav">
                    <div className="ms-auto w-100 d-flex justify-content-end menu-on-hover">
                      <ul className="navbar-nav navigation">
                        <li className="current-menu">
                          <Link 
                            href="/" 
                            onClick={(e) => handleMobileLinkClick(e, '/')}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/about" 
                            onClick={(e) => handleMobileLinkClick(e, '/about')}
                          >
                            About
                          </Link>
                        </li>

                        <li className="has-child">
                          <Link
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Projects
                          </Link>
                          <ul className="dropdown-menu submenu">
                            {projectInfo.map((project, index) => (
                              <li key={index}>
                                <Link
                                  className="dropdown-item"
                                  href={`/projects/${project?.slug}`}
                                  onClick={(e) => handleMobileLinkClick(e, `/projects/${project?.slug}`)}
                                >
                                  {project.heading}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="has-child">
                          <Link
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Services
                          </Link>
                          <ul className="dropdown-menu submenu">
                            {serviceDetails.map((service) => (
                              <li key={service.id}>
                                <Link
                                  className="dropdown-item"
                                  href={`/services/${service.slug}`}
                                  onClick={(e) => handleMobileLinkClick(e, `/services/${service.slug}`)}
                                >
                                  {service.heading}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li>
                          <Link 
                            href="/contact" 
                            onClick={(e) => handleMobileLinkClick(e, '/contact')}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}