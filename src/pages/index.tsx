import React, { useEffect, useState } from "react";
import { GLOBAL_CSS } from "../styles/global";
import { CDN_SCRIPTS } from "../utils/cdn";
import { injectStyles } from "../utils/injectStyles";
import { setMeta } from "../utils/setMeta";
import { loadScript } from "../utils/scriptLoader";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Clients } from "../components/Cients";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import { CallToAction } from "../components/CallToAction";
import { Portfolio } from "../components/Portfolio";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonial";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

declare global {
  interface Window {
    AOS?: {
      init(options?: { duration?: number; easing?: string; once?: boolean; mirror?: boolean }): void;
      refresh(): void;
    };
    Swiper?: new (el: HTMLElement, config: Record<string, unknown>) => unknown;
    GLightbox?: (options?: { selector?: string }) => unknown;
    PureCounter?: new () => unknown;
  }
}

const IDMeNaija: React.FC = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [showScrollTop,  setShowScrollTop]  = useState(false);
  const [preloaderDone,  setPreloaderDone]  = useState(false);
  const [scriptsLoaded,  setScriptsLoaded]  = useState(false);

  // 1. Inject styles + meta immediately
  useEffect(() => {
    injectStyles();
    setMeta();
  }, []);

  // 2. Load scripts sequentially, then init all libraries
  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      try {
        // Load scripts one by one in order (some depend on previous)
        for (const src of CDN_SCRIPTS) {
          await loadScript(src);
        }
        if (cancelled) return;

        // ── AOS ──────────────────────────────────────────────────────────────
        window.AOS?.init({
          duration: 600,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });

        // ── Swiper — init all .init-swiper elements ───────────────────────────
        if (window.Swiper) {
          document.querySelectorAll<HTMLElement>(".init-swiper").forEach(el => {
            const configEl = el.querySelector<HTMLScriptElement>(".swiper-config");
            if (!configEl) return;
            try {
              const config = JSON.parse(configEl.textContent ?? "{}") as Record<string, unknown>;
              new window.Swiper!(el, config);
            } catch (e) { console.warn("Swiper config parse error", e); }
          });
        }

        // ── GLightbox ─────────────────────────────────────────────────────────
        window.GLightbox?.({ selector: ".glightbox" });

        // ── PureCounter ───────────────────────────────────────────────────────
        if (window.PureCounter) {
          new window.PureCounter();
        }

        if (!cancelled) setScriptsLoaded(true);
      } catch (err) {
        console.error("Bootstrap error:", err);
        if (!cancelled) setScriptsLoaded(true); // degrade gracefully
      }
    }

    bootstrap();
    return () => { cancelled = true; };
  }, []);

  // 3. Preloader — hide after scripts + minimum 600ms
  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 600);
    return () => clearTimeout(t);
  }, []);

  // 4. Scroll listeners
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      setShowScrollTop(y > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 5. Re-init AOS on scripts loaded (DOM may have changed)
  useEffect(() => {
    if (scriptsLoaded) window.AOS?.refresh();
  }, [scriptsLoaded]);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      {!preloaderDone && <div id="preloader"></div>}
      <div
        className={`index-page${scrolled ? " scrolled" : ""}`}
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
        data-aos-delay="0"
      >
        <Header />
        <main className="main">
          <Hero />
          <About />
          <Clients />
          <Features />
          <Services />
          <CallToAction />
          <Portfolio />
          <Stats />
          <Testimonials />
          <Team />
          <Contact />
        </main>
        <Footer />
        <a
          href="#"
          id="scroll-top"
          className={`scroll-top d-flex align-items-center justify-content-center${showScrollTop ? " active" : ""}`}
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
};

export default IDMeNaija;