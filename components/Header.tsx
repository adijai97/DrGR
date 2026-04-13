"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./shared.module.css";

const pages = [
  { key: "/",         label: "Home" },
  { key: "/services", label: "My Services" },
  { key: "/journey",  label: "My Journey" },
  { key: "/stories",  label: "Stories" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
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
          <img
            src="https://www.figma.com/api/mcp/asset/a56d2a1c-ac6b-4918-a686-6f8736efe63c"
            alt="Language"
          />
          EN
        </div>
      </div>
      <button className={styles.menuBtn} aria-label="Open menu">
        <img
          src="https://www.figma.com/api/mcp/asset/cdae88c9-3a28-4f57-9b6b-a5618748862e"
          alt="Menu"
        />
      </button>
    </header>
  );
}
