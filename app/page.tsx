import Link from "next/link";
import styles from "./home.module.css";
import FadeIn from "@/components/animations/FadeIn";
import { AuroraOverlay } from "@/components/ui/aurora-background";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CredentialsModal from "@/components/CredentialsModal";

export const metadata = { title: "Dr. Gauri Rokkam – Holistic Health" };

export default function HomePage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.heroGradient}></div>
      <div className={styles.pageContent}>
        <div className={styles.contentSections}>

          {/* HERO */}
          <FadeIn as="section" className={styles.hero}>
            <AuroraOverlay />
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
                <CredentialsModal triggerClassName={styles.btnOutlineLg} />
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
                <img src="/images/icons/arrow-readmore.svg" alt="→" />
              </Link>
            </div>
            <TestimonialCarousel />
            <Link href="/stories" className={`${styles.linkBtn} ${styles.testimonialLinkCenter}`}>View All Stories</Link>
          </FadeIn>

          {/* BLOG */}
          <FadeIn as="section" className={styles.blogSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.labelSmallCaps} style={{ color: "var(--turmeric700)" }}>MY WRITING</span>
              <a href="#" className={styles.linkBtn}>Read More Blogs <img src="/images/icons/arrow-readmore.svg" alt="→" /></a>
            </div>
            <div className={styles.blogGrid}>
              {[
                { id: 1, category: "Nutrition", title: "Why Most Diets Fail (And What to Do Instead)", excerpt: "The problem isn't willpower. It's the approach. Here's why most modern diets are designed to keep you stuck — and what lasting change actually looks like.", readTime: "6 min read", date: "Mar 2025", thumbCls: "blogThumbTeal", pillCls: "pillTeal" },
                { id: 2, category: "Gut Health", title: "The Gut-Brain Connection: What Your Digestion Is Telling You", excerpt: "Bloating, brain fog, anxiety — these often share the same root. Understanding the gut-brain axis changes how you think about healing.", readTime: "8 min read", date: "Feb 2025", thumbCls: "blogThumbSand", pillCls: "pillSand" },
                { id: 3, category: "Disease", title: "Understanding Inflammation: The Root of Most Modern Illness", excerpt: "Chronic low-grade inflammation is behind diabetes, heart disease, and autoimmune conditions. Learn what drives it and how food can reverse it.", readTime: "5 min read", date: "Feb 2025", thumbCls: "blogThumbRose", pillCls: "pillRose" },
              ].map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <div className={`${styles.blogThumb} ${styles[post.thumbCls]}`}>
                    <span className={`${styles.blogCategoryPill} ${styles[post.pillCls]}`}>{post.category}</span>
                  </div>
                  <div className={styles.blogCardBody}>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogReadTime}>{post.readTime}</span>
                      <span className={styles.blogDot} />
                      <span className={styles.blogDate}>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a href="#" className={`${styles.linkBtn} ${styles.blogViewAll}`}>Read More Blogs</a>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
