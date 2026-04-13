import Link from "next/link";
import styles from "./journey.module.css";

export const metadata = { title: "My Journey – Dr. Gauri Rokkam" };

export default function JourneyPage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.journeyGradient}></div>
      <div className={styles.pageContent}>
        <div className={styles.inner}>

          {/* SECTION 1 — BIO HERO */}
          <section className={styles.bioHero}>
            <div className={styles.bioHeroLeft}>
              <h1 className={styles.bioHeroHeading}>&ldquo;My journey didn&rsquo;t begin as a profession, it began at home.&rdquo;</h1>
              <div className={styles.storyItems}>
                {[
                  "My father was a naturopath, rooted in yoga philosophy. I grew up around natural healing long before it became a \"trend\".",
                  "After which, I pursued formal education in nutrition. You can view my certifications here.",
                  "But the more I learned, the more I felt something was missing...",
                ].map((text, i) => (
                  <div key={i} className={styles.storyItem}>
                    <div className={styles.storyAvatar}><img src="https://www.figma.com/api/mcp/asset/c17521d5-55d8-4a3c-be60-2bc9c62f8edd" alt="" /></div>
                    <p className={styles.storyText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.bioHeroRight}>
              <img src="https://www.figma.com/api/mcp/asset/4b959380-368a-4abc-9a0e-2f6975fdd015" alt="Dr. Gauri Rokkam" />
            </div>
          </section>

          {/* SECTION 2 — HARMONY */}
          <section className={styles.harmonyBox}>
            <div className={styles.harmonyLeft}>
              <p className={styles.harmonyText1}>&ldquo;Because the human body doesn&rsquo;t work in isolation.&rdquo;</p>
              <br /><br />
              <p className={styles.harmonyText2}>&ldquo;It works in harmony&rdquo;</p>
            </div>
            <div className={styles.harmonyRight}>
              <p>I began questioning a system that treated the body in fragments focusing on organs, symptoms, and isolated nutrients.</p>
              <br />
              <p>This curiosity turned into a lifelong pursuit, to understand health not in parts, but as a whole.</p>
            </div>
          </section>

          {/* SECTION 3 — PHILOSOPHY */}
          <section className={styles.philosophySection}>
            <div className={styles.philosophyHeader}>
              <span className={styles.sectionLabel}>MY PHILOSOPHY</span>
              <p className={styles.philosophySubheading}>&ldquo;Over the years, my work evolved into a simple but powerful framework&rdquo;</p>
            </div>
            <div className={styles.philosophyContent}>
              <div className={styles.philosophyImage}>
                <img src="https://www.figma.com/api/mcp/asset/eb7ea2e8-8ad9-406c-98b4-38e108f46b3b" alt="Philosophy" />
              </div>
              <p className={styles.philosophyBody}>&ldquo;True healing happens only when all three are in alignment. Most people don&rsquo;t struggle because they don&rsquo;t know what is healthy. They struggle because the mind resists change.&rdquo;</p>
            </div>
          </section>

          {/* SECTION 4 — APPROACH */}
          <section className={styles.approachBox}>
            <p className={styles.approachLabel}>MY APPROACH</p>
            <div className={styles.approachCols}>
              <div className={styles.approachLeft}>
                <p>In the early years, I believed healing required strict discipline and fast results.</p>
                <br />
                <p>But experience taught me something far more important.</p>
              </div>
              <div className={styles.approachRight}>
                <p className={styles.approachQuote}>&ldquo;Healing should not feel forced.&rdquo;</p>
                <p className={styles.approachBody}>&ldquo;Today, I meet each person exactly where they are—guiding them step by step, at a pace they can sustain.&rdquo;</p>
              </div>
            </div>
          </section>

          {/* SECTION 5 — GARDENER */}
          <section className={styles.gardenerSection}>
            <h2 className={styles.gardenerHeading}>&ldquo;I often describe my role like that of a gardener.&rdquo;</h2>
            <div className={styles.gardenerGrid}>
              {[
                ["First, we clear what is harming the body.", "Then, we introduce simple, natural practices."],
                ["And over time, we nurture them—with the right food, lifestyle, and awareness", "Because real change is not created through pressure."],
              ].map((row, ri) => (
                <div key={ri} className={styles.gardenerRow}>
                  {row.map((text) => (
                    <div key={text} className={styles.gardenerItem}>
                      <div className={styles.gardenerAvatar}><img src="https://www.figma.com/api/mcp/asset/c17521d5-55d8-4a3c-be60-2bc9c62f8edd" alt="" /></div>
                      <p className={styles.gardenerText}>{text}</p>
                    </div>
                  ))}
                </div>
              ))}
              <div className={styles.gardenerRow}>
                <div className={`${styles.gardenerItem} ${styles.single}`}>
                  <div className={styles.gardenerAvatar}><img src="https://www.figma.com/api/mcp/asset/c17521d5-55d8-4a3c-be60-2bc9c62f8edd" alt="" /></div>
                  <p className={styles.gardenerText}>It grows when it is understood, supported, and sustained.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 — TESTIMONIALS */}
          <section className={styles.testimonialSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeaderLabel}>TESTIMONIALS about Dr. Gauri</span>
              <Link href="/stories" className={styles.linkBtn}>Read More Testimonials →</Link>
            </div>
            <div className={styles.testimonialBox}>
              <button className={styles.testimonialArrow}><img src="https://www.figma.com/api/mcp/asset/92183185-30c0-45ae-8923-a9d645f06df6" alt="←" /></button>
              <div className={styles.testimonialContent}>
                <blockquote>&ldquo;Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle.&rdquo;</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}><img src="https://www.figma.com/api/mcp/asset/3510d2e3-67d2-474c-8245-464d1945d7d5" alt="Krutika" /></div>
                  <div>
                    <p className={styles.testimonialName}>Krutika Talwadel</p>
                    <p className={styles.testimonialRole}>Supply Chain Professional</p>
                  </div>
                </div>
              </div>
              <button className={`${styles.testimonialArrow} ${styles.testimonialArrowNext}`}><img src="https://www.figma.com/api/mcp/asset/92183185-30c0-45ae-8923-a9d645f06df6" alt="→" /></button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
