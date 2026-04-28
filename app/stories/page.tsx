"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./stories.module.css";
import FadeIn from "@/components/animations/FadeIn";

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

const TESTIMONIALS = [
  {
    name: "Prachi Khandelwal",
    role: "Supply Chain Professional",
    title: "Overwhelming change in my body and diet",
    body: "Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle.",
    portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "Heal Thy Self", cls: "teal" }],
    tags: ["Disease Reversal", "Lifestyle Transformation"],
  },
  {
    name: "Rohan Mehta",
    role: "Investment Banker",
    title: "Finally off my acidity medication",
    body: "I had been living on antacids for years. Within six weeks of working with Dr. Gauri, the acidity was gone. Not managed — gone. I understand now what my body had been signalling the whole time.",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "E-Course", cls: "sand" }, { label: "Hands On Workshop", cls: "rose" }],
    tags: ["Disease Reversal", "Gut Health"],
    time: "5 min ago",
  },
  {
    name: "Ananya Iyer",
    role: "Architect",
    title: "My energy came back, and my sleep with it",
    body: "I used to wake up tired no matter how long I slept. The programme shifted how I eat and how I structure my evenings. Sleep is deep now, and mornings feel like mornings again.",
    portrait: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "Heal Thy Self", cls: "teal" }],
    tags: ["Lifestyle Transformation", "Sleep"],
  },
  {
    name: "Kabir Singh",
    role: "Marketing Manager",
    title: "Lost 11 kg without counting a single calorie",
    body: "The focus was never on weight. It was on healing. The weight loss came as a side effect of eating what my body actually needed. That's what makes it sustainable.",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "E-Course", cls: "sand" }],
    tags: ["Weight Management", "Lifestyle Transformation"],
  },
  {
    name: "Meera Nair",
    role: "Yoga Instructor",
    title: "PCOS symptoms easing for the first time in years",
    body: "I'd tried every hormonal fix and felt stuck. Dr. Gauri's approach worked with my cycle, not against it. My periods are regular, the bloating is down, and I feel calmer overall.",
    portrait: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "Heal Thy Self", cls: "teal" }, { label: "E-Course", cls: "sand" }],
    tags: ["Women's Health", "Disease Reversal"],
    time: "2 hours ago",
  },
  {
    name: "Arjun Deshpande",
    role: "Product Designer",
    title: "The brain fog lifted and I got my focus back",
    body: "As someone who works long hours, the mental clarity has been the biggest gift. I can think through complex problems without that heavy, slow feeling I used to carry every afternoon.",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "E-Course", cls: "sand" }],
    tags: ["Mental Clarity", "Gut Health"],
  },
  {
    name: "Divya Patel",
    role: "Homemaker",
    title: "My whole family eats differently now",
    body: "What started as my programme turned into a household change. My kids are curious about food, my husband has dropped his sugar habit, and mealtimes feel intentional again.",
    portrait: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "Hands On Workshop", cls: "rose" }],
    tags: ["Family Health", "Lifestyle Transformation"],
    time: "1 day ago",
  },
  {
    name: "Siddharth Rao",
    role: "Civil Engineer",
    title: "Blood pressure under control without increasing meds",
    body: "My cardiologist was sceptical. Three months later, he's the one asking what I'm doing differently. Small, precise changes to food and stress made all the difference.",
    portrait: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "Heal Thy Self", cls: "teal" }],
    tags: ["Disease Reversal", "Heart Health"],
  },
  {
    name: "Nisha Agarwal",
    role: "Schoolteacher",
    title: "From constant bloating to a calm gut",
    body: "I used to dread eating out. Now I can enjoy meals without the aftermath. Understanding my triggers — and what actually heals — completely changed my relationship with food.",
    portrait: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "E-Course", cls: "sand" }, { label: "Hands On Workshop", cls: "rose" }],
    tags: ["Gut Health", "Disease Reversal"],
    time: "3 days ago",
  },
  {
    name: "Vikram Joshi",
    role: "Operations Lead",
    title: "Reversed pre-diabetes in four months",
    body: "The numbers didn't lie. HbA1c dropped from 6.3 to 5.4. But what mattered more was how different I felt in my own body. Lighter, clearer, and genuinely well.",
    portrait: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    badges: [{ label: "Heal Thy Self", cls: "teal" }, { label: "E-Course", cls: "sand" }],
    tags: ["Disease Reversal", "Diabetes"],
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
          <FadeIn as="section" className={styles.storiesHero}>
            <h1 className={styles.storiesTitle}>Stories &amp; Wisdom</h1>
            <div className={styles.tabBarWrap}>
              <div className={styles.tabBar}>
                <div className={`${styles.tabItem} ${tab === "testimonials" ? styles.active : ""}`} onClick={() => setTab("testimonials")}>Testimonials</div>
                <div className={`${styles.tabItem} ${tab === "blogs" ? styles.active : ""}`} onClick={() => setTab("blogs")}>Blogs</div>
              </div>
            </div>
            <p className={styles.storiesSubtitle}>
              {tab === "testimonials"
                ? "Real people. Real struggles. Real healing."
                : "Understand what your body is trying to tell you."}
            </p>
            <div className={styles.filtersBar}>
              <div className={styles.searchWrap}>
                <img className={styles.searchIcon} src="/images/icons/search.svg" alt="Search" />
                <input type="text" className={styles.searchInput} placeholder="Search" />
              </div>
              <div className={styles.filterDropdowns}>
                {tab === "testimonials" ? (
                  <>
                    <button className={styles.filterBtn}><span className={styles.label}>Issue: </span><span className={styles.value}>All</span><img src="/images/icons/chevron-down.svg" alt="▾" /></button>
                    <button className={styles.filterBtn}><span className={styles.label}>Programme: </span><span className={styles.value}>All</span><img src="/images/icons/chevron-down.svg" alt="▾" /></button>
                  </>
                ) : (
                  <>
                    <button className={styles.filterBtn}><span className={styles.label}>Topic: </span><span className={styles.value}>All</span><img src="/images/icons/chevron-down.svg" alt="▾" /></button>
                    <button className={styles.filterBtn}><span className={styles.label}>Length: </span><span className={styles.value}>All</span><img src="/images/icons/chevron-down.svg" alt="▾" /></button>
                  </>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Animated tab panels */}
          <AnimatePresence mode="wait" initial={false}>
          {tab === "testimonials" && (
            <motion.div
              key="testimonials"
              className={styles.storiesContent}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Video cards */}
              <FadeIn className={styles.videoCardsRow}>
                <VideoCard
                  youtubeId="iS_UoDMzJ30"
                  title="A Simple Morning Routine for Better Digestion"
                  meta="Lifestyle • 9 min watch"
                />
                <VideoCard
                  youtubeId="J1ompYdSdu4"
                  title="How Holistic Nutrition Changed Lives?"
                  meta="Nutrition • 12 min watch"
                />
              </FadeIn>

              {/* Featured card */}
              <FadeIn className={styles.featuredCard}>
                <div className={styles.ribbonWrap}><div className={styles.ribbonBar}><span className={styles.ribbonText}>In the spotlight</span></div></div>
                <div className={styles.featuredPhoto}><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Neha" /></div>
                <div className={styles.featuredContent}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.tagRow}>
                      <span className={`${styles.tag} ${styles.tagGhost}`}>Lifestyle Transformation</span>
                      <span className={`${styles.tag} ${styles.tagGhost}`}>Disease Reversal</span>
                    </div>
                    <div className={styles.badgeRow}>
                      <span className={`${styles.badge} ${styles.badgeSand}`}>E-Course</span>
                      <span className={`${styles.badge} ${styles.badgeRose}`}>Hands On Workshop</span>
                    </div>
                  </div>
                  <p className={styles.featuredTitle}>&ldquo;From chronic bloating to steady energy&rdquo;</p>
                  <p className={styles.featuredBody}>For months, I felt like I was guessing my way through meals. Every day ended with bloating, fatigue, and a foggy mind. Working with Dr. Gauri helped me understand my digestion, not just my symptoms. Within weeks, the bloating reduced, my energy became more consistent, and I finally felt like I was in control of my health.</p>
                  <div className={styles.featuredFooter}>
                    <span className={styles.authorName}>Neha</span>
                    <span className={styles.authorRole}>In the spotlight</span>
                  </div>
                </div>
              </FadeIn>

              {/* Remaining testimonials */}
              {TESTIMONIALS.slice(1).map((t) => (
                <FadeIn key={t.name}>
                  <TestimonialCard
                    name={t.name}
                    title={t.title}
                    body={t.body}
                    portrait={t.portrait}
                    badges={t.badges}
                    tags={t.tags}
                    role={t.role}
                  />
                </FadeIn>
              ))}
            </motion.div>
          )}

          {tab === "blogs" && (
            <motion.div
              key="blogs"
              className={styles.storiesContent}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <FadeIn className={styles.blogGrid}>
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
              </FadeIn>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ youtubeId, title, meta }: { youtubeId: string; title: string; meta: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoThumb}>
        {playing ? (
          <iframe
            className={styles.videoIframe}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img src={thumb} alt={title} />
            <button className={styles.playBtn} onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
              <img src="/images/icons/play.svg" alt="Play" width={20} height={20} />
            </button>
          </>
        )}
      </div>
      <div className={styles.videoInfo}>
        <p className={styles.videoTitle}>{title}</p>
        <p className={styles.videoMeta}>{meta}</p>
      </div>
    </div>
  );
}

