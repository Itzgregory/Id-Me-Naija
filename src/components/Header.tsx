import { useState } from "react";
import idMeNaijaLogo from "../assets/img/idmenaija_logo.png";

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
          <img src={idMeNaijaLogo} alt="ID Me Naija logo" className="img-fluid img-thumbnail" style={{ width: 100, borderRadius: 0, padding: "0.25rem", border: "1px solid #dee2e6" }} />
          <h1 className="sitename">IDMe<span>Naija</span></h1>
        </a>
        <nav id="navmenu" className={`navmenu${mobileOpen ? " mobile-nav-active" : ""}`}>
          <ul className={mobileOpen ? "mobile-open" : undefined}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Industries</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? "bi-x" : "bi-list"}`} onClick={() => setMobileOpen(o => !o)} />
        </nav>
        <a className="btn-getstarted" href="/auth/signup">Get Started</a>
      </div>
    </header>
  );
};