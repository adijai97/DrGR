import styles from "./services.module.css";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = { title: "My Services – Dr. Gauri Rokkam" };

type Card = {
  href: string;
  title: string;
  grad: string;
  accent: string;
  cta: string;
  desc: string;
  stats: string[];
  size: "wide" | "narrow" | "equal";
  height: "h300" | "h170";
  hasDecor?: "both" | "left";
};

const ROW_1: Card[] = [
  {
    href: "/services/heal-thy-self",
    title: "☘️ Heal Thy Self Program",
    grad: "gradTeal",
    accent: "#bfe7ad",
    cta: "Enroll Now",
    desc: "Work with Dr. Gauri over 5–6 weeks to shift deeply ingrained habits and restore health naturally.",
    stats: ["~ 12 modules", "~ 500+ students", "~ Certificate included"],
    size: "wide",
    height: "h300",
    hasDecor: "both",
  },
  {
    href: "/services/e-course",
    title: "📚 E-Course",
    grad: "gradSand",
    accent: "#f1d9b8",
    cta: "Enroll Now",
    desc: "Self-paced, structured learning to understand health deeply.",
    stats: ["~ 12 modules", "~ Learn at your pace"],
    size: "narrow",
    height: "h300",
    hasDecor: "left",
  },
];

const ROW_2: Card[] = [
  {
    href: "/services/group-coaching",
    title: "🪔 Group Coaching",
    grad: "gradYellow",
    accent: "#efef9b",
    cta: "Enroll Now",
    desc: "Learn together, practice together, stay accountable.",
    stats: ["~ Live guidance", "~ Habit tracking"],
    size: "equal",
    height: "h300",
    hasDecor: "left",
  },
  {
    href: "/services/workshop",
    title: "🥣 Workshop",
    grad: "gradRose",
    accent: "#f1b8c2",
    cta: "Enroll Now",
    desc: "Hands-on clarity in food, cooking, and daily practice.",
    stats: ["~ In-person", "~ Practical focus"],
    size: "equal",
    height: "h300",
    hasDecor: "left",
  },
  {
    href: "/services/book",
    title: "📖 Book",
    grad: "gradPurple",
    accent: "#d6b8f1",
    cta: "Buy Now",
    desc: "A simple, practical guide to build lifelong wellness.",
    stats: ["~ Read & apply", "~ No overwhelm"],
    size: "equal",
    height: "h300",
    hasDecor: "left",
  },
];

const ROW_3: Card[] = [
  {
    href: "/services/apprenticeship",
    title: "👁️ Apprenticeship",
    grad: "gradMint",
    accent: "#b8f1d0",
    cta: "Apply Now",
    desc: "Work alongside me to learn my approach to holistic nutrition in depth.",
    stats: ["~ 6 months", "~ 1:1 mentorship", "~ Small cohort"],
    size: "wide",
    height: "h170",
  },
  {
    href: "/services/speak",
    title: "🎤 Invite me to Speak",
    grad: "gradGold",
    accent: "#ede7b8",
    cta: "Send Request",
    desc: "Invite me to speak at your organization, conference, or community event.",
    stats: ["~ Keynote", "~ Workshops", "~ Corporate wellness"],
    size: "narrow",
    height: "h170",
  },
];

function ServiceCard({ card }: { card: Card }) {
  const isCompact = card.height === "h170";
  return (
    <a
      href={card.href}
      className={`${styles.svcCard} ${styles[card.height]} ${styles[card.size]} ${styles[card.grad]}`}
      style={{ ["--accent" as string]: card.accent }}
    >
      <div className={styles.cardHeader}>
        <p className={styles.cardTitle}>{card.title}</p>
        <div className={styles.cardCta}>
          <span className={styles.cardCtaLabel}>{card.cta}</span>
          <img src="/images/icons/arrow-up-right.svg" alt="→" className={styles.cardCtaArrowHover} />
          <img src="/images/icons/arrow-right.svg" alt="→" className={styles.cardCtaArrowDefault} />
        </div>
      </div>

      {!isCompact && (
        <div className={styles.hoverBody}>
          <p className={styles.hoverDesc}>{card.desc}</p>
          <p className={styles.hoverStats}>
            {card.stats.map((s, i) => (
              <span key={s}>
                {s}
                {i < card.stats.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      )}

      {isCompact && (
        <p className={styles.hoverDescCompact}>{card.desc}</p>
      )}

      {card.hasDecor && (
        <>
          <img className={styles.cardDecorL} src="/images/subtract.png" alt="" />
          {card.hasDecor === "both" && (
            <img className={styles.cardDecorR} src="/images/subtract.png" alt="" />
          )}
        </>
      )}
    </a>
  );
}

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
            <FadeIn className={styles.cardsRow}>
              {ROW_1.map((c) => <ServiceCard key={c.href} card={c} />)}
            </FadeIn>

            <FadeIn className={styles.cardsRow} delay={0.1}>
              {ROW_2.map((c) => <ServiceCard key={c.href} card={c} />)}
            </FadeIn>

            <FadeIn className={`${styles.cardsRow} ${styles.desktopOnly}`} delay={0.2}>
              {ROW_3.map((c) => <ServiceCard key={c.href} card={c} />)}
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
