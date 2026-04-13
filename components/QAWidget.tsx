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
            <img src="https://www.figma.com/api/mcp/asset/e1cadc04-43b9-4d15-bc96-d4c1f1f6ebdb" alt="Dr. Gauri" />
          </div>
          <span className={styles.qaPillText}>Explain your symptoms to me...</span>
        </button>
      )}
      {state === "avatar" && (
        <button className={styles.qaAvatarBtn} onClick={() => setState("card")} aria-label="Ask Dr. Gauri">
          <div className={`${styles.qaAv} ${styles.qaAvatarInner}`}>
            <img src="https://www.figma.com/api/mcp/asset/e1cadc04-43b9-4d15-bc96-d4c1f1f6ebdb" alt="Dr. Gauri" />
          </div>
        </button>
      )}
      {state === "card" && (
        <div className={styles.qaCard} role="dialog" aria-label="Ask Dr. Gauri">
          <div className={styles.qaCardHeader}>
            <div className={styles.qaCardTitle}>
              <div className={styles.qaCardAv}>
                <div className={`${styles.qaAv} ${styles.qaCardAvInner}`}>
                  <img src="https://www.figma.com/api/mcp/asset/e1cadc04-43b9-4d15-bc96-d4c1f1f6ebdb" alt="" />
                </div>
              </div>
              <span className={styles.qaCardName}>Ask Dr Gauri</span>
            </div>
            <button className={styles.qaCloseBtn} onClick={() => setState("avatar")} aria-label="Close">
              <img src="https://www.figma.com/api/mcp/asset/67f3afbe-9e02-4e62-96d8-5f90b3d5a1dd" alt="×" />
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
              <img src="https://www.figma.com/api/mcp/asset/1e6f1404-bbde-4599-aec3-4efc926c22e6" alt="Send" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
