"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./credentials-modal.module.css";

export default function CredentialsModal({
  triggerClassName,
  triggerLabel = "My Credentials",
}: {
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden
          >
            <motion.div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="credentials-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close credentials"
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
              >
                ×
              </button>

              <h2 id="credentials-title" className={styles.title}>
                30+ Years of Practice. 1500+ Lives Transformed.
              </h2>
              <p className={styles.intro}>
                With over three decades of experience in holistic health, Dr. Gauri Rokkam has
                worked with individuals across India, the US, Europe, the Middle East, and
                Singapore—helping reverse chronic conditions and build sustainable health
                practices.
              </p>

              <div className={styles.section}>
                <p className={styles.sectionLabel}>Academic Foundation</p>
                <ul className={styles.list}>
                  <li>PhD in Yoga &amp; Life Sciences — SVYASA Yoga University, Bengaluru</li>
                  <li>MSc in Food &amp; Nutrition — Bengaluru University (Gold Medalist, University Topper)</li>
                  <li>Diploma in Nutrition for Health Promotion &amp; Disease Prevention — UCSF, USA</li>
                </ul>
              </div>

              <div className={styles.section}>
                <p className={styles.sectionLabel}>Clinical &amp; Professional Certifications</p>
                <ul className={styles.list}>
                  <li>Certified Nature Cure Therapist (trained under Dr. Arun Sharma)</li>
                  <li>Certified Diabetes Educator — St. John&apos;s Hospital, Bengaluru</li>
                  <li>Certified Yoga Instructor &amp; Therapist — SVYASA University</li>
                  <li>Certified Lactation Consultant</li>
                  <li>Certified Sports Nutritionist</li>
                </ul>
              </div>

              <div className={styles.section}>
                <p className={styles.sectionLabel}>Research &amp; Publications</p>
                <ul className={styles.list}>
                  <li>Government-funded research on Fresh Coconut</li>
                  <li>Published in the Journal of the American College of Nutrition</li>
                  <li>Author of Craft Your Wellness — a book bridging ancient wisdom and modern nutrition</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
