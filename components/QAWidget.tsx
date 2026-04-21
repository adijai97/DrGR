"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./QAWidget.module.css";

export default function QAWidget() {
  const [state, setState] = useState<"pill" | "avatar" | "card">("pill");
  const [inputVal, setInputVal] = useState("");
  const [placeholder] = useState("Describe your symptoms to find similar healing journeys and guidance...");
  const router = useRouter();

  function sendQuery() {
    if (!inputVal.trim()) return;
    router.push(`/stories/results?q=${encodeURIComponent(inputVal.trim())}`);
    setInputVal("");
    setState("avatar");
  }

  return (
    <div className={styles.qaWidget}>
      {state === "pill" && (
        <button className={styles.qaPill} onClick={() => setState("card")} aria-label="Ask Dr. Gauri">
          <div className={styles.qaAv}>
            <img src="/images/dr-gauri-portrait.png" alt="Dr. Gauri" />
          </div>
          <span className={styles.qaPillText}>Explain your symptoms to me...</span>
        </button>
      )}
      {state === "avatar" && (
        <button className={styles.qaAvatarBtn} onClick={() => setState("card")} aria-label="Ask Dr. Gauri">
          <div className={`${styles.qaAv} ${styles.qaAvatarInner}`}>
            <img src="/images/dr-gauri-portrait.png" alt="Dr. Gauri" />
          </div>
        </button>
      )}
      {state === "card" && (
        <div className={styles.qaCard} role="dialog" aria-label="Ask Dr. Gauri">
          <div className={styles.qaCardHeader}>
            <div className={styles.qaCardTitle}>
              <div className={styles.qaCardAv}>
                <div className={`${styles.qaAv} ${styles.qaCardAvInner}`}>
                  <img src="/images/dr-gauri-portrait.png" alt="" />
                </div>
              </div>
              <span className={styles.qaCardName}>Ask Dr Gauri</span>
            </div>
            <button className={styles.qaCloseBtn} onClick={() => setState("avatar")} aria-label="Close">
              <img src="/images/icons/close.svg" alt="×" />
            </button>
          </div>
          <div className={styles.qaInputBar}>
            <input
              type="text"
              value={inputVal}
              placeholder={placeholder}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendQuery()}
            />
            <button className={styles.qaSendBtn} onClick={sendQuery} aria-label="Send">
              <img src="/images/icons/send.svg" alt="Send" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
