import Link from "next/link";
import styles from "./workshop.module.css";

export const metadata = { title: "In-Person Workshop – Dr. Gauri Rokkam" };

const imgSubtract  = "https://www.figma.com/api/mcp/asset/ed6b2a02-efd1-46e7-bfcc-f535d28aa852";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/74e3d868-f335-4cd3-abd9-df5e485c8a08";

const HOW_IT_WORKS = [
  "Conducted in small, in-person groups",
  "Focus on cooking, discussion, and practical understanding",
  "Designed to reinforce what you've learned — or help you get started",
];

export default function WorkshopPage() {
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
            <h1 className={styles.pageTitle}>Learn Together, In Person</h1>
            <p className={styles.pageSubtitle}>In-Person Workshop</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Hands-On</span>
              <span className={styles.tag}>Small Group</span>
            </div>
          </div>

          {/* ── Two-col: description + image ── */}
          <div className={styles.twoCol}>
            <div className={styles.descCol}>
              <div className={styles.descTextGroup}>
                <h2 className={styles.descTitle}>Learn by doing, not just listening.</h2>
                <p className={styles.descBody}>
                  These workshops are designed to give you clarity through experience — not just theory.
                </p>
                <p className={styles.descBody}>
                  You&apos;ll spend time understanding and preparing whole food plant-based meals,
                  while revisiting and applying key concepts in a practical setting.
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

          {/* ── Rose banner ── */}
          <div className={styles.roseBanner}>
            <p>A space to slow down, learn, and experience the process firsthand.</p>
          </div>

          {/* ── How It Works ── */}
          <div className={styles.howSection}>
            <p className={styles.sectionLabel}>HOW IT WORKS</p>
            <div className={styles.cardStack}>
              {HOW_IT_WORKS.map((item) => (
                <div key={item} className={styles.card}>
                  <p className={styles.cardTitle}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── When & Where ── */}
          <div className={styles.whenSection}>
            <p className={styles.sectionLabel}>WHEN &amp; WHERE?</p>
            <div className={styles.whenText}>
              <p>
                Workshops are conducted periodically at my home, and occasionally in other cities.
              </p>
              <p>
                They can also be organised for small groups or communities on request.
              </p>
              <p>
                Dates and locations are shared on the WhatsApp channel.
              </p>
            </div>
          </div>

          {/* ── Closing CTA banner ── */}
          <div className={styles.ctaBanner}>
            <p className={styles.ctaBannerText}>Stay updated on upcoming workshops</p>
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
