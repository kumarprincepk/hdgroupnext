"use client";
import React from "react";
import Header from "@/components/headerSection/Header";
import Footer from "@/components/footerSection/Footer";
import Link from "next/link";
import Image from "next/image";
import projectInfo from "@/public/data/projectInfo";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <section className="projects-page py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">Our Projects</h1>
              <p className="lead text-muted">
                Discover our portfolio of exceptional developments
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {projectInfo.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative" style={{ height: "250px" }}>
                    <Image
                      src={project.image}
                      alt={project.heading}
                      fill
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.heading}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {project.description || "Exceptional development with premium amenities."}
                    </p>
                    <Link 
                      href={`/projects/${project.slug}`} 
                      className="btn btn-primary mt-auto"
                    >
                      View Project
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