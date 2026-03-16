import React, { useEffect, useState } from "react";
import { GLOBAL_CSS } from "../styles/global";
import { injectStyles } from "../utils/injectStyles";
import { setMeta } from "../utils/setMeta";
import { scriptsReady } from "../utils/bootstrap";
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

const IDMeNaija: React.FC = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 1. Inject styles + meta immediately
  useEffect(() => {
    injectStyles();
    setMeta();
  }, []);

  // 2. Re-init AOS once scripts are ready (bootstrap.ts handles loading + init)
  useEffect(() => {
    scriptsReady.then(() => window.AOS?.refresh());
  }, []);

  // 3. Scroll listener
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      setShowScrollTop(y > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
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