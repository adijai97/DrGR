import Link from "next/link";
import styles from "./apprenticeship.module.css";

export const metadata = { title: "The Apprenticeship – Dr. Gauri Rokkam" };

const imgSubtract  = "/images/subtract.png";
const imgArrowLeft = "/images/icons/arrow-left.svg";

const HOW_IT_WORKS = [
  "20-hour observer-based internship",
  "Attend real online consultations",
  "Learn how to interpret cases and guide clients",
  "Exposure to a wide range of health conditions",
];

const WHO_ITS_FOR = [
  "Health professionals (yoga, physiotherapy, doctors, nutritionists, etc.)",
  "Those who want to work with clients or deepen their understanding",
  "Anyone looking to move from knowledge to real-world application",
];

export default function ApprenticeshipPage() {
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
            <h1 className={styles.pageTitle}>The Apprenticeship</h1>
            <p className={styles.pageSubtitle}>Clinical Observer Programme</p>
            <div className={styles.tags}>
              <span className={styles.tag}>20+ hours</span>
              <span className={styles.tag}>Advanced</span>
            </div>
          </div>

          {/* ── Two-col: description + image ── */}
          <div className={styles.twoCol}>
            <div className={styles.descCol}>
              <div className={styles.descTextGroup}>
                <h2 className={styles.descTitle}>Observe. Understand. Apply.</h2>
                <p className={styles.descBody}>
                  This apprenticeship is designed for those who want to go beyond theory
                  and understand how real consultations work.
                </p>
                <p className={styles.descBody}>
                  You will observe live clinical sessions, gaining insight into how cases
                  are understood, decisions are made, and guidance is given.
                </p>
              </div>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                Join Whatsapp Channel
              </a>
            </div>
            <div className={styles.imageCol}>
              <img src={imgSubtract} alt="" className={styles.subtractImg} />
            </div>
          </div>

          {/* ── Green banner ── */}
          <div className={styles.greenBanner}>
            <p>See the principles in practice across different individuals, conditions, and contexts.</p>
          </div>

          {/* ── Who Is This For ── */}
          <div className={styles.whoSection}>
            <p className={styles.sectionLabel}>WHO IS THIS FOR?</p>
            <ul className={styles.whoList}>
              {WHO_ITS_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ── How It Works 2×2 grid ── */}
          <div className={styles.howSection}>
            <p className={styles.sectionLabel}>HOW IT WORKS</p>
            <div className={styles.cardGrid}>
              {HOW_IT_WORKS.map((item) => (
                <div key={item} className={styles.card}>
                  <p className={styles.cardTitle}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Before You Apply ── */}
          <div className={styles.beforeSection}>
            <p className={styles.sectionLabel}>BEFORE YOU APPLY!</p>
            <p className={styles.beforeBody}>
              This is an advanced program. You must complete the main course before
              joining the apprenticeship.
            </p>
          </div>

          {/* ── Closing CTA banner ── */}
          <div className={styles.ctaBanner}>
            <p className={styles.ctaBannerText}>Interested in going deeper?</p>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Join Whatsapp Channel
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
