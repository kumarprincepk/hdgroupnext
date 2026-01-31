"use client";
import React from "react";
import Header from "@/components/headerSection/Header";
import Footer from "@/components/footerSection/Footer";
import Link from "next/link";
import Image from "next/image";
import serviceDetails from "@/public/data/pageInfo";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <section className="services-page py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">Our Services</h1>
              <p className="lead text-muted">
                Comprehensive solutions for all your real estate needs
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {serviceDetails.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative" style={{ height: "200px" }}>
                    <Image
                      src={service.image || "/images/section-pre-approved1.jpg"}
                      alt={service.heading}
                      fill
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{service.heading}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {service.description || "Professional service tailored to your needs."}
                    </p>
                    <Link 
                      href={`/services/${service.slug}`} 
                      className="btn btn-primary mt-auto"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}