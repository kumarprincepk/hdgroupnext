"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CiStopwatch } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

/* ✅ PDF.js worker */
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ReadMoreSection() {
  /* ------------------ STATE ------------------ */
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isClient, setIsClient] = useState(false);

  /* ------------------ EFFECTS ------------------ */
  useEffect(() => {
    AOS.init();
    setIsClient(true);
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
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">{selectedPdf.title}</h5>
                <button className="btn-close" onClick={closePdfModal} />
              </div>

              <div
                className="modal-body p-0"
                style={{ height: "70vh", overflow: "auto" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">

                  {isClient && (
                    <Document
                      file={selectedPdf.file}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={(err) =>
                        console.error("PDF load error:", err)
                      }
                      loading={<p className="p-4">Loading PDF...</p>}
                    >
                      <Page
                        pageNumber={pageNumber}
                        width={Math.min(800, window.innerWidth - 40)}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  )}

                </div>
              </div>

              {numPages > 1 && (
                <div className="modal-footer justify-content-center">
                  <button
                    className="btn btn-outline-primary"
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                  >
                    Previous
                  </button>

                  <span className="mx-3">
                    Page {pageNumber} of {numPages}
                  </span>

                  <button
                    className="btn btn-outline-primary"
                    disabled={pageNumber === numPages}
                    onClick={() => setPageNumber(pageNumber + 1)}
                  >
                    Next
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
