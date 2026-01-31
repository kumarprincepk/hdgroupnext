"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyTrustUsSection() {
  const countersRef = useRef([]);

  useEffect(() => {
    AOS.init();

    const speed = 200;

    countersRef.current.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const hasPlus = counter.dataset.plus === "true";

      let current = 0;

      const animate = () => {
        const increment = target / speed;

        if (current < target) {
          current = Math.ceil(current + increment);
          counter.innerText =
            current.toLocaleString("en-IN") + (hasPlus ? "+" : "");
          setTimeout(animate, 10);
        } else {
          counter.innerText =
            target.toLocaleString("en-IN") + (hasPlus ? "+" : "");
        }
      };

      animate();
    });
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
            className="counter list-unstyled d-flex flex-wrap gap-4"
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
                  className="value"
                  data-target={item.value}
                  data-plus="true"
                  ref={(el) => (countersRef.current[index] = el)}
                >
                  0
                </div>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}