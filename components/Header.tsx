"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./shared.module.css";

const pages = [
  { key: "/",         label: "Home" },
  { key: "/services", label: "My Services" },
  { key: "/journey",  label: "My Journey" },
  { key: "/stories",  label: "Stories" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/Logo 300x300 (1) 1.png"
              alt="Dr. Gauri Rokkam"
              style={{ height: "48px", width: "auto" }}
            />
          </Link>
        </div>
        <nav className={styles.navDesktop}>
          {pages.map((p) => (
            <Link
              key={p.key}
              href={p.key}
              className={pathname === p.key ? styles.active : ""}
            >
              {p.label}
            </Link>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.btnOutlineTerracotta}>Enroll for E-Course</button>
          <div className={styles.langBtn}>
            <img src="/images/icons/globe.svg" alt="Language" />
            EN
          </div>
        </div>
        <button
          className={styles.menuBtn}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <img src={menuOpen ? "/images/icons/close.svg" : "/images/icons/menu.svg"} alt="" />
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          {pages.map((p) => (
            <Link
              key={p.key}
              href={p.key}
              className={pathname === p.key ? styles.mobileNavLinkActive : styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {p.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
