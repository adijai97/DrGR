import styles from "./services.module.css";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = { title: "My Services – Dr. Gauri Rokkam" };

export default function ServicesPage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.servicesGradient}></div>
      <div className={styles.pageContent}>
        <div className={styles.inner}>
          <FadeIn className={styles.servicesHero}>
            <h1>Ways to Begin Your <span className={styles.wordHealing}>Healing</span> Journey</h1>
            <p>Whether you want to learn on your own, join a guided program, or work with me directly —<br />there are many ways to begin. Choose what fits your stage.</p>
          </FadeIn>

          <div className={styles.cardsGrid}>
            {/* Row 1 */}
            <FadeIn className={styles.cardsRow}>
              <a href="/services/heal-thy-self" className={`${styles.svcCard} ${styles.h300} ${styles.wide} ${styles.gradTeal}`}>
                <div className={styles.cardHeader}>
                  <p className={styles.cardTitle}>☘️ Heal Thy Self Program</p>
                  <div className={styles.cardArrow}><img src="/images/icons/arrow-right.svg" alt="→" /></div>
                </div>
                <img className={styles.cardDecorL} src="/images/subtract.png" alt="" />
                <img className={styles.cardDecorR} src="/images/subtract.png" alt="" />
              </a>
              <a href="/services/e-course" className={`${styles.svcCard} ${styles.h300} ${styles.narrow} ${styles.gradSand}`}>
                <div className={styles.cardHeader}>
                  <p className={styles.cardTitle}>📚 E-Course</p>
                  <div className={styles.cardArrow}><img src="/images/icons/arrow-right.svg" alt="→" /></div>
                </div>
                <img className={styles.cardDecorL} src="/images/subtract.png" alt="" />
              </a>
            </FadeIn>

            {/* Row 2 */}
            <FadeIn className={styles.cardsRow} delay={0.1}>
              {[
                { emoji: "🪔", title: "Group Coaching", grad: styles.gradYellow, href: "/services/group-coaching" },
                { emoji: "🥣", title: "Workshop",       grad: styles.gradRose,   href: "/services/workshop" },
                { emoji: "📖", title: "Book",           grad: styles.gradPurple, href: "/services/book" },
              ].map((c) => (
                <a key={c.title} href={c.href} className={`${styles.svcCard} ${styles.h300} ${styles.equal} ${c.grad}`}>
                  <div className={styles.cardHeader}>
                    <p className={styles.cardTitle}>{c.emoji} {c.title}</p>
                    <div className={styles.cardArrow}><img src="/images/icons/arrow-right.svg" alt="→" /></div>
                  </div>
                  <img className={styles.cardDecorL} src="/images/subtract.png" alt="" />
                </a>
              ))}
            </FadeIn>

            {/* Row 3 — desktop only */}
            <FadeIn className={`${styles.cardsRow} ${styles.desktopOnly}`} delay={0.2}>
              <a href="/services/apprenticeship" className={`${styles.svcCard} ${styles.h170} ${styles.wide} ${styles.gradMint}`}>
                <div className={styles.cardHeader}>
                  <p className={styles.cardTitle}>👁️ Apprenticeship</p>
                  <div className={styles.cardArrow}><img src="/images/icons/arrow-right.svg" alt="→" /></div>
                </div>
              </a>
              <a href="/services/speak" className={`${styles.svcCard} ${styles.h170} ${styles.narrow} ${styles.gradGold}`}>
                <div className={`${styles.cardHeader} ${styles.cardHeaderTop}`}>
                  <p className={styles.cardTitle}>🎤 Invite me<br />to Speak</p>
                  <div className={styles.cardArrow}><img src="/images/icons/arrow-right.svg" alt="→" /></div>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
