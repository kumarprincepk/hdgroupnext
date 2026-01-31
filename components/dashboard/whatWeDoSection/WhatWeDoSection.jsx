"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function WhatWeDoSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  const services = [
    {
      id: 1,
      title: "New Construction",
      description: `We design spaces with a timeless vision, balancing innovation and aesthetic appeal while keeping your budget in mind. Whether residential or commercial, our collaborative approach ensures that every project is thoughtfully designed and executed.`,
      image: "/images/whatWeDo/Screenshot.png",
      ctaText: "Read More",
      servicesLink: "/services/new-construction"
    },
    {
      id: 2,
      title: "Real Estate Consultancy",
      description: `We blend our 30 years of expertise with our dedication to service to give our clients the best solutions to their real
 estate challenges. If it is finding the right location for your dream house, or it is providing expertise on investment opportunities.`,
      image: "/images/whatWeDo/Screenshot (85) (1).png",
      ctaText: "Read More",
      servicesLink: "/services/real-estate-consultancy"
    },

    {
      id: 3,
      title: "Interior Design",
      description: `Our interior design solutions are client centric, mixing bold elements with timeless sophistication. From traditional
 to contemporary, our portfolio is a reflection of your style and passions, creating environments that are a harmonious blend of contrast and unity.`,
      image: "/images/whatWeDo/agent-item.jpg",
      ctaText: "Read More",
      servicesLink: "/services/interior-design"
    },
    {
      id: 4,
      title: "Maintenance Services",
      description: `Our comprehensive maintenance solutions ensure that your space remains efficient, professional and safe. From daily
 inspections to cleaning and security, we handle it all.`,
      image: "/images/whatWeDo/section-pre-approved1.jpg",
      ctaText: "Read More",
      servicesLink: "/services/maintenance-services"
    },
  ];
  return (
    <section className="whatWeDo">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col mb-4 mb-md-5" data-aos="fade-right">
            What we do
          </h5>
        </div>
        <div className="row gy-4">
          {services.map((s, index) => (
            <div
              className="col-sm-6"
              key={s.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <article className="card border-0 rounded-3 text-white overflow-hidden h-100">
                <img
                  src={s.image}
                  className="img-fluid border-0"
                  alt={s.title}
                />
                <div
                  className="card-body p-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text mb-4">{s.description}</p>
                  <Link 
                    href={s.servicesLink}
                    className="btn-round bg-color-secondary py-3 px-3 rounded-5"
                  >
                    <span className="ic">
                      <i className="icon-arrow-right-3"></i>
                    </span>
                    {s.ctaText}
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
