// import Footer from "@/component/footerSection/Footer";
// import Header from "@/component/headerSection/Header";

// export default function About() {
//   return (
//     <>
//     <Header/>
//     <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
//       Hello About
//     </span>
//     <Footer/>
//     </>
//   );
// }


import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from "@/component/footerSection/Footer";
import Header from "@/component/headerSection/Header";

const AboutUs = () => {
  return (
    <>
     <Header/>
      <Head>
        <title>About Us | Your Company Name</title>
        <meta name="description" content="Learn about our company's vision, mission, and values" />
      </Head>

      {/* Hero Banner Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/about-us-banner.jpg" // Replace with your image path
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Building excellence, creating value, and shaping the future
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="/about-overview.jpg" // Replace with your image
              alt="Company Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in [YEAR], [Your Company Name] has grown from a small startup to a leading
              [industry] company with a strong reputation for excellence and innovation.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been marked by significant milestones, strategic expansions, and a
              relentless focus on delivering exceptional value to our customers and stakeholders.
            </p>
            <p className="text-gray-600">
              Today, we stand as a testament to visionary leadership, operational excellence, and
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the most trusted and innovative [industry] company, creating sustainable
                value for all our stakeholders while setting benchmarks in quality and customer
                satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To deliver exceptional [products/services] through innovation, operational
                excellence, and sustainable practices while fostering long-term relationships with
                our customers, employees, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Integrity',
              description: 'We conduct our business with honesty, transparency, and ethical practices.',
              icon: 'M12 15l8-8m0 0h-8m8 0v8m-8.5-12.5h.01m4.99 0h.01m4.99 0h.01M4 12a8 8 0 018-8 8 8 0 110 16 8 8 0 01-8-8z',
            },
            {
              title: 'Innovation',
              description: 'We embrace creativity and continuous improvement in all we do.',
              icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            },
            {
              title: 'Excellence',
              description: 'We strive for the highest standards in quality and performance.',
              icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            },
            {
              title: 'Sustainability',
              description: 'We are committed to environmentally responsible and sustainable practices.',
              icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <Image
                    src={`/leader-${item}.jpg`} // Replace with your images
                    alt={`Leader ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Leader Name</h3>
                  <p className="text-blue-600 font-medium mb-3">Designation</p>
                  <p className="text-gray-600">
                    Brief description about the leader's role, experience, and contributions to the
                    company.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16">
            {[
              { year: '2023', title: 'Expanded Operations', description: 'Launched new division focusing on sustainable solutions' },
              { year: '2020', title: 'National Recognition', description: 'Received industry award for innovation and excellence' },
              { year: '2017', title: 'Major Milestone', description: 'Reached significant customer base and revenue targets' },
              { year: '2015', title: 'Strategic Partnership', description: 'Formed key alliance with international partners' },
              { year: '2012', title: 'Company Founded', description: 'Started operations with a small team and big vision' },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 p-4 md:p-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex md:w-1/2 items-center justify-center">
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      {item.year}
                    </div>
                  </div>
                </div>
                {/* Mobile year display */}
                <div className="md:hidden text-center my-4">
                  <div className="inline-block w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {item.year}
                  </div>
                </div>
                <div className={`md:w-1/2 p-4 md:p-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Building the Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how we can work together to create lasting value and make a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
            <button className="border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore Careers
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AboutUs;
