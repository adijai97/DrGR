import Link from "next/link";
import styles from "./speak.module.css";

export const metadata = { title: "Invite Me to Speak – Dr. Gauri Rokkam" };

const imgSubtract  = "https://www.figma.com/api/mcp/asset/9d21f3eb-607f-49ef-bec3-834a89d2ad19";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/7dcf7d53-0497-43e9-bc26-c5851b266d1a";

const WHAT_I_ENGAGE_ON = [
  "Lifestyle diseases (diabetes, hypertension, obesity, etc.)",
  "Food and nutrition fundamentals",
  "Women's health and hormonal balance",
  "Preventive health and long-term wellness",
];

const ENGAGE_LIST = [
  ...WHAT_I_ENGAGE_ON,
  "Or a topic relevant to your community",
];

export default function SpeakPage() {
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
            <h1 className={styles.pageTitle}>Invite Me to Speak</h1>
            <p className={styles.pageSubtitle}>Talks &amp; Workshops</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Online or In-Person</span>
              <span className={styles.tag}>Custom Topics</span>
            </div>
          </div>

          {/* ── Two-col: description + image ── */}
          <div className={styles.twoCol}>
            <div className={styles.descCol}>
              <div className={styles.descTextGroup}>
                <h2 className={styles.descTitle}>Bring clarity to your community.</h2>
                <p className={styles.descBody}>
                  I offer talks and workshops on holistic health, designed to help people
                  understand the root causes of disease and how to restore balance through
                  food, lifestyle, and mindset.
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

          {/* ── Gold banner ── */}
          <div className={styles.goldBanner}>
            <p>
              Sessions can be tailored to specific topics, audiences, or health concerns
              and are suitable for both small groups and larger communities.
            </p>
          </div>

          {/* ── What I Engage On — 2×2 card grid ── */}
          <div className={styles.engageSection}>
            <p className={styles.sectionLabel}>WHAT I ENGAGE ON</p>
            <div className={styles.cardGrid}>
              {WHAT_I_ENGAGE_ON.map((item) => (
                <div key={item} className={styles.card}>
                  <p className={styles.cardTitle}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── What I Engage On — bullet list ── */}
          <div className={styles.engageListSection}>
            <p className={styles.sectionLabel}>WHAT I ENGAGE ON</p>
            <ul className={styles.engageList}>
              {ENGAGE_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ── Closing CTA banner ── */}
          <div className={styles.ctaBanner}>
            <p className={styles.ctaBannerText}>Interested in organising a session?</p>
            <a
              href="mailto:drgaurirokkam@gmail.com"
              className={styles.getInTouchBtn}
            >
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
