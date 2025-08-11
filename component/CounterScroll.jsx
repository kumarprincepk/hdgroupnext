"use client";

import { useEffect, useRef, useState } from "react";

export default function CounterScroll() {
  const [counts, setCounts] = useState({
    style11: 0,
    style12: 0,
    style13: 0,
    style14: 0,
    style21: 0,
    style22: 0,
    style23: 0,
    style31: 0,
    style32: 0,
    style41: 0,
    style42: 0,
    style43: 0,
    style44: 0,
    style51: 0,
  });

  const sectionRefs = useRef({});

  useEffect(() => {
    function isInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      );
    }

    function handleScroll() {
      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (isInViewport(ref)) {
          setCounts(prev => {
            const newCounts = { ...prev };
            if (key === "style1") {
              newCounts.style11 = 2300;
              newCounts.style12 = 550;
              newCounts.style13 = 525;
              newCounts.style14 = 1875;
            }
            if (key === "style2") {
              newCounts.style21 = 900;
              newCounts.style22 = 287;
              newCounts.style23 = 3;
            }
            if (key === "style3") {
              newCounts.style31 = 250;
              newCounts.style32 = 470;
            }
            if (key === "style4") {
              newCounts.style41 = 2300;
              newCounts.style42 = 550;
              newCounts.style43 = 525;
              newCounts.style44 = 1875;
            }
            if (key === "style5") {
              newCounts.style51 = 2;
            }
            return newCounts;
          });
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="counter-scroll">
      <div
        ref={el => (sectionRefs.current.style1 = el)}
        className="odometer"
      >
        <div>{counts.style11}</div>
        <div>{counts.style12}</div>
        <div>{counts.style13}</div>
        <div>{counts.style14}</div>
      </div>

      <div
        ref={el => (sectionRefs.current.style2 = el)}
        className="odometer style-2"
      >
        <div>{counts.style21}</div>
        <div>{counts.style22}</div>
        <div>{counts.style23}</div>
      </div>

      <div
        ref={el => (sectionRefs.current.style3 = el)}
        className="odometer style-3"
      >
        <div>{counts.style31}</div>
        <div>{counts.style32}</div>
      </div>

      <div
        ref={el => (sectionRefs.current.style4 = el)}
        className="odometer style-4"
      >
        <div>{counts.style41}</div>
        <div>{counts.style42}</div>
        <div>{counts.style43}</div>
        <div>{counts.style44}</div>
      </div>

      <div
        ref={el => (sectionRefs.current.style5 = el)}
        className="odometer style-5"
      >
        <div>{counts.style51}</div>
      </div>
    </div>
  );
}
