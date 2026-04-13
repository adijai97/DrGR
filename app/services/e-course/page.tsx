"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./e-course.module.css";

// Figma asset URLs
const imgSubtract   = "https://www.figma.com/api/mcp/asset/e6955767-f2d5-449b-8f60-f397a1db2f18";
const imgArrowLeft  = "https://www.figma.com/api/mcp/asset/9d8cfb8d-cf48-4d97-bc65-5549439ccb0c";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/c92c5f63-b0f0-4952-82d9-3fe9b42fbca3";
const imgVector     = "https://www.figma.com/api/mcp/asset/68fa803b-e09b-43fc-8f44-82fc8d1b9aa3";
const imgAvatar     = "https://www.figma.com/api/mcp/asset/d2498c26-a225-4eba-9767-4de2b906a17f";

const MODULES = [
  {
    id: 1,
    title: "Foundations of Health",
    subtitle: "Understand how your body works before trying to fix it",
    bullets: [
      "Foundations of True Health: The 5 Elements Explained — how balance in the body is created and lost",
      "Nature's Blueprint for Wellness: The natural laws your body follows (whether you realise it or not)",
    ],
  },
  {
    id: 2,
    title: "Food, Simplified",
    subtitle: "Cut through confusion and learn what to actually eat",
    bullets: [
      "The truth about macronutrients — what your body actually needs",
      "Reading food labels, understanding ingredients, and making smarter choices every day",
    ],
  },
  {
    id: 3,
    title: "Understanding Disease",
    subtitle: "Learn why symptoms appear and what they're really telling you",
    bullets: [
      "How chronic illness develops — and why managing symptoms is not the same as healing",
      "The role of inflammation, stress, and sleep in disease progression",
    ],
  },
  {
    id: 4,
    title: "Fats, Nutrients & the Mind",
    subtitle: "Build clarity, then make it sustainable",
    bullets: [
      "Why fats are essential — and which ones to eat",
      "The gut–brain connection: how food shapes your mood, focus, and resilience",
    ],
  },
];

export default function ECoursePage() {
  const [openModule, setOpenModule] = useState<number>(1);

  return (
    <div className={styles.pageBg}>
      <div className={styles.heroGradient} />
      <div className={styles.pageContent}>
        <div className={styles.inner}>

          {/* ── Hero ── */}
          <div className={styles.hero}>
            <Link href="/services" className={styles.goBack}>
              <img src={imgArrowLeft} alt="" width={24} height={24} />
              <span>Go Back</span>
            </Link>
            <h1 className={styles.pageTitle}>Master Your Health</h1>
            <p className={styles.pageSubtitle}>Self Paced E-Course</p>
            <div className={styles.tags}>
              <span className={styles.tag}>+25 hrs of content</span>
              <span className={styles.tag}>500+ Students</span>
              <span className={styles.tag}>Certificate Included</span>
            </div>
          </div>

          {/* ── Two-col: description + image ── */}
          <div className={styles.twoCol}>
            <div className={styles.descCol}>
              <div className={styles.descTextGroup}>
                <h2 className={styles.descTitle}>Learn to heal yourself.</h2>
                <p className={styles.descBody}>
                  A structured, step-by-step course to understand your body, correct your habits,
                  and take charge of your health.
                </p>
              </div>
              <button className={styles.buyBtn}>Buy Now!</button>
            </div>
            <div className={styles.imageCol}>
              <img src={imgSubtract} alt="" className={styles.subtractImg} />
            </div>
          </div>

          {/* ── Sand banner ── */}
          <div className={styles.sandBanner}>
            <p>
              25+ hours of guided learning across food, lifestyle, and mindset —
              designed to help you build lasting health, at your own pace.
            </p>
          </div>

          {/* ── What You'll Gain ── */}
          <div className={styles.gainSection}>
            <p className={styles.sectionLabel}>WHAT YOU&apos;LL GAIN</p>
            <div className={styles.gainCard}>
              <div className={styles.gainItem}>
                A clear understanding of why your body is unwell
              </div>
              <div className={styles.gainDivider} />
              <div className={styles.gainItem}>
                The ability to make the right food choices
              </div>
              <div className={styles.gainDivider} />
              <div className={styles.gainItem}>
                A practical framework to build sustainable habits
              </div>
              <div className={styles.gainDivider} />
              <div className={styles.gainItem}>
                Confidence to take care of your own health
              </div>
            </div>
          </div>

          {/* ── Who Is This For ── */}
          <div className={styles.whoSection}>
            <p className={styles.sectionLabel}>WHO IS THIS FOR?</p>
            <div className={styles.whoColumns}>
              <p className={styles.whoItem}>You prefer learning and applying on your own</p>
              <p className={styles.whoItem}>You want deep understanding before taking action</p>
              <p className={styles.whoItem}>You&apos;re disciplined enough to follow through independently</p>
            </div>
          </div>

          {/* ── Curriculum Details ── */}
          <div className={styles.curriculumSection}>
            <p className={styles.sectionLabel}>CURRICULUM DETAILS</p>
            <div className={styles.accordion}>
              {MODULES.map((mod, idx) => {
                const isOpen = openModule === mod.id;
                const isLast = idx === MODULES.length - 1;
                return (
                  <div key={mod.id} className={styles.accordionRow}>
                    {/* Step indicator */}
                    <div className={styles.stepIndicatorCol}>
                      <div className={styles.stepCircle}>{mod.id}</div>
                      {!isLast && <div className={styles.stepLine} />}
                    </div>
                    {/* Card */}
                    <div className={`${styles.moduleCard} ${isOpen ? styles.moduleCardOpen : ""}`}>
                      <button
                        className={styles.moduleHeader}
                        onClick={() => setOpenModule(isOpen ? -1 : mod.id)}
                      >
                        <div className={styles.moduleHeaderText}>
                          <p className={styles.moduleTitle}>{mod.title}</p>
                          <p className={styles.moduleSubtitle}>{mod.subtitle}</p>
                        </div>
                        <img
                          src={imgArrowLeft}
                          alt=""
                          width={24}
                          height={24}
                          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                        />
                      </button>
                      {isOpen && mod.bullets.length > 0 && (
                        <ul className={styles.moduleBullets}>
                          {mod.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Testimonials ── */}
          <div className={styles.testimonialSection}>
            <div className={styles.testimonialHeader}>
              <p className={styles.sectionLabel} style={{ textAlign: "left" }}>
                TESTIMONIALS for MASTER YOUR HEALTH
              </p>
              <Link href="/stories" className={styles.readMoreBtn}>
                Read More Testimonials
                <img src={imgArrowRight} alt="" width={24} height={24} className={styles.arrowRight} />
              </Link>
            </div>
            <div className={styles.testimonialCard}>
              <button className={styles.arrowBtn} aria-label="Previous">
                <img src={imgVector} alt="" width={24} height={24} />
              </button>
              <div className={styles.testimonialContent}>
                <p className={styles.quoteText}>
                  &ldquo;Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri
                  also taught how to plan things, implement the learnings, and sustain a new lifestyle.&rdquo;
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.avatarWrap}>
                    <img src={imgAvatar} alt="Krutika Talwadel" className={styles.avatarImg} />
                  </div>
                  <div>
                    <p className={styles.authorName}>Krutika Talwadel</p>
                    <p className={styles.authorRole}>Supply Chain Professional</p>
                  </div>
                </div>
              </div>
              <button className={styles.arrowBtn} aria-label="Next">
                <img src={imgVector} alt="" width={24} height={24} className={styles.arrowRight} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
