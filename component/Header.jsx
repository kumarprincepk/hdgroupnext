import Image from "next/image";

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
                                    <a href="" className="site-logo">
                                        <Image className="img-default" alt="" src="/images/logo-white.png" width={50} height={50}/>
                                    </a>
                                </div>
                                <div className="header-right">
                                    <nav className="main-menu">
                                        <ul className="navigation">
                                            <li className="current-menu"><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li className="has-child style-2"><a href="#">Projects</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <a href="#">
                                                                    <Image src="/images/residential.jpg" width={50} height={50}/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <a href="#">Residential</a>
                                                    </li>
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <a href="#">
                                                                    <Image src="/images/commercial.jpg" width={50} height={50}/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <a href="#">Commercial</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-child "><a href="#">Services</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="#">Consultancy </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Interior design</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Turnkey Execution</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">FIT OUT </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Commercial Leasing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Commercial Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Builders Floor</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Building Management </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Residence Sales &amp;  Collaboration </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Contact</a></li>
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
                                    <a href="" className="site-logo">
                                        <Image className="img-default" alt="" src="/images/logo-white.png" width={50} height={50}/>
                                    </a>
                                </div>
                                <div className="header-right">
                                    <nav className="main-menu">
                                        <ul className="navigation">
                                            <li className="current-menu"><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li className="has-child style-2"><a href="#">Projects</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <a href="#">
                                                                    <Image src="/images/residential.jpg" width={50} height={50}/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <a href="#">Residential</a>
                                                    </li>
                                                    <li>
                                                        <ul className="submenu2">
                                                            <li>
                                                                <a href="#">
                                                                    <Image src="/images/commercial.jpg" width={50} height={50}/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <a href="#">Commercial</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-child "><a href="#">Services</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="#">Consultancy </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Interior design</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Turnkey Execution</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">FIT OUT </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Commercial Leasing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Commercial Development
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Builders Floor</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Building Management </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Residence Sales &amp;  Collaboration </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Contact</a></li>
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
                                    <a href="#" className="site-logo">
                                        <Image className="img-default" alt="" src="/images/logo.png" width={50} height={50}/>
                                    </a>
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
                <a href="#">
                  <Image src="/images/logo.png" alt="" width={150} height={50}/>
                  </a>
            </div>
            <div data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="icon-close"></i>
            </div>
        </div>
        <div className="offcanvas-body inner-mobile-nav">
            <div className="mb-body">
                <ul id="menu-mobile-menu">
                    <li className="menu-item current-menu-item">
                        <a href="#dropdown-menu-one" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-one">
                            Home
                        </a>
                    </li>
                     <li className="menu-item">
                        <a href="#dropdown-menu-one" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-one">
                            About
                        </a>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-two" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-two">
                            Projects
                        </a>
                        <div id="dropdown-menu-two" className="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul className="sub-mobile">
                                <li className="menu-item">
                                    <a href="#sub-layout" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Residential</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#sub-feaure" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Commercial</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-four" className="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-four">
                            Services
                        </a>
                        <div id="dropdown-menu-four" className="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul className="sub-mobile">
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Consultancy </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Interior design</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Turnkey Execution</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">FIT OUT </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Commercial Leasing</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Commercial Development
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Builders Floor</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Building Management </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#" className="item-menu-mobile  collapsed" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="sub-agents">Residence Sales &amp;  Collaboration </a>
                                                    </li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-item ">
                        <a href="#" className="tem-menu-mobile "> Contact</a>
                    </li>
                </ul>
                <div className="support">
                    <a href="#" className="text-need"> Need help?</a>
                    <ul className="mb-info">
                        <li>Call Us Now: <span className="number">91932-56985</span></li>
                        <li>Support 24/7: <a href="#">info@homedevelopersgroup.com</a></li>
                        <li>
                            <div className="wrap-social">
                                <p>Follow us:</p>
                                <ul className="tf-social  style-2">
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