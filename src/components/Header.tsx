import React, { useState } from "react";
import idMeNaijaLogo from "../assets/img/idmenaija_logo.png";

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div
        className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
      >
        {/* ── Logo ── */}
        <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
          <img
            src={idMeNaijaLogo}
            alt="ID Me Naija logo"
            className="img-fluid img-thumbnail"
            style={{ width: 100, borderRadius: 0, padding: "0.25rem", border: "1px solid #dee2e6" }}
          />
          <h1 className="sitename">IDMe<span>Naija</span></h1>
        </a>
        <nav
          id="navmenu"
          className={`navmenu${mobileOpen ? " mobile-nav-active" : ""}`}
        >
          <ul className={mobileOpen ? "mobile-open" : undefined}>
            <li><a href="#hero"      onClick={closeMobile}>Home</a></li>
            <li><a href="#about"     onClick={closeMobile}>About</a></li>
            <li><a href="#services"  onClick={closeMobile}>Services</a></li>
            <li><a href="#portfolio" onClick={closeMobile}>Industries</a></li>
            <li><a href="#team"      onClick={closeMobile}>Team</a></li>
            <li><a href="#contact"   onClick={closeMobile}>Contact</a></li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? "bi-x" : "bi-list"}`}
            onClick={() => setMobileOpen(o => !o)}
            role="button"
            aria-label="Toggle navigation"
          />
        </nav>
        <a className="btn-getstarted" href="/auth/signup">
          Get Started
        </a>
      </div>
    </header>
  );
};