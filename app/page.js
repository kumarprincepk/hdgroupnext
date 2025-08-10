import Image from "next/image";
import loadingImage from "../public/images/fav-icon.png";
import Loader from "@/component/Loader";
import CounterScroll from "@/component/CounterScroll";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div>
      {/* <div className="theme-color-1"> */}
      <div>
        <Loader />
        <CounterScroll />
        <Header />
        <Footer/>

        <main className="page-title home02">
          <div className="hero-bg-video">
            <video autoPlay muted loop>
              <source src="images/hd_group.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="hero-text">
              <div className="animated-line">
                <span style={{ "--i": 0 }}>B</span>
                <span style={{ "--i": 1 }}>u</span>
                <span style={{ "--i": 2 }}>i</span>
                <span style={{ "--i": 3 }}>l</span>
                <span style={{ "--i": 4 }}>d</span>
                <span style={{ "--i": 5 }}>i</span>
                <span style={{ "--i": 6 }}>n</span>
                <span style={{ "--i": 7 }}>g</span>
                <span style={{ "--i": 15 }}>&nbsp;</span>
                <span style={{ "--i": 8 }}>L</span>
                <span style={{ "--i": 9 }}>a</span>
                <span style={{ "--i": 10 }}>s</span>
                <span style={{ "--i": 11 }}>t</span>
                <span style={{ "--i": 12 }}>i</span>
                <span style={{ "--i": 13 }}>n</span>
                <span style={{ "--i": 14 }}>g</span>
                <span style={{ "--i": 15 }}>&nbsp;</span>
                <span style={{ "--i": 16 }}>L</span>
                <span style={{ "--i": 17 }}>e</span>
                <span style={{ "--i": 18 }}>g</span>
                <span style={{ "--i": 19 }}>a</span>
                <span style={{ "--i": 20 }}>c</span>
                <span style={{ "--i": 21 }}>i</span>
                <span style={{ "--i": 22 }}>e</span>
                <span style={{ "--i": 23 }}>s</span>
                <span style={{ "--i": 15 }}>.</span>
              </div>
            </div>

            <div className="ui-banner__scrollButton">
              <div className="ui-banner__scrollButtonScrollbar">
                <span className="ui-banner__scrollButtonScrollbarBg"></span>
                <span className="ui-banner__scrollButtonScrollbarFg"></span>
              </div>
              <p className="ui-banner__scrollButtonText">Find out how</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
