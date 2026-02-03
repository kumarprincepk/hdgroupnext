"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyTrustUsSection() {
  const countersRef = useRef([]);

  useEffect(() => {
    AOS.init({
      once: true, // animation + counter run only once
      duration: 800,
    });

    const speed = 200;

    const runCounter = (counter) => {
      if (!counter || counter.dataset.started) return;
      counter.dataset.started = "true";

      const target = Number(counter.dataset.target);
      const hasPlus = counter.dataset.plus === "true";
      let current = 0;
      const increment = target / speed;

      const animate = () => {
        current += increment;
        if (current < target) {
          counter.innerText =
            Math.ceil(current).toLocaleString("en-IN") +
            (hasPlus ? "" : "");
          requestAnimationFrame(animate);
        } else {
          counter.innerText =
            target.toLocaleString("en-IN") + (hasPlus ? "" : "");
        }
      };

      animate();
    };

    const handleAosIn = (event) => {
      const values = event.detail.querySelectorAll(".odometer");
      values.forEach(runCounter);
    };

    document.addEventListener("aos:in", handleAosIn);

    return () => {
      document.removeEventListener("aos:in", handleAosIn);
    };
  }, []);

  return (
    <section className="trust-us">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col mb-3 mb-md-5" data-aos="fade-right">
            Why Trust Us
          </h5>
        </div>

        <div className="row">
          <ul
            className="counter list-unstyled d-flex flex-wrap gap-xl-4 gap-0"
            data-aos="fade-up"
          >
            {[
              { value: 500000, label: "Sq. Ft. Delivered" },
              { value: 30, label: "Years of Experience" },
              { value: 300, label: "Satisfied Clients" },
              { value: 200, label: "Team Members" },
            ].map((item, index) => (
              <li key={index}>
                <div
                  className="odometer"
                  data-target={item.value}
                  // data-plus="true"
                  ref={(el) => (countersRef.current[index] = el)}
                >
                  0
                </div>
                <span className="counter-text">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
