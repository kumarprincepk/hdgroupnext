"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./WhyTrustUs.module.css";

const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });

import "odometer/themes/odometer-theme-default.css";

function Counter({ target, label }) {
  const [count, setCount] = useState(() => {
    const randomOffset = Math.floor(Math.random() * target * 0.6);
    return target - randomOffset;
  });
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            setCount(target);
          }, 200);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className={`${styles.counterItem} ${styles.style4} text-center`} ref={ref}>
      <div className="count">
        <div className={`${styles.counterNumber} mx-auto`}>
          <Odometer value={count} format="d" duration={2500} />
          <span className={`${styles.sub} ${styles.plus}`}>+</span>
        </div>
        <p className="text-1 mt_-9">{label}</p>
      </div>
    </div>
  );
}

export default function WhyTrustUsSection() {
  return (
    <div className="tf-spacing-2">
      <div className="tf-container">
        <div className="flex flex-wrap">
          <div className="heading-section mb-30 text-left">
            <h4 className="text-1 split-text effect-right">Why Trust Us</h4>
          </div>
          <div className="w-full">
            <div className={`${styles.wrapCounter} ${styles.style1} tf-grid-layout-2 lg-col-4`}>
              <Counter target={500000} label="Sq. Ft. Delivered" />
              <Counter target={30} label="Years of Experience" />
              <Counter target={300} label="Satisfied Client" />
              <Counter target={200} label="Team Member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
