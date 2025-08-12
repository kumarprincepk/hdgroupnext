import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <>
        <header className="header style-2  header-sticky">
            <div className="header-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-inner-wrap">
                                <div className="header-logo">
                                    <Link href="/" className="site-logo">
                                        <Image className="img-default" alt="header-image" src="/images/logo-white.png" width={50} height={50}/>
                                    </Link>
                                </div>
                                <div className="header-right">
                                    <nav className="main-menu">
                                        <ul className="navigation">
                                            <li className="current-menu"><Link href="/">Home</Link></li>
                                            <li><Link href="/about">About</Link></li>
                                            <li className="has-child style-2"><Link href="/">Projects</Link>
                                                <ul className="submenu">
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <Link href="/">
                                                                    <Image src="/images/residential.jpg" width={50} height={50} alt="header-image"/>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <Link href="/">Residential</Link>
                                                    </li>
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <Link href="/">
                                                                    <Image src="/images/commercial.jpg" width={50} height={50} alt="header-image"/>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <Link href="/">Commercial</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-child "><Link href="/">Services</Link>
                                                <ul className="submenu">
                                                    <li>
                                                        <Link href="/">Sales &amp;  Collaboration</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Interior Design</Link>
                                                    </li>
                                                     <li>
                                                        <Link href="/">Turnkey Execution</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Commercial Leasing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Building Management </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="/">Contact</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="box-user linkOnHover">
                                        <div className="name text_white">
                                            Menu
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile"
                                    aria-controls="menu-mobile">
                                    <i className="icon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
       
        <header id="header-main" className="header style-2">
            <div className="header-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-inner-wrap">
                                <div className="header-logo">
                                    <Link href="/" className="site-logo">
                                        <Image className="img-default" alt="header-image" src="/images/logo-white.png" width={50} height={50}/>
                                    </Link>
                                </div>
                                <div className="header-right">
                                    <nav className="main-menu">
                                        <ul className="navigation">
                                            <li className="current-menu"><Link href="/">Home</Link></li>
                                            <li><Link href="/">About</Link></li>
                                            <li className="has-child style-2"><Link href="/">Projects</Link>
                                                <ul className="submenu">
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <Link href="/">
                                                                    <Image src="/images/residential.jpg" width={50} height={50} alt="header-image"/>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <Link href="/">Residential</Link>
                                                    </li>
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <Link href="/">
                                                                    <Image src="/images/commercial.jpg" width={50} height={50} alt="header-image"/>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <Link href="/">Commercial</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-child "><Link href="/">Services</Link>
                                                <ul className="submenu">
                                                     <li>
                                                        <Link href="/">Sales &amp;  Collaboration</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Interior Design</Link>
                                                    </li>
                                                     <li>
                                                        <Link href="/">Turnkey Execution</Link>
                                                    </li>
                                                     <li>
                                                        <Link href="/">Commercial Leasing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Building Management </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="/">Contact</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="box-user linkOnHover">
                                        <div className="name text_white">
                                            Menu
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile"
                                    aria-controls="menu-mobile">
                                    <i className="icon-menu"></i>
                                </div>
                            </div>
                           <div className="header-inner-wrap">
                                <div className="header-logo">
                                    <Link href="/" className="site-logo">
                                        <Image className="img-default" alt="header-image" src="/images/logo.png" width={50} height={50}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

          <div className="offcanvas offcanvas-start mobile-nav-wrap " tabIndex="-1" id="menu-mobile"
        aria-labelledby="menu-mobile">
        <div className="offcanvas-header top-nav-mobile">
            <div className="offcanvas-title">
                <Link href="/">
                  <Image src="/images/logo.png" alt="header-image" width={150} height={50}/>
                  </Link>
            </div>
            <div data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="icon-close"></i>
            </div>
        </div>
        <div className="offcanvas-body inner-mobile-nav">
            <div className="mb-body">
                <ul id="menu-mobile-menu">
                    <li className="menu-item current-menu-item">
                        <Link href="#dropdown-menu-one" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-one">
                            Home
                        </Link>
                    </li>
                     <li className="menu-item">
                        <Link href="#dropdown-menu-one" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-one">
                            About
                        </Link>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile">
                        <Link href="#dropdown-menu-two" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-two">
                            Projects
                        </Link>
                        <div id="dropdown-menu-two" className="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul className="sub-mobile">
                                <li className="menu-item">
                                    <Link href="#sub-layout" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Residential</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="#sub-feaure" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Commercial</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile">
                        <Link href="#dropdown-menu-four" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-four">
                            Services
                        </Link>
                        <div id="dropdown-menu-four" className="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul className="sub-mobile">
                                <li className="menu-item">
                                                        <Link href="/" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Sales &amp;  Collaboration</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link href="/" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Interior Design</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link href="/" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Turnkey Execution</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link href="/" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Commercial Leasing</Link>
                                                    </li>
                                                     <li className="menu-item">
                                                        <Link href="/" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Building Management </Link>
                                                    </li> 
                            </ul>
                        </div>
                    </li>
                    <li className="menu-item ">
                        <Link href="/" className="tem-menu-mobile "> Contact</Link>
                    </li>
                </ul>
                <div className="support">
                    <Link href="/" className="text-need"> Need help?</Link>
                    <ul className="mb-info">
                        <li>Call Us Now: <span className="number">91932-56985</span></li>
                        <li>Support 24/7: <Link href="/">info@homedevelopersgroup.com</Link></li>
                        <li>
                            <div className="wrap-social">
                                <p>Follow us:</p>
                                <ul className="tf-social  style-2">
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
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    </>
  );
}