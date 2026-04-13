import Link from "next/link";
import styles from "./book.module.css";

export const metadata = { title: "Craft Your Wellness – Dr. Gauri Rokkam" };

const imgSubtract  = "https://www.figma.com/api/mcp/asset/2230cb72-cf10-4d9c-b7ad-f2809b250886";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/c056a754-4096-48be-ac0b-962e3f000b41";

const WHAT_IT_COVERS = [
  "The foundations of true health — beyond symptoms and quick fixes",
  "How food, lifestyle, and thoughts shape your health",
  "Why most modern health advice feels confusing",
  "A practical approach to building habits that last",
];

const WHO_ITS_FOR = [
  "You want to understand the basics before taking action",
  "You prefer learning independently",
  "You're looking for a simple, practical starting point",
];

export default function BookPage() {
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
            <h1 className={styles.pageTitle}>Craft Your Wellness</h1>
            <p className={styles.pageSubtitle}>Book</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Self Guided</span>
              <span className={styles.tag}>Beginner Friendly</span>
            </div>
          </div>

          {/* ── Two-col: description + image ── */}
          <div className={styles.twoCol}>
            <div className={styles.descCol}>
              <div className={styles.descTextGroup}>
                <h2 className={styles.descTitle}>Start simple. Build clarity.</h2>
                <p className={styles.descBody}>
                  This book helps you make sense of your health — why things go wrong,
                  and what your body actually needs to heal.
                </p>
                <p className={styles.descBody}>
                  A starting point for those who want to take charge, at their own pace.
                </p>
              </div>
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buyBtn}
              >
                Buy on Amazon
              </a>
            </div>
            <div className={styles.imageCol}>
              <img src={imgSubtract} alt="" className={styles.subtractImg} />
            </div>
          </div>

          {/* ── Purple banner ── */}
          <div className={styles.purpleBanner}>
            <p>
              Helps you understand how your body works, why illness develops, and how
              small, consistent changes can restore balance.
            </p>
          </div>

          {/* ── What It Covers ── */}
          <div className={styles.coversSection}>
            <p className={styles.sectionLabel}>WHAT IT COVERS</p>
            <div className={styles.cardGrid}>
              {WHAT_IT_COVERS.map((item) => (
                <div key={item} className={styles.card}>
                  <p className={styles.cardTitle}>{item}</p>
                </div>
              ))}
            </div>
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

          {/* ── Closing banner ── */}
          <div className={styles.purpleBanner}>
            <p>
              Healing doesn&apos;t come from doing more. It comes from understanding better
              and doing the right things consistently.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
