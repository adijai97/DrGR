"use client";
import { useState } from "react";
import styles from "./stories.module.css";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Nutrition",
    title: "Why Most Diets Fail (And What to Do Instead)",
    excerpt: "The problem isn't willpower. It's the approach. Here's why most modern diets are designed to keep you stuck — and what lasting change actually looks like.",
    readTime: "6 min read",
    date: "Mar 2025",
    thumbCls: "blogThumbTeal",
    pillCls: "pillTeal",
  },
  {
    id: 2,
    category: "Gut Health",
    title: "The Gut-Brain Connection: What Your Digestion Is Telling You",
    excerpt: "Bloating, brain fog, anxiety — these often share the same root. Understanding the gut-brain axis changes how you think about healing.",
    readTime: "8 min read",
    date: "Feb 2025",
    thumbCls: "blogThumbSand",
    pillCls: "pillSand",
  },
  {
    id: 3,
    category: "Disease",
    title: "Understanding Inflammation: The Root of Most Modern Illness",
    excerpt: "Chronic low-grade inflammation is behind diabetes, heart disease, and autoimmune conditions. Learn what drives it and how food can reverse it.",
    readTime: "5 min read",
    date: "Feb 2025",
    thumbCls: "blogThumbRose",
    pillCls: "pillRose",
  },
  {
    id: 4,
    category: "Nutrition",
    title: "Whole Food Plant-Based Eating: A Practical Beginner's Guide",
    excerpt: "Not a diet, but a way of living. This guide walks you through the foundations — what to eat, how to start, and why it works when nothing else has.",
    readTime: "10 min read",
    date: "Jan 2025",
    thumbCls: "blogThumbMint",
    pillCls: "pillMint",
  },
  {
    id: 5,
    category: "Lifestyle",
    title: "Why Sleep Is Your Most Powerful Healing Tool",
    excerpt: "No supplement can replace what consistent, deep sleep does for your body. Here's the science — and the simple changes that make a difference.",
    readTime: "4 min read",
    date: "Jan 2025",
    thumbCls: "blogThumbGold",
    pillCls: "pillGold",
  },
  {
    id: 6,
    category: "Women's Health",
    title: "Hormonal Balance Through Food and Daily Rhythm",
    excerpt: "Hormones don't just fluctuate randomly. They respond to what you eat, when you sleep, and how you move. Here's how to work with your body, not against it.",
    readTime: "7 min read",
    date: "Dec 2024",
    thumbCls: "blogThumbPurple",
    pillCls: "pillPurple",
  },
];

