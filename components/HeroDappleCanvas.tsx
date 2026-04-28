"use client";
import { useEffect, useRef } from "react";

/* ── helpers ─────────────────────────────────────────────────── */
const rnd = (lo: number, hi: number) => lo + Math.random() * (hi - lo);

/* ── data types ──────────────────────────────────────────────── */
interface LightBlob {
  nx: number; ny: number;    // normalised position 0-1
  w: number;  h: number;    // pixel width / height (full, pre-rotation)
  rot: number;
  speed: number; phase: number;
  depth: number; driftAmp: number; driftRotAmp: number;
}
interface ShadowStripe {
  nx: number; ny: number;
  len: number; band: number; // length along stripe axis, band width
  rot: number;
  speed: number; phase: number;
  depth: number; driftAmp: number;
}

/* ── factories ───────────────────────────────────────────────── */
function makeBlobs(n: number): LightBlob[] {
  return Array.from({ length: n }, () => ({
    nx: rnd(0, 1),  ny: rnd(0, 1),
    w: rnd(120, 280), h: rnd(60, 140),
    rot: rnd(-50, 50) * (Math.PI / 180),
    speed: rnd(0.00025, 0.00065), phase: rnd(0, Math.PI * 2),
    depth: rnd(0.3, 1.0), driftAmp: rnd(6, 16), driftRotAmp: rnd(0.015, 0.05),
  }));
}
function makeStripes(n: number): ShadowStripe[] {
  return Array.from({ length: n }, () => ({
    nx: rnd(0, 1),  ny: rnd(0, 1),
    len: rnd(400, 900), band: rnd(50, 160),
    rot: rnd(-50, 50) * (Math.PI / 180),
    speed: rnd(0.0002, 0.00045), phase: rnd(0, Math.PI * 2),
    depth: rnd(0.2, 0.8), driftAmp: rnd(5, 14),
  }));
}

/* ── component ───────────────────────────────────────────────── */
const N_BLOBS   = 8;   // 8 + 6 = 14 total objects
const N_STRIPES = 6;

export default function HeroDappleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement as HTMLElement;
    if (!container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const blobs   = makeBlobs(N_BLOBS);
    const stripes = makeStripes(N_STRIPES);
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    /* resize */
    function resize() {
      const r = container.getBoundingClientRect();
      w = r.width  || container.offsetWidth;
      h = r.height || container.offsetHeight;
      canvas!.width  = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width  = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    /* mouse — throttled to ~60 fps */
    const mT = { x: 0, y: 0 };
    const mC = { x: 0, y: 0 };
    const isTouch = window.matchMedia("(pointer:coarse)").matches;
    let lastMoveMs = 0;

    function onMove(e: MouseEvent) {
      if (isTouch) return;
      const now = performance.now();
      if (now - lastMoveMs < 16) return;
      lastMoveMs = now;
      const r = container.getBoundingClientRect();
      mT.x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      mT.y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    }
    function onLeave() { mT.x = 0; mT.y = 0; }
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    /* dirty-flag state */
    let lastDrift0 = 0;
    let lastMpx = 0, lastMpy = 0;

    /* RAF loop */
    let raf: number;

    function draw(t: number) {
      raf = requestAnimationFrame(draw);

      /* cheap lerp — runs every frame */
      mC.x += (mT.x - mC.x) * 0.06;
      mC.y += (mT.y - mC.y) * 0.06;

      /* dirty check — skip GPU work when nothing changed */
      const drift0 = Math.sin(t * blobs[0].speed + blobs[0].phase) * blobs[0].driftAmp;
      const mpx = mC.x * w, mpy = mC.y * h;
      if (
        Math.hypot(mpx - lastMpx, mpy - lastMpy) < 2 &&
        Math.abs(drift0 - lastDrift0) < 0.5
      ) return;
      lastDrift0 = drift0;
      lastMpx = mpx; lastMpy = mpy;

      /* ── clear ─────────────────────────────────────────────── */
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, h);

      /* ── pass 1 : warm light blobs ─────────────────────────── *
       * Non-uniform scale on the context matrix turns a unit-     *
       * circle radial gradient into an ellipse — no blur needed.  */
      for (const b of blobs) {
        const dx = Math.sin(t * b.speed + b.phase)               * b.driftAmp;
        const dy = Math.cos(t * b.speed * 0.65 + b.phase + 1.3)  * b.driftAmp * 0.5;
        const dr = Math.sin(t * b.speed * 0.4  + b.phase + 0.9)  * b.driftRotAmp;
        const cx = b.nx * w + dx + mC.x * b.depth * 28;
        const cy = b.ny * h + dy + mC.y * b.depth * 18;
        const cos = Math.cos(b.rot + dr);
        const sin = Math.sin(b.rot + dr);
        const hw  = b.w / 2;
        const hh  = b.h / 2;

        /* setTransform = translate × rotate × scale(hw, hh)
           a unit circle in this space → screen-space ellipse     */
        ctx!.setTransform(
          dpr * cos * hw,   dpr * sin * hw,
          dpr * -sin * hh,  dpr * cos * hh,
          dpr * cx,         dpr * cy,
        );
        const g = ctx!.createRadialGradient(0, 0, 0, 0, 0, 1);
        g.addColorStop(0, "rgba(255,200,80,0.28)");
        g.addColorStop(1, "rgba(255,200,80,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(0, 0, 1, 0, Math.PI * 2);
        ctx!.fill();
      }

      /* ── pass 2 : shadow stripes ───────────────────────────── *
       * Wide soft bands — gradient softness via alpha, no blur.   */
      for (const s of stripes) {
        const dx = Math.sin(t * s.speed + s.phase)              * s.driftAmp;
        const dy = Math.cos(t * s.speed * 0.6 + s.phase + 1.5)  * s.driftAmp * 0.4;
        const cx = s.nx * w + dx + mC.x * s.depth * 20;
        const cy = s.ny * h + dy + mC.y * s.depth * 14;
        const cos = Math.cos(s.rot);
        const sin = Math.sin(s.rot);

        /* pure rotate, no non-uniform scale */
        ctx!.setTransform(dpr * cos, dpr * sin, dpr * -sin, dpr * cos, dpr * cx, dpr * cy);

        const hb = s.band / 2;
        const hl = s.len  / 2;
        const g = ctx!.createLinearGradient(0, -hb, 0, hb);
        g.addColorStop(0,   "rgba(140,70,20,0)");
        g.addColorStop(0.3, "rgba(140,70,20,0.12)");
        g.addColorStop(0.7, "rgba(140,70,20,0.12)");
        g.addColorStop(1,   "rgba(140,70,20,0)");
        ctx!.fillStyle = g;
        ctx!.fillRect(-hl, -hb, s.len, s.band);
      }

      /* restore base transform */
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        borderRadius: "inherit",
      }}
    />
  );
}
