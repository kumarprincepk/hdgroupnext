"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CiStopwatch } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

// Dynamically import PDF components to avoid server-side rendering issues
const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

export default function ReadMoreSection() {
  /* ------------------ STATE ------------------ */
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /* ------------------ EFFECTS ------------------ */
  useEffect(() => {
    AOS.init();
  }, []);

  /* ------------------ DATA ------------------ */
  const pdfData = [
    {
      id: 1,
      title: "Look Book FBD",
      file: "/pdfs/Lookbook-FBD.pdf",
      thumbnail: "/images/lookbookfbd.png",
      date: "5 min read",
    },
    {
      id: 2,
      title: "Look Book D-112",
      file: "/pdfs/Lookbook-D-112.pdf",
      thumbnail: "/images/lookbookd112.png",
      date: "7 min read",
    },
    {
      id: 3,
      title: "Look Book Okhla",
      file: "/pdfs/Lookbook-Okhla.pdf",
      thumbnail: "/images/lookbookOkhla.png",
      date: "7 min read",
    },
    {
      id: 4,
      title: "Look Book Essentia Vasant Vihar",
      file: "/pdfs/HD-Essentia-V-Vihar.pdf",
      thumbnail: "/images/hdEssentiavVihar.png",
      date: "7 min read",
    },
  ];

  /* ------------------ HANDLERS ------------------ */
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const openPdfModal = (pdf) => {
    setSelectedPdf(pdf);
    setPageNumber(1);
    document.body.style.overflow = "hidden";
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
    setNumPages(null);
    setPageNumber(1);
    document.body.style.overflow = "auto";
  };

  /* ------------------ RENDER ------------------ */
  return (
    <section className="blogs">
      <div className="container-fluid">
        <h5 className="mb-4" data-aos="fade-right">
          Insight & Opinion
        </h5>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop
          grabCursor
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {pdfData.map((pdf) => (
            <SwiperSlide key={pdf.id}>
              <div className="blog-article-item">

                {/* IMAGE */}
                <div
                  className="image-wrap mb-4 cursor-pointer"
                  onClick={() => openPdfModal(pdf)}
                >
                  <Image
                    src={pdf.thumbnail}
                    alt={pdf.title}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div className="article-content">
                  <div className="time">
                    <CiStopwatch />
                    <p>{pdf.date}</p>
                  </div>

                  {/* TITLE */}
                  <h4
                    className="title cursor-pointer"
                    onClick={() => openPdfModal(pdf)}
                  >
                    {pdf.title}
                  </h4>

                  {/* READ MORE */}
                  <button
                    className="btn-link"
                    onClick={() => openPdfModal(pdf)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <span>Read More</span>
                    <GrFormNextLink />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ------------------ PDF MODAL ------------------ */}
      {selectedPdf && (
        <PdfViewer
          selectedPdf={selectedPdf}
          pageNumber={pageNumber}
          numPages={numPages}
          onPageChange={setPageNumber}
          onLoadSuccess={onDocumentLoadSuccess}
          onClose={closePdfModal}
        />
      )}
    </section>
  );
}
