import Link from "next/link";
import styles from "./home.module.css";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = { title: "Dr. Gauri Rokkam – Holistic Health" };

export default function HomePage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.heroGradient}></div>
      <div className={styles.pageContent}>
        <div className={styles.contentSections}>

          {/* HERO */}
          <FadeIn as="section" className={styles.hero}>
            <img className={styles.heroDecorLeft} src="/images/subtract.png" alt="" />
            <img className={styles.heroDecorRight} src="/images/subtract.png" alt="" />
            <div className={styles.heroInner}>
              <img className={styles.heroDeco} src="/images/subtract.png" alt="" />
              <div className={styles.heroText}>
                <h1>Your Body Already knows<br />how to Heal</h1>
                <p>Disease develops when food, lifestyle, and thoughts lose balance. Restore harmony through whole-food nutrition and ancient Indian wisdom.</p>
              </div>
              <a href="#" className={styles.btnTerracotta}>Work with Dr. Rokkam</a>
            </div>
          </FadeIn>

          {/* HEALING QUOTE */}
          <FadeIn as="section" className={styles.healingQuote}>
            <div className={styles.portrait}>
              <img src="/images/true-healing-diagram.png" alt="True Healing" />
            </div>
            <p>True healing happens when food,<br />lifestyle &amp; mind work together</p>
          </FadeIn>

          {/* BIO */}
          <FadeIn as="section" className={styles.bioSection}>
            <div className={styles.bioText}>
              <h2>The guide to your healing journey</h2>
              <p className={styles.labelSmallCaps}>Dr. Gauri Rokkam</p>
              <p className={styles.bioBody}>I work closely with individuals to help them understand the root cause of illness and gently transform daily habits.</p>
              <div className={styles.avatarsRow}>
                <div className={styles.avatarCircle}><img src="/images/avatar.png" alt="" /></div>
                <div className={styles.avatarCircle}><img src="/images/avatar.png" alt="" /></div>
                <div className={styles.avatarCircle}><img src="/images/avatar.png" alt="" /></div>
              </div>
              <p className={styles.bioBody}>Like a gardener preparing the soil, my role is to create the right conditions for health to grow.</p>
              <div className={styles.bioCta}>
                <Link href="/journey" className={styles.btnTerracotta}>My Journey</Link>
                <button className={styles.btnOutlineLg}>My Credentials</button>
              </div>
            </div>
            <div className={styles.bioImage}>
              <img src="/images/dr-gauri-portrait.png" alt="Dr. Gauri Rokkam" />
            </div>
          </FadeIn>

          {/* SERVICES */}
          <FadeIn as="section" className={styles.servicesSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps}>WAYS YOU CAN BEGIN</span>
              <Link href="/services" className={styles.linkBtn}>
                View All Services
                <img src="/images/icons/arrow-right.svg" alt="→" />
              </Link>
            </div>
            <div className={styles.cardsStack}>
              <div className={styles.cardsRow}>
                <Link href="/services" className={`${styles.serviceCard} ${styles.cardGreenTeal}`}>
                  <div className={styles.cardTop}><span className={styles.emoji}>☘️</span><p className={styles.cardTitle}>Heal Thy Self<br />Program</p></div>
                  <p className={styles.cardDesc}>Work with Dr. Gauri over 5–6 weeks to shift deeply ingrained habits and restore health naturally.</p>
                </Link>
                <Link href="/services" className={`${styles.serviceCard} ${styles.cardGreenSand}`}>
                  <div className={styles.cardTop}><span className={styles.emoji}>📖️</span><p className={styles.cardTitle}>Self-Paced<br />E-Course</p></div>
                  <p className={styles.cardDesc}>A 25-hour structured course that teaches the foundations of Whole Food Plant-Based healing.</p>
                </Link>
                <div className={`${styles.serviceCard} ${styles.cardGreenRose}`}>
                  <div className={styles.cardTop}><span className={styles.emoji}>🍛</span><p className={styles.cardTitle}>Group<br />Coaching Classes</p></div>
                  <p className={styles.cardDesc}>Hands-on workshops on WFPB cooking and holistic health practices.</p>
                </div>
              </div>
              <div className={styles.bookCard}>
                <div className={styles.bookCardText}>
                  <p className={styles.bookCardTitle}>📕 Read my new Book</p>
                  <p className={styles.bookCardDesc}>Helps you make sense of your health — why things go wrong, and what your body actually needs to heal.</p>
                </div>
                <div className={styles.bookCardImg}>
                  <img src="/images/book-cover.png" alt="Book cover" />
                </div>
              </div>
            </div>
            <Link href="/services" className={`${styles.linkBtn} ${styles.servicesViewAll}`}>View All Services</Link>
          </FadeIn>

          {/* TESTIMONIALS */}
          <FadeIn as="section" className={styles.testimonialSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps} style={{ color: "var(--turmeric700)" }}>WHAT MY CLIENTS HAVE TO SAY</span>
              <Link href="/stories" className={styles.linkBtn}>
                Read More Stories
                <img src="/images/icons/arrow-right.svg" alt="→" />
              </Link>
            </div>
            <div className={styles.testimonialBox}>
              <button className={styles.testimonialArrow}><img src="/images/icons/arrow-left.svg" alt="←" /></button>
              <div className={styles.testimonialContent}>
                <blockquote>"Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle."</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}><img src="/images/avatar.png" alt="Krutika" /></div>
                  <div>
                    <p className={styles.testimonialName}>Krutika Talwadel</p>
                    <p className={styles.testimonialRole}>Supply Chain Professional</p>
                  </div>
                </div>
              </div>
              <button className={`${styles.testimonialArrow} ${styles.testimonialArrowNext}`}><img src="/images/icons/arrow-right.svg" alt="→" /></button>
            </div>
            <Link href="/stories" className={`${styles.linkBtn} ${styles.testimonialLinkCenter}`}>View All Stories</Link>
          </FadeIn>

          {/* BLOG */}
          <FadeIn as="section" className={styles.blogSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps} style={{ color: "var(--turmeric700)" }}>MY WRITING</span>
              <a href="#" className={styles.linkBtn}>Read More Blogs <img src="/images/icons/arrow-right.svg" alt="→" /></a>
            </div>
            <div className={styles.blogCardsRow}>
              {[
                { img: "/images/blog-protein.png", title: "Different Health Practices", by: "Byline here", body: "Let's begin with the Food Our food should be wholesome and plant-based to impart health. Why? Unrefined or least refined plant foods...." },
                { img: "/images/blog-protein.png", title: "Protein", by: "Byline here", body: "Protein is an essential nutrient with vital functions; without it, life simply cannot thrive. Its main functions are to support growth ......" },
                { img: "/images/blog-coconut.png", title: "Coconut Was Innocent", by: "My Journey from Doubt to Discovery", body: "Protein is an essential nutrient with vital functions; without it, life simply cannot thrive. Its main functions are to support growth ......" },
              ].map((c) => (
                <div key={c.title} className={styles.blogCard}>
                  <div className={styles.blogCardImg}><img src={c.img} alt={c.title} /></div>
                  <div className={styles.blogCardMeta}>
                    <p className={styles.blogCardTitle}>{c.title}</p>
                    <p className={styles.blogCardByline}>{c.by}</p>
                  </div>
                  <p className={styles.blogCardBody}>{c.body}</p>
                  <p className={styles.blogReadMore}>Read More</p>
                </div>
              ))}
            </div>
            <a href="#" className={`${styles.linkBtn} ${styles.blogViewAll}`}>Read More Blogs</a>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
