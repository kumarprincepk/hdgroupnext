import AOSInit from "@/components/AOSInit";
import Gallery from "@/components/CommonGallery/CommonGallery";
import Footer from "@/components/footerSection/Footer";
import Header from "@/components/headerSection/Header";
import projectInfo from "@/public/data/projectInfo";
import Link from "next/link";

export function generateStaticParams() {
  return projectInfo.map((projectData) => ({
    slug: projectData.slug,
  }));
}

export default async function ServicePage({ params }) {
  
  
  const { slug } = await params;
  const projectData = projectInfo.find((item) => item.slug === slug);

  if (!projectData) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="shadow p-4 rounded bg-white text-center" style={{ maxWidth: "500px", width: "100%" }}>
          <h1 className="h4 fw-bold text-dark mb-3">Service Not Found</h1>
          <p className="text-muted mb-4">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/" className="btn btn-primary px-4 py-2">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
    <AOSInit />
    <Header />
      <div className="heroBgVideo" data-aos="fade-up">
        <h2>
          {projectData.heading}
        </h2>
        <video autoPlay muted loop>
          <source src={projectData.video} type="video/mp4" />
        </video>
      </div>

        <div className="container-fluid">
          <div className="mt-5 pt-3 inner-page pb-5">
            {/* <div className="row">
              <div className="col text-center mb-5">
                <h2>{projectData.heading}</h2>
              </div>
            </div> */}

            {projectData.data.map((subProject, index) => (
                <div
                  key={subProject.id} 
                  className={`row mb-4 ${
                    index % 2 === 1 ? "flex-md-row-reverse" : ""
                  }`}
                >
                  <div className="col-md-6">
                    <div className="d-flex flex-column align-item-center justify-content-center h-100">
                      <h4 className="mb-3">
                        {subProject.title}
                      </h4>
                      <p className="text-muted mb-2">
                        {subProject.details}
                      </p>
                    </div>
                  </div>

                  {/* Images gallery */}
                  <div className="col-md-6">
                    <div className="d-flex flex-column align-item-center justify-content-center h-100">
                      <Gallery images={subProject.images} />
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* <Link
            href="/"
            className="d-inline-flex align-items-center text-primary text-decoration-none"
          >
            <svg
              className="me-2"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link> */}
        </div>
      <Footer />
    </>
  );
}
