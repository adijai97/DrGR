"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";
import styles from "./results.module.css";

const imgArrowLeft   = "/images/icons/arrow-left.svg";
const imgRating      = "/images/icons/stars.svg";
const imgAvatar      = "/images/avatar.png";
const imgBlog1       = "/images/blog-protein.png";
const imgBlog2       = "/images/blog-coconut.png";
const imgSubtract    = "/images/subtract.png";
const imgArrowUpRight = "/images/icons/arrow-up-right.svg";
const imgSend        = "/images/icons/send.svg";
const imgX           = "/images/icons/close.svg";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [refineVal, setRefineVal] = useState("");
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  function handleRefine() {
    if (!refineVal.trim()) return;
    router.push(`/stories/results?q=${encodeURIComponent(refineVal.trim())}`);
    setRefineVal("");
  }

  return (
    <div className={styles.pageBg}>
      <div className={styles.pageGradient} />
      <div className={styles.pageContent}>
        <div className={styles.inner}>

          {/* ── Hero ── */}
          <div className={styles.hero}>
            <Link href="/stories" className={styles.goBack}>
              <img src={imgArrowLeft} alt="" width={24} height={24} />
              <span>Go Back</span>
            </Link>
            <h1 className={styles.pageTitle}>Based on what you shared</h1>
          </div>

          {/* ── People Like You ── */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>PEOPLE LIKE YOU</p>
            <div className={styles.twoColCards}>
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </section>

          {/* ── What Helped Them ── */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>WHAT HELPED THEM</p>
            <div className={styles.twoColCards}>
              <BlogCard
                img={imgBlog1}
                title="Different Health Practices"
                byline="Dr. Gauri Rokkam"
                excerpt="Let's begin with the Food Our food should be wholesome and plant-based to impart health. Why? Unrefined or least refined plant foods...."
                tags={["Lifestyle Transformation", "Disease Reversal"]}
                daysAgo="10 days ago"
              />
              <BlogCard
                img={imgBlog2}
                title="Coconut Was Innocent"
                byline="Dr. Gauri Rokkam"
                excerpt="Protein is an essential nutrient with vital functions; without it, life simply cannot thrive. Its main functions are to support growth ......"
                tags={["Lifestyle Transformation", "Disease Reversal"]}
                daysAgo="10 days ago"
              />
            </div>
          </section>

          {/* ── Where to Start ── */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>WHERE TO START</p>
            <Link href="/services/heal-thy-self" className={styles.serviceCard}>
              <div className={styles.serviceCardTop}>
                <span className={styles.serviceCardTitle}>☘️ Heal Thy Self Program</span>
                <img src={imgArrowUpRight} alt="→" width={24} height={24} />
              </div>
              <img src={imgSubtract} alt="" className={styles.subtractLeft} />
              <img src={imgSubtract} alt="" className={styles.subtractRight} />
            </Link>
          </section>

        </div>
      </div>

      {/* ── Floating refine bubble ── */}
      {!bubbleDismissed && query && (
        <div className={styles.refineBubble}>
          <div className={styles.refineBubbleInner}>
            <div className={styles.refineBubbleTop}>
              <div className={styles.refineBubbleQuery}>
                <img src={imgAvatar} alt="" className={styles.refineAvatar} />
                <span className={styles.refineQueryText}>You mentioned {query}</span>
              </div>
              <button className={styles.refineDismiss} onClick={() => setBubbleDismissed(true)} aria-label="Dismiss">
                <img src={imgX} alt="×" width={16} height={16} />
              </button>
            </div>
            <div className={styles.refineInputRow}>
              <input
                type="text"
                className={styles.refineInput}
                value={refineVal}
                onChange={(e) => setRefineVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleRefine()}
                placeholder="Would you want to refine your symptoms?"
              />
              <button className={styles.refineSendBtn} onClick={handleRefine} aria-label="Send">
                <img src={imgSend} alt="Send" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense>
      <ResultsContent />
    </Suspense>
  );
}

/* ── Sub-components ─────────────────────────────────────────── */

function TestimonialCard() {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.cardTopRow}>
        <div className={styles.cardAuthor}>
          <div className={styles.authorAvatar}>
            <img src={imgAvatar} alt="Prachi" />
          </div>
          <span className={styles.authorName}>Prachi</span>
          <img src={imgRating} alt="5 stars" className={styles.ratingImg} />
        </div>
        <div className={styles.badgeRow}>
          <span className={`${styles.badge} ${styles.badgeSand}`}>E-Course</span>
          <span className={`${styles.badge} ${styles.badgeRose}`}>Hands On Workshop</span>
        </div>
      </div>
      <p className={styles.cardTitle}>Overwhelming change in my body and diet</p>
      <p className={styles.cardBody}>Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle.</p>
      <div className={styles.tagRow}>
        <span className={styles.tag}>Lifestyle Transformation</span>
        <span className={styles.tag}>Disease Reversal</span>
      </div>
    </div>
  );
}

function BlogCard({ img, title, byline, excerpt, tags, daysAgo }: {
  img: string; title: string; byline: string; excerpt: string; tags: string[]; daysAgo: string;
}) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogThumb}>
        <img src={img} alt={title} />
        <span className={styles.blogDaysAgo}>{daysAgo}</span>
      </div>
      <div className={styles.blogCardBody}>
        <p className={styles.blogTitle}>{title}</p>
        <p className={styles.blogByline}>{byline}</p>
        <p className={styles.blogExcerpt}>{excerpt}</p>
        <div className={styles.tagRow}>
          {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}
