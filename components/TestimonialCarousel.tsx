"use client";
import { useState } from "react";
import styles from "./testimonial-carousel.module.css";

const TESTIMONIALS = [
  {
    headline: "Overwhelming change in my body and diet",
    quote:
      "Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle.",
    name: "Krutika Talwadel",
    role: "Supply Chain Professional",
    portrait:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    headline: "I finally feel in control of my health",
    quote:
      "The course transformed how I think about food. Cravings disappeared, my energy came back, and I feel more alive than I have in years.",
    name: "Anjali Sharma",
    role: "Software Engineer",
    portrait:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    headline: "Chronic issues finally resolving",
    quote:
      "Dr. Gauri's approach is grounded in science but delivered with warmth. Issues I'd carried for years are finally easing — I feel like myself again.",
    name: "Rahul Menon",
    role: "Entrepreneur",
    portrait:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.cardMedia}>
          <img src={t.portrait} alt={t.name} />
        </div>

        <div className={styles.cardBody} key={index}>
          <h3 className={styles.headline}>&ldquo;{t.headline}&rdquo;</h3>
          <blockquote className={styles.quote}>{t.quote}</blockquote>
          <div className={styles.author}>
            <p className={styles.name}>{t.name}</p>
            <p className={styles.role}>{t.role}</p>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <img src="/images/icons/arrow-left.svg" alt="" />
        </button>
        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={next}
          aria-label="Next testimonial"
        >
          <img src="/images/icons/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
