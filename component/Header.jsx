"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="header style-2 header-sticky">
        <div className="header-inner">
          <div className="tf-container">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="header-inner-wrap flex items-center justify-between">
                  {/* Logo */}
                  <div className="header-logo">
                    <Link href="/" className="site-logo">
                      <Image
                        className="img-default"
                        alt="header-image"
                        src="/images/logo-white.png"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>

                  {/* Desktop Menu */}
                  <div className="header-right hidden lg:flex items-center">
                    <nav className="main-menu">
                      <ul className="navigation flex space-x-6">
                        <li className="current-menu"><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>

                        {/* Projects Dropdown */}
                        <li className="has-child style-2 relative group">
                          <Link href="/">Projects</Link>
                          <ul className="submenu absolute left-0 bg-white shadow-lg transform opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                            <li>
                              <ul className="submenu2">
                                <li>
                                  <Link href="/">
                                    <Image src="/images/residential.jpg" width={50} height={50} alt="header-image" />
                                  </Link>
                                </li>
                              </ul>
                              <Link href="/">Residential</Link>
                            </li>
                            <li>
                              <ul className="submenu2">
                                <li>
                                  <Link href="/">
                                    <Image src="/images/commercial.jpg" width={50} height={50} alt="header-image" />
                                  </Link>
                                </li>
                              </ul>
                              <Link href="/">Commercial</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Services Dropdown */}
                        <li className="has-child relative group">
                          <Link href="/">Services</Link>
                          <ul className="submenu absolute left-0 bg-white shadow-lg transform opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                            <li><Link href="/">Sales &amp; Collaboration</Link></li>
                            <li><Link href="/">Interior Design</Link></li>
                            <li><Link href="/">Turnkey Execution</Link></li>
                            <li><Link href="/">Commercial Leasing</Link></li>
                            <li><Link href="/">Building Management</Link></li>
                          </ul>
                        </li>

                        <li><Link href="/">Contact</Link></li>
                      </ul>
                    </nav>
                    <div className="box-user linkOnHover ml-6">
                      <div className="name text_white">Menu</div>
                    </div>
                  </div>

                  {/* Mobile Menu Button */}
                  <div
                    className="mobile-button cursor-pointer lg:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <i className="icon-menu"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="top-nav-mobile flex justify-between items-center p-4 border-b">
          <div className="offcanvas-title">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="header-image"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="icon-close"></i>
          </div>
        </div>

        {/* Mobile Menu Body */}
        <div className="inner-mobile-nav p-4 overflow-y-auto">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="item-menu-mobile">Home</Link>
            </li>
            <li>
              <Link href="/about" className="item-menu-mobile">About</Link>
            </li>

            {/* Projects Submenu */}
            <li>
              <button
                className="item-menu-mobile w-full text-left"
                onClick={() => toggleSubmenu("projects")}
              >
                Projects
              </button>
              <div
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                  openSubmenu === "projects" ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="sub-mobile pl-4 mt-2 space-y-2">
                  <li><Link href="/">Residential</Link></li>
                  <li><Link href="/">Commercial</Link></li>
                </ul>
              </div>
            </li>

            {/* Services Submenu */}
            <li>
              <button
                className="item-menu-mobile w-full text-left"
                onClick={() => toggleSubmenu("services")}
              >
                Services
              </button>
              <div
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                  openSubmenu === "services" ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="sub-mobile pl-4 mt-2 space-y-2">
                  <li><Link href="/">Sales &amp; Collaboration</Link></li>
                  <li><Link href="/">Interior Design</Link></li>
                  <li><Link href="/">Turnkey Execution</Link></li>
                  <li><Link href="/">Commercial Leasing</Link></li>
                  <li><Link href="/">Building Management</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/" className="item-menu-mobile">Contact</Link>
            </li>
          </ul>

          {/* Support Info */}
          <div className="support mt-6">
            <Link href="/" className="text-need">Need help?</Link>
            <ul className="mb-info mt-2 space-y-1">
              <li>Call Us Now: <span className="number">91932-56985</span></li>
              <li>
                Support 24/7:{" "}
                <Link href="/">info@homedevelopersgroup.com</Link>
              </li>
              <li>
                <div className="wrap-social">
                  <p>Follow us:</p>
                  <ul className="tf-social style-2 flex space-x-2">
                    <li><Link href="/"><i className="icon-fb"></i></Link></li>
                    <li><Link href="/"><i className="icon-X"></i></Link></li>
                    <li><Link href="/"><i className="icon-linked"></i></Link></li>
                    <li><Link href="/"><i className="icon-ins"></i></Link></li>
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
