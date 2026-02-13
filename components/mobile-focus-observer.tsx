"use client";

import { useEffect } from "react";

const MOBILE_BREAKPOINT = 1024;

export function MobileFocusObserver() {
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    if (!media.matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".mobile-focus-frame")
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add("mobile-focus-active");
          } else {
            element.classList.remove("mobile-focus-active");
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
