import { CDN_SCRIPTS } from "./cdn";
import { loadScript } from "./scriptLoader";

declare global {
  interface Window {
    AOS?: {
      init(options?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
      }): void;
      refresh(): void;
    };
    Swiper?: new (el: HTMLElement, config: Record<string, unknown>) => unknown;
    GLightbox?: (options?: { selector?: string }) => unknown;
    PureCounter?: new () => unknown;
  }
}

export function initLibraries(): void {
  window.AOS?.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  if (window.Swiper) {
    document.querySelectorAll<HTMLElement>(".init-swiper").forEach(el => {
      const configEl = el.querySelector<HTMLScriptElement>(".swiper-config");
      if (!configEl) return;
      try {
        const config = JSON.parse(configEl.textContent ?? "{}") as Record<string, unknown>;
        new window.Swiper!(el, config);
      } catch (e) {
        console.warn("Swiper config parse error", e);
      }
    });
  }

  window.GLightbox?.({ selector: ".glightbox" });

  if (window.PureCounter) new window.PureCounter();
}

// == scriptsReady ==
// A single promise created at module level shared across all imports.
// Resolves only when every CDN script has loaded AND initLibraries() has run.
// Pass this to <Preloader waitFor={[scriptsReady]}> so the preloader stays
// visible until the scripts are actually ready to use.
export const scriptsReady: Promise<void> = (async () => {
  for (const src of CDN_SCRIPTS) {
    await loadScript(src);
  }
  initLibraries();
})();