function OutlineStars() {
  return (
    <div className={styles.outlineStars} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M10 1.8l2.47 5 5.53.8-4 3.9.94 5.5L10 14.4l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.8z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  badges,
  portrait = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  name = "Prachi",
  role,
  title = "Overwhelming change in my body and diet",
  body = "Everything from healing, food, nutrition, and the mind is covered. Dr. Gauri also taught how to plan things, implement the learnings, and sustain a new lifestyle.",
  tags = ["Disease Reversal", "Lifestyle Transformation"],
}: {
  badges: { label: string; cls: string }[];
  portrait?: string;
  name?: string;
  role?: string;
  title?: string;
  body?: string;
  tags?: string[];
}) {
  const badgeClass: Record<string, string> = { teal: "badgeTeal", sand: "badgeSand", rose: "badgeRose" };
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.cardPortrait}>
        <img src={portrait} alt={name} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTopRow}>
          <div className={styles.tagRow}>
            {tags.map((t) => (
              <span key={t} className={`${styles.tag} ${styles.tagGhost}`}>{t}</span>
            ))}
          </div>
          <div className={styles.badgeRow}>
            {badges.map((b) => (
              <span key={b.label} className={`${styles.badge} ${styles[badgeClass[b.cls]]}`}>{b.label}</span>
            ))}
          </div>
        </div>
        <p className={styles.cardTitle}>&ldquo;{title}&rdquo;</p>
        <p className={styles.cardBody}>{body}</p>
        <div className={styles.cardFooterRow}>
          <span className={styles.authorName}>{name}</span>
          {role && <span className={styles.authorRole}>{role}</span>}
        </div>
      </div>
    </div>
  );
}
