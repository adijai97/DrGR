import Link from "next/link";
import styles from "./home.module.css";

export const metadata = { title: "Dr. Gauri Rokkam – Holistic Health" };

export default function HomePage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.heroGradient}></div>
      <div className={styles.pageContent}>
        <div className={styles.contentSections}>

          {/* HERO */}
          <section className={styles.hero}>
            <img className={styles.heroDecorLeft} src="https://www.figma.com/api/mcp/asset/419fcb7a-d766-4fda-a747-69e030d92710" alt="" />
            <img className={styles.heroDecorRight} src="https://www.figma.com/api/mcp/asset/0671ba25-5f02-4a9b-9f53-7319acb0dc54" alt="" />
            <div className={styles.heroInner}>
              <img className={styles.heroDeco} src="https://www.figma.com/api/mcp/asset/65cdc665-ab52-408b-baf6-2d53ff12e890" alt="" />
              <div className={styles.heroText}>
                <h1>Your Body Already knows<br />how to Heal</h1>
                <p>Disease develops when food, lifestyle, and thoughts lose balance. Restore harmony through whole-food nutrition and ancient Indian wisdom.</p>
              </div>
              <a href="#" className={styles.btnTerracotta}>Work with Dr. Rokkam</a>
            </div>
          </section>

          {/* HEALING QUOTE */}
          <section className={styles.healingQuote}>
            <div className={styles.portrait}>
              <img src="https://www.figma.com/api/mcp/asset/b661289c-a397-4307-b0d5-d6cfb3684f40" alt="Dr. Gauri Rokkam" />
            </div>
            <p>True healing happens when food,<br />lifestyle &amp; mind work together</p>
          </section>

          {/* BIO */}
          <section className={styles.bioSection}>
            <div className={styles.bioText}>
              <h2>The guide to your healing journey</h2>
              <p className={styles.labelSmallCaps}>Dr. Gauri Rokkam</p>
              <p className={styles.bioBody}>I work closely with individuals to help them understand the root cause of illness and gently transform daily habits.</p>
              <div className={styles.avatarsRow}>
                <div className={styles.avatarCircle}><img src="https://www.figma.com/api/mcp/asset/e21f86ea-0272-4a3a-8aac-ec28284a9a8f" alt="" /></div>
                <div className={styles.avatarCircle}><img src="https://www.figma.com/api/mcp/asset/e21f86ea-0272-4a3a-8aac-ec28284a9a8f" alt="" /></div>
                <div className={styles.avatarCircle}><img src="https://www.figma.com/api/mcp/asset/e21f86ea-0272-4a3a-8aac-ec28284a9a8f" alt="" /></div>
              </div>
              <p className={styles.bioBody}>Like a gardener preparing the soil, my role is to create the right conditions for health to grow.</p>
              <div className={styles.bioCta}>
                <Link href="/journey" className={styles.btnTerracotta}>My Journey</Link>
                <button className={styles.btnOutlineLg}>My Credentials</button>
              </div>
            </div>
            <div className={styles.bioImage}>
              <img src="https://www.figma.com/api/mcp/asset/3d9e0b82-4636-42ee-a752-225c0b9360d5" alt="Dr. Gauri Rokkam" />
            </div>
          </section>

          {/* SERVICES */}
          <section className={styles.servicesSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps}>WAYS YOU CAN BEGIN</span>
              <Link href="/services" className={styles.linkBtn}>
                View All Services
                <img src="https://www.figma.com/api/mcp/asset/edd2e199-6425-4b3b-9a2e-da274db6b18a" alt="→" />
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
                  <img src="https://www.figma.com/api/mcp/asset/21a9c3f2-bbb5-4a7d-85c8-030a7610cfd5" alt="Book cover" />
                </div>
              </div>
            </div>
            <Link href="/services" className={`${styles.linkBtn} ${styles.servicesViewAll}`}>View All Services</Link>
          </section>

          {/* TESTIMONIALS */}
          <section className={styles.testimonialSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps} style={{ color: "var(--turmeric700)" }}>WHAT MY CLIENTS HAVE TO SAY</span>
              <Link href="/stories" className={styles.linkBtn}>
                Read More Stories
                <img src="https://www.figma.com/api/mcp/asset/edd2e199-6425-4b3b-9a2e-da274db6b18a" alt="→" />
              </Link>
            </div>
            <div className={styles.testimonialBox}>
              <button className={styles.testimonialArrow}><img src="https://www.figma.com/api/mcp/asset/ec306493-ff75-418c-ad9b-17a7184be56f" alt="←" /></button>
              <div className={styles.testimonialContent}>
                <blockquote>"Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle."</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}><img src="https://www.figma.com/api/mcp/asset/e21f86ea-0272-4a3a-8aac-ec28284a9a8f" alt="Krutika" /></div>
                  <div>
                    <p className={styles.testimonialName}>Krutika Talwadel</p>
                    <p className={styles.testimonialRole}>Supply Chain Professional</p>
                  </div>
                </div>
              </div>
              <button className={`${styles.testimonialArrow} ${styles.testimonialArrowNext}`}><img src="https://www.figma.com/api/mcp/asset/ec306493-ff75-418c-ad9b-17a7184be56f" alt="→" /></button>
            </div>
            <Link href="/stories" className={`${styles.linkBtn} ${styles.testimonialLinkCenter}`}>View All Stories</Link>
          </section>

          {/* BLOG */}
          <section className={styles.blogSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps} style={{ color: "var(--turmeric700)" }}>MY WRITING</span>
              <a href="#" className={styles.linkBtn}>Read More Blogs <img src="https://www.figma.com/api/mcp/asset/edd2e199-6425-4b3b-9a2e-da274db6b18a" alt="→" /></a>
            </div>
            <div className={styles.blogCardsRow}>
              {[
                { id: "4c14cf7b-d066-49fb-8b12-13418b67b6c0", title: "Different Health Practices", by: "Byline here", body: "Let's begin with the Food Our food should be wholesome and plant-based to impart health. Why? Unrefined or least refined plant foods...." },
                { id: "8a84c886-4ba0-43e2-a55a-1bdef781ac76", title: "Protein", by: "Byline here", body: "Protein is an essential nutrient with vital functions; without it, life simply cannot thrive. Its main functions are to support growth ......" },
                { id: "b9464018-9352-4982-b821-8b1e8ee07c3e", title: "Coconut Was Innocent", by: "My Journey from Doubt to Discovery", body: "Protein is an essential nutrient with vital functions; without it, life simply cannot thrive. Its main functions are to support growth ......" },
              ].map((c) => (
                <div key={c.title} className={styles.blogCard}>
                  <div className={styles.blogCardImg}><img src={`https://www.figma.com/api/mcp/asset/${c.id}`} alt={c.title} /></div>
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
          </section>

        </div>
      </div>
    </div>
  );
}
