"use client";
import Footer from "@/component/footerSection/Footer";
import Header from "@/component/headerSection/Header";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header />
      <Head>
        <title>HOME DEVELOPER GROUP</title>
        <meta name="description" content="Contact APARNAKAUSHIK DESIGN GROUP" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
        <div
          className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat opacity-90"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(/images/picture1.jpg)",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover"
          }}
        ></div>

        <div className="relative z-10 text-center text-white p-8 max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              id="logo_footer"
              src="/images/icon.png"
              alt="logo-footer"
              width={300}
              height={50}
              className="w-auto h-auto max-w-full"
              priority
            />
          </div>

          {/* Contact Section */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl md:text-3xl font-semibold mb-4 sm:mb-6 tracking-wider text-white">
              CONTACT US
            </h3>
            <p className="text-base sm:text-lg md:text-xl italic text-white">
              We cherish all interactions
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-8 sm:py-16 px-4 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgb(63 60 58 / 90%)), url(/images/residential.jpg)",
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          OBackgroundSize: "cover"
        }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Column - Contacts & Find Us */}
          <div className="flex flex-col space-y-8 md:w-1/3">
            {/* OUR CONTACTS */}
            <div className="p-4 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                OUR
                <br />
                CONTACTS
              </h2>
            </div>

            {/* FIND US */}
            <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-full shadow-lg w-64 h-64 sm:w-80 sm:h-80 flex flex-col items-center justify-center relative group hover:cursor-pointer mx-auto transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 absolute top-1/2 -translate-y-1/2 flex flex-col items-center z-10 text-gray-800 group-hover:opacity-90">
                <span>FIND</span>
                <span>US</span>
              </h2>
              {/* Google Map */}
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=G-178,+Sector+44,+Noida",
                    "_blank"
                  )
                }
              >
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5384714841087!2d77.3514!3d28.5534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzEyLjIiTiA3N8KwMjEnMDUuMCJF!5e0!3m2!1sen!2sin!4v1639137154265!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, opacity: 0.7 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <div className="absolute inset-0 bg-gray-200 opacity-30"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Address & Email */}
          <div className="flex flex-col space-y-8 md:w-2/3">
            {/* OUR ADDRESS */}
            <div>
              <h2 className="text-xl font-bold mb-2 text-white">OUR ADDRESS</h2>
              <h3 className="text-lg font-medium text-white mb-1">
                Head Office
              </h3>
              <p className="text-gray-300 leading-relaxed">
                G-178, Sector 44,
                <br />
                Opposite Amity University,
                <br />
                Noida (NCR), Pin -201301, India
              </p>
            </div>

            {/* EMAIL US */}
            <h2 className="text-xl font-bold mb-4 text-white">EMAIL US</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Design & Build */}
              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Design &amp; Build services
                  </h3>
                  <p className="text-gray-300 flex items-center mb-2">
                    <FaEnvelope className="mr-2" /> info@homedevelopersgroup.com
                  </p>
                  <p className="text-gray-300 flex items-center mb-2">
                    <FaEnvelope className="mr-2" /> info@homedevelopersgroup.com
                  </p>
                  <p className="text-gray-300 flex items-center mb-2">
                    <FaPhone className="mr-2" /> +91 9310359993
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <FaPhone className="mr-2" /> +91 0120 4371060
                  </p>
                </div>

                {/* General Enquiries */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-2">
                    General Enquiries
                  </h3>
                  <p className="text-gray-300 flex items-center">
                    <FaEnvelope className="mr-2" /> info@homedevelopersgroup.com
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                {/* Career */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Career
                  </h3>
                  <p className="text-gray-300 flex items-center">
                    <FaEnvelope className="mr-2" /> info@homedevelopersgroup.com
                  </p>
                </div>

                {/* Media & Press */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Media &amp; Press
                  </h3>
                  <p className="text-gray-300 flex items-center">
                    <FaEnvelope className="mr-2" /> info@homedevelopersgroup.com
                  </p>
                </div>

                {/* Vendors */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Vendors
                  </h3>
                  <p className="text-gray-300 flex items-center">
                    <FaEnvelope className="mr-2" /> info@homedevelopersgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
