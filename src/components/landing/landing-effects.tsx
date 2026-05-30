"use client";

import { useEffect } from "react";

export function LandingEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll(".reveal");

    const countUp = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const to = parseInt(el.getAttribute("data-to") ?? "0", 10);
      const prefix = el.getAttribute("data-prefix") ?? "";
      const suffix = el.getAttribute("data-suffix") ?? "";
      const sign = to < 0 ? "-" : "";
      const target = Math.abs(to);
      if (reduce) {
        el.textContent = `${prefix}${sign}${target}${suffix}`;
        return;
      }
      const start = performance.now();
      const dur = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${prefix}${sign}${Math.round(target * eased)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window && !reduce) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const target = e.target as HTMLElement;
            target.classList.add("in");
            const kpi = target.querySelector<HTMLElement>(".kpi-num[data-to]");
            if (kpi) countUp(kpi);
            io.unobserve(target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      revealEls.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    revealEls.forEach((el) => el.classList.add("in"));
    document.querySelectorAll<HTMLElement>(".kpi-num[data-to]").forEach(countUp);
  }, []);

  useEffect(() => {
    const faqItems = document.querySelectorAll<HTMLDetailsElement>(
      ".faq-list .faq-item",
    );
    const handlers: Array<{ el: HTMLDetailsElement; fn: () => void }> = [];

    faqItems.forEach((item) => {
      const fn = () => {
        if (item.open) {
          faqItems.forEach((o) => {
            if (o !== item) o.open = false;
          });
        }
      };
      item.addEventListener("toggle", fn);
      handlers.push({ el: item, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("toggle", fn));
    };
  }, []);

  return null;
}
