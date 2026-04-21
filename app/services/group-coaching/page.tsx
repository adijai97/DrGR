import Link from "next/link";
import styles from "./group-coaching.module.css";
import FadeIn from "@/components/animations/FadeIn";

const imgSubtract  = "/images/subtract.png";
const imgArrowLeft = "/images/icons/arrow-left.svg";

const HOW_IT_WORKS = [
  {
    title: "Live structured learning",
    body: "The course runs over 1 month, starting at the beginning of each cycle",
  },
  {
    title: "Group coaching & Q&A",
    body: "Ask questions, clarify doubts, and learn from others in the cohort",
  },
  {
    title: "Daily accountability",
    body: "Track your meals, habits, and progress with guidance",
  },
  {
    title: "Continuous feedback",
    body: "Get corrections and direction as you apply what you learn",
  },
];

export default function GroupCoachingPage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.heroGradient} />
      <div className={styles.pageContent}>
        <div className={styles.inner}>

          {/* ── Hero ── */}
          <FadeIn className={styles.hero}>
            <Link href="/services" className={styles.goBack}>
              <img src={imgArrowLeft} alt="" width={24} height={24} />
              <span>Go Back</span>
            </Link>
            <h1 className={styles.pageTitle}>Practice With Me</h1>
            <p className={styles.pageSubtitle}>Group Coaching</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Live + Interactive</span>
              <span className={styles.tag}>1 Month Cohort</span>
            </div>
          </FadeIn>

          {/* ── Two-col: description + image ── */}
          <FadeIn className={styles.twoCol}>
            <div className={styles.descCol}>
              <h2 className={styles.descTitle}>Build habits that actually stick.</h2>
              <p className={styles.descBody}>
                A structured, live program where you don&apos;t just learn — you apply, get feedback,
                and build habits that actually stick.
              </p>
              <p className={styles.descBody}>
                Builds on the same concepts as the self-paced course — but with live guidance
                and accountability.
              </p>
            </div>
            <div className={styles.imageCol}>
              <img src={imgSubtract} alt="" className={styles.subtractImg} />
            </div>
          </FadeIn>

          {/* ── Olive banner ── */}
          <FadeIn className={styles.oliveBanner}>
            <p>
              You learn in a group, stay accountable, and receive continuous support
              as you make changes.
            </p>
          </FadeIn>

          {/* ── How It Works ── */}
          <FadeIn className={styles.howSection}>
            <p className={styles.sectionLabel}>HOW IT WORKS</p>
            <div className={styles.cardGrid}>
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} className={styles.card}>
                  <p className={styles.cardTitle}>{item.title}</p>
                  <p className={styles.cardBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Who Is This For ── */}
          <FadeIn className={styles.whoSection}>
            <p className={styles.sectionLabel}>WHO IS THIS FOR?</p>
            <ul className={styles.whoList}>
              <li>You&apos;ve tried learning on your own but couldn&apos;t stay consistent</li>
              <li>You want guidance while building new habits</li>
              <li>You benefit from structure, accountability, and support</li>
            </ul>
          </FadeIn>

          {/* ── Closing banner ── */}
          <FadeIn className={styles.oliveBanner}>
            <p className={styles.closingQuote}>
              This is where knowledge turns into practice.
            </p>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