export default function StoriesPage() {
  const [tab, setTab] = useState<"testimonials" | "blogs">("testimonials");

  return (
    <div className={styles.pageBg}>
      <div className={styles.storiesGradient}></div>
      <div className={styles.pageContent}>
        <div className={styles.inner}>

          {/* Hero */}
          <section className={styles.storiesHero}>
            <h1 className={styles.storiesTitle}>Stories &amp; Wisdom</h1>
            <div className={styles.tabBarWrap}>
              <div className={styles.tabBar}>
                <div className={`${styles.tabItem} ${tab === "testimonials" ? styles.active : ""}`} onClick={() => setTab("testimonials")}>Testimonials</div>
                <div className={`${styles.tabItem} ${tab === "blogs" ? styles.active : ""}`} onClick={() => setTab("blogs")}>Blogs</div>
              </div>
            </div>
            <p className={styles.storiesSubtitle}>Real people. Real struggles. Real healing.</p>
            <div className={styles.filtersBar}>
              <div className={styles.searchWrap}>
                <img className={styles.searchIcon} src="https://www.figma.com/api/mcp/asset/4e698581-13f9-4dfd-aa96-92b3c1e9fa6a" alt="Search" />
                <input type="text" className={styles.searchInput} placeholder="Search" />
              </div>
              <div className={styles.filterDropdowns}>
                {tab === "testimonials" ? (
                  <>
                    <button className={styles.filterBtn}><span className={styles.label}>Issue: </span><span className={styles.value}>All</span><img src="https://www.figma.com/api/mcp/asset/d35c1c3b-7eb5-478b-b5cf-0e877f9b08eb" alt="▾" /></button>
                    <button className={styles.filterBtn}><span className={styles.label}>Programme: </span><span className={styles.value}>All</span><img src="https://www.figma.com/api/mcp/asset/d35c1c3b-7eb5-478b-b5cf-0e877f9b08eb" alt="▾" /></button>
                  </>
                ) : (
                  <>
                    <button className={styles.filterBtn}><span className={styles.label}>Topic: </span><span className={styles.value}>All</span><img src="https://www.figma.com/api/mcp/asset/d35c1c3b-7eb5-478b-b5cf-0e877f9b08eb" alt="▾" /></button>
                    <button className={styles.filterBtn}><span className={styles.label}>Length: </span><span className={styles.value}>All</span><img src="https://www.figma.com/api/mcp/asset/d35c1c3b-7eb5-478b-b5cf-0e877f9b08eb" alt="▾" /></button>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Testimonials panel */}
          {tab === "testimonials" && (
            <div className={styles.storiesContent}>
              {/* Video cards */}
              <div className={styles.videoCardsRow}>
                {[
                  { id: "69e6d155-d527-4f9d-bf0d-ee3acbea8357", title: "A Simple Morning Routine for Better Digestion", meta: "Lifestyle • 9 min watch", hasPlay: true },
                  { id: "4fb9406e-fb49-454c-9f3e-096a8419d8ec", title: "How Holistic Nutrition Changed Lives?", meta: "Nutrition • 12 min watch", hasPlay: false },
                ].map((v) => (
                  <div key={v.id} className={styles.videoCard}>
                    <div className={styles.videoThumb}>
                      <img src={`https://www.figma.com/api/mcp/asset/${v.id}`} alt={v.title} />
                      {v.hasPlay && <div className={styles.playBtn}><img src="https://www.figma.com/api/mcp/asset/0aac235e-7f12-4f27-81e0-feb3f6ecd9bf" alt="Play" /></div>}
                    </div>
                    <div className={styles.videoInfo}>
                      <p className={styles.videoTitle}>{v.title}</p>
                      <p className={styles.videoMeta}>{v.meta}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial card 1 */}
              <TestimonialCard badges={[{ label: "Heal Thy Self", cls: "teal" }]} />

              {/* Featured card */}
              <div className={styles.featuredCard}>
                <div className={styles.ribbonWrap}><div className={styles.ribbonBar}><span className={styles.ribbonText}>In the spotlight</span></div></div>
                <div className={styles.featuredPhoto}><img src="https://www.figma.com/api/mcp/asset/9be0428e-3310-483b-9014-201045ef1f63" alt="Neha" /></div>
                <div className={styles.featuredContent}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.cardAuthor}><span className={styles.featuredAuthorName}>Neha</span><img className={styles.ratingImg} src="https://www.figma.com/api/mcp/asset/05e86abd-4f04-4605-a628-4863e2e7b1d6" alt="5 stars" /></div>
                    <div className={styles.badgeRow}><span className={`${styles.badge} ${styles.badgeSand}`}>E-Course</span><span className={`${styles.badge} ${styles.badgeRose}`}>Hands On Workshop</span></div>
                  </div>
                  <p className={styles.featuredTitle}>From chronic bloating to steady energy</p>
                  <p className={styles.featuredBody}>For months, I felt like I was guessing my way through meals. Every day ended with bloating, fatigue, and a foggy mind. Working with Dr. Gauri helped me understand my digestion, not just my symptoms. Within weeks, the bloating reduced, my energy became more consistent, and I finally felt like I was in control of my health.</p>
                  <div className={styles.tagRow}><span className={styles.tag}>Lifestyle Transformation</span><span className={styles.tag}>Disease Reversal</span></div>
                </div>
              </div>

              {/* More testimonial cards */}
              <TestimonialCard badges={[{ label: "E-Course", cls: "sand" }, { label: "Hands On Workshop", cls: "rose" }]} />
              <TestimonialCard badges={[{ label: "E-Course", cls: "sand" }, { label: "Hands On Workshop", cls: "rose" }]} ghost time="5 min ago" />
            </div>
          )}

          {tab === "blogs" && (
            <div className={styles.storiesContent}>
              <div className={styles.blogGrid}>
                {BLOG_POSTS.map((post) => (
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ badges, ghost, time }: { badges: { label: string; cls: string }[]; ghost?: boolean; time?: string }) {
  const badgeClass: Record<string, string> = { teal: "badgeTeal", sand: "badgeSand", rose: "badgeRose" };
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.cardTopRow}>
        <div className={styles.cardAuthor}>
          <div className={styles.authorAvatar}><img src="https://www.figma.com/api/mcp/asset/53239d70-e18a-463c-8506-b452216660d8" alt="Prachi" /></div>
          <span className={styles.authorName}>Prachi</span>
          <img className={styles.ratingImg} src="https://www.figma.com/api/mcp/asset/05e86abd-4f04-4605-a628-4863e2e7b1d6" alt="5 stars" />
        </div>
        <div className={styles.badgeRow}>{badges.map((b) => <span key={b.label} className={`${styles.badge} ${styles[badgeClass[b.cls]]}`}>{b.label}</span>)}</div>
      </div>
      <p className={styles.cardTitle}>Overwhelming change in my body and diet</p>
      <p className={styles.cardBody}>Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle.</p>
      {ghost ? (
        <div className={styles.cardFooterRow}>
          <div className={styles.tagRow}><span className={`${styles.tag} ${styles.tagGhost}`}>Disease Reversal</span><span className={`${styles.tag} ${styles.tagGhost}`}>Lifestyle Transformation</span></div>
          <span className={styles.cardTime}>{time}</span>
        </div>
      ) : (
        <div className={styles.tagRow}><span className={styles.tag}>Lifestyle Transformation</span><span className={styles.tag}>Disease Reversal</span></div>
      )}
    </div>
  );
}
