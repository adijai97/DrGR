"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./heal-thy-self.module.css";
import FadeIn from "@/components/animations/FadeIn";
import TestimonialCarousel from "@/components/TestimonialCarousel";

// Figma asset URLs
const imgSubtract = "/images/subtract.png";
const imgArrowLeft = "/images/icons/arrow-left.svg";
const imgVector = "/images/icons/arrow-right.svg";
const imgAvatar = "/images/avatar.png";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const MORNING_SLOTS = ["09:00", "09:30", "10:00", "10:30"];
const AFTERNOON_SLOTS = ["13:00", "14:00", "14:30", "15:30", "16:00", "16:30"];
const EVENING_SLOTS = ["17:00", "17:30", "18:00", "18:30"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // 0=Mon … 6=Sun
}

export default function HealThySelfPage() {
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Build calendar cells
  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDow = getFirstDayOfWeek(calYear, calMonth);
  const prevDays = getDaysInMonth(calYear, calMonth === 0 ? 11 : calMonth - 1);

  type Cell = { day: number; type: "prev" | "curr" | "next" };
  const cells: Cell[] = [];
  for (let i = 0; i < firstDow; i++) cells.push({ day: prevDays - firstDow + 1 + i, type: "prev" });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, type: "curr" });
  const rem = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7);
  for (let i = 1; i <= rem; i++) cells.push({ day: i, type: "next" });

  // Split into 7 columns (one per day-of-week)
  const cols: Cell[][] = Array.from({ length: 7 }, () => []);
  cells.forEach((cell, i) => cols[i % 7].push(cell));

  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
    setSelectedDate(null);
  }
  function nextMonth() {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
    setSelectedDate(null);
  }

  return (
    <div className={styles.pageBg}>
      <div className={styles.heroGradient} />
      <div className={styles.pageContent}>
        <div className={styles.inner}>

          {/* ── Hero ── */}
          <FadeIn className={styles.hero}>
            <Link href="/services" className={styles.goBack}>
              <img src={imgArrowLeft} alt="" width={24} height={24} />
              <span>Go Back</span>
            </Link>
            <h1 className={styles.pageTitle}>Heal Thy Self</h1>
            <p className={styles.pageSubtitle}>Personal Consultation Program</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Self Paced</span>
              <span className={styles.tag}>5–6 Weeks</span>
            </div>
          </FadeIn>

          {/* ── Two-col: description + image ── */}
          <FadeIn className={styles.twoCol}>
            <div className={styles.descCol}>
              <div className={styles.descTextGroup}>
                <h2 className={styles.descTitle}>Heal the cause. Not just the symptom.</h2>
                <p className={styles.descBody}>
                  A guided, practical process to rebuild your health through food, lifestyle, and mindset.
                </p>
                <h2 className={styles.descTitle}>This is not a quick fix.</h2>
                <p className={styles.descBody}>
                  We work together to understand why your body is unwell — and gently shift the habits that created it.
                </p>
              </div>
              <button className={styles.bookBtn}>Book My Slot</button>
            </div>
            <div className={styles.imageCol}>
              <img src={imgSubtract} alt="" className={styles.subtractImg} />
            </div>
          </FadeIn>

          {/* ── Teal banner ── */}
          <FadeIn className={styles.tealBanner}>
            <p>
              Over 5–6 weeks, we make small, precise changes each week so your body adapts,
              your mind accepts, and the habits stay.
            </p>
          </FadeIn>

          {/* ── What you can expect ── */}
          <FadeIn className={styles.expectSection}>
            <p className={styles.sectionLabel}>WHAT YOU CAN EXPECT</p>
            <div className={styles.stepperCard}>
              <div className={styles.step}>
                <p className={styles.stepWeek}>Week 1–2</p>
                <p className={styles.stepTitle}>Understand your body</p>
                <ul className={styles.stepList}>
                  <li>Identify root causes, not just symptoms</li>
                  <li>Learn why your current patterns aren&apos;t working</li>
                </ul>
              </div>
              <div className={styles.stepDivider} />
              <div className={styles.step}>
                <p className={styles.stepWeek}>Week 2–4</p>
                <p className={styles.stepTitle}>Start changing habits</p>
                <ul className={styles.stepList}>
                  <li>Simple, practical shifts in food and daily routine</li>
                  <li>Ongoing guidance between sessions (WhatsApp support)</li>
                </ul>
              </div>
              <div className={styles.stepDivider} />
              <div className={styles.step}>
                <p className={styles.stepWeek}>Week 4–6</p>
                <p className={styles.stepTitle}>Stabilise and sustain</p>
                <ul className={styles.stepList}>
                  <li>Build routines that feel natural, not forced</li>
                  <li>Reduce dependence on medications (where possible)</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* ── Who is this for ── */}
          <FadeIn className={styles.whoSection}>
            <p className={styles.sectionLabel}>WHO IS THIS FOR?</p>
            <div className={styles.whoColumns}>
              <div className={styles.whoCol}>
                <p className={styles.whoColTitle}>This is for you if</p>
                <ul className={styles.whoList}>
                  <li>You&apos;re tired of managing symptoms without real improvement</li>
                  <li>You&apos;re ready to make changes — not just look for quick fixes</li>
                  <li>You want to understand your body, not depend on guesswork</li>
                </ul>
              </div>
              <div className={styles.whoDivider} />
              <div className={styles.whoCol}>
                <p className={styles.whoColTitle}>This is NOT for you if</p>
                <ul className={styles.whoList}>
                  <li>You&apos;re looking for a shortcut or instant solution</li>
                  <li>You&apos;re not ready to change your daily habits</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* ── Booking details ── */}
          <FadeIn className={styles.bookingSection}>
            <p className={styles.sectionLabel}>BOOKING DETAILS</p>
            <div className={styles.bookingCard}>
              <p className={styles.bookingText}>
                Start with 2 sessions <strong>₹10,000 per session</strong>. These help us understand your body
                and begin the first changes.{" "}
                What happens next? Based on your progress, we continue weekly or bi-weekly sessions{" "}
                <strong>(₹5,000 each).</strong>
              </p>
              <div className={styles.calendarSlotRow}>

                {/* Calendar */}
                <div className={styles.calendarWrap}>
                  <p className={styles.calendarTitle}>Select your Day</p>
                  <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                      <span className={styles.calMonthLabel}>{MONTHS[calMonth]} {calYear}</span>
                      <div className={styles.calNav}>
                        <button className={styles.calNavBtn} onClick={prevMonth} aria-label="Previous month">‹</button>
                        <button className={styles.calNavBtn} onClick={nextMonth} aria-label="Next month">›</button>
                      </div>
                    </div>
                    <div className={styles.calGrid}>
                      {DAYS.map((day, di) => (
                        <div key={day} className={styles.calCol}>
                          <span className={styles.calDayLabel}>{day}</span>
                          {cols[di]?.map((cell, ci) => (
                            <button
                              key={ci}
                              onClick={() => cell.type === "curr" && setSelectedDate(cell.day)}
                              className={[
                                styles.calDay,
                                cell.type !== "curr" ? styles.calDayOther : "",
                                cell.type === "curr" && selectedDate === cell.day ? styles.calDaySelected : "",
                              ].join(" ")}
                            >
                              {cell.day}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.calSlotDivider} />

                {/* Time slots */}
                <div className={styles.slotsWrap}>
                  <div className={styles.slotsContent}>
                    <p className={styles.slotsTitle}>Available Slots</p>
                    <div className={styles.slotsColumns}>
                      {[
                        { label: "Morning", slots: MORNING_SLOTS },
                        { label: "Afternoon", slots: AFTERNOON_SLOTS },
                        { label: "Evening", slots: EVENING_SLOTS },
                      ].map(({ label, slots }) => (
                        <div key={label} className={styles.slotCol}>
                          <span className={styles.slotLabel}>{label}</span>
                          {slots.map(slot => (
                            <button
                              key={slot}
                              className={[styles.slot, selectedSlot === slot ? styles.slotSelected : ""].join(" ")}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className={styles.bookSlotBtn}>Book Slot</button>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* ── Testimonials ── */}
          <FadeIn className={styles.testimonialSection}>
            <div className={styles.testimonialHeader}>
              <p className={styles.sectionLabel} style={{ textAlign: "left" }}>
                TESTIMONIALS for HEAL THY SELF
              </p>
              <Link href="/stories" className={styles.readMoreBtn}>
                Read More Testimonials
                <img src={imgArrowLeft} alt="" width={24} height={24} className={styles.arrowRight} />
              </Link>
            </div>
            <TestimonialCarousel />
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
