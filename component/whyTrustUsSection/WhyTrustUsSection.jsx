"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./WhyTrustUs.module.css";

const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });
import "odometer/themes/odometer-theme-default.css";

function Counter({ target, label }) {
  const [count, setCount] = useState(() => {
    const randomOffset = Math.floor(Math.random() * target * 0.6);
    return Math.max(0, target - randomOffset);
  });

  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
            setTimeout(() => setCount(target), 200);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className={styles.counterItem} ref={ref}>
      <div className={styles.countWrap} aria-live="polite" aria-atomic="true">
        <div className={`${styles.counterNumber} text-black`}>
          <Odometer value={count} format="d" className="text-black" duration={2500} />
          <span className={styles.plus} aria-hidden="true">+</span>
        </div>
        <p className={styles.counterLabel}>{label}</p>
      </div>
    </div>
  );
}

export default function WhyTrustUsSection() {
  return (
    <section className={styles.section} role="region" aria-labelledby="why-trust-us-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 id="why-trust-us-heading" className={`${styles.title} text-black`}>Why Trust Us</h4>
        </header>

        <div className={`${styles.wrapCounter} text-black`}>
          <Counter className='text-black' target={500000} label="Sq. Ft. Delivered" />
          <Counter className='text-black' target={30} label="Years of Experience" />
          <Counter className='text-black' target={300} label="Satisfied Client" />
          <Counter className='text-black' target={200} label="Team Member" />
        </div>
      </div>
    </section>
  );
}
