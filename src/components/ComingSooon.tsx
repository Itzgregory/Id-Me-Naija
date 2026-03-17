import React, { useEffect, useState } from "react";
import idmeLogo from "../assets/img/idmenaija_logo.png";
import { COOMING_SOON_CSS } from "../styles/global";

const TARGET = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

function getTimeLeft() {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}


const SERVICES = [
  { icon: "bi-person-badge",       label: "NIN Verification" },
  { icon: "bi-credit-card-2-front",label: "BVN Lookup" },
  { icon: "bi-card-image",         label: "Passport Check" },
  { icon: "bi-person-check",       label: "Voter Card (PVC)" },
  { icon: "bi-building",           label: "CAC Business" },
  { icon: "bi-phone",              label: "Phone & Address" },
];

// Generate hex positions to scatter across the background
const HEX_POSITIONS = [
  { top: "5%",  left: "3%",  delay: "0s"   },
  { top: "5%",  left: "18%", delay: "0.5s" },
  { top: "5%",  left: "75%", delay: "1s"   },
  { top: "5%",  left: "90%", delay: "1.5s" },
  { top: "22%", left: "0%",  delay: "0.3s" },
  { top: "22%", left: "88%", delay: "0.8s" },
  { top: "50%", left: "2%",  delay: "1.2s" },
  { top: "50%", left: "91%", delay: "0.6s" },
  { top: "72%", left: "5%",  delay: "0.2s" },
  { top: "72%", left: "85%", delay: "1.0s" },
  { top: "85%", left: "15%", delay: "0.7s" },
  { top: "85%", left: "72%", delay: "1.3s" },
];

export const ComingSoon: React.FC = () => {
  const [time, setTime]       = useState(getTimeLeft());
  const [tick, setTick]       = useState(false);
  const [email, setEmail]     = useState("");
  const [notified, setNotified] = useState(false);

  // Bootstrap Icons CDN
  useEffect(() => {
    const href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const l = document.createElement("link");
      l.rel = "stylesheet"; l.href = href;
      document.head.appendChild(l);
    }
  }, []);

  // Countdown ticker
  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft());
      setTick(t => !t);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNotified(true);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <style>{COOMING_SOON_CSS}</style>
      <div className="cs-root">

        {/* Background hex grid */}
        <div className="cs-bg">
          {HEX_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className="cs-bg-hex"
              style={{ top: pos.top, left: pos.left, animationDelay: pos.delay }}
            />
          ))}
          <div className="cs-glow" />
        </div>

        <div className="cs-content">

          {/* Logo */}
          <img src={idmeLogo} alt="ID Me Naija" className="cs-logo" />

          {/* Badge */}
          <div className="cs-badge">
            <span className="cs-badge-dot" />
            Coming Soon
          </div>

          {/* Heading */}
          <h1 className="cs-heading">
            This feature is<br /><span>almost ready.</span>
          </h1>

          {/* Sub */}
          <p className="cs-sub">
            We're putting the finishing touches on this page. In the meantime,
            drop your email and we'll notify you the moment it goes live.
          </p>

          {/* Countdown */}
          <div className="cs-countdown">
            {[
              { value: time.days,    label: "Days"    },
              null,
              { value: time.hours,   label: "Hours"   },
              null,
              { value: time.minutes, label: "Minutes" },
              null,
              { value: time.seconds, label: "Seconds" },
            ].map((item, i) =>
              item === null ? (
                <span key={i} className="cs-divider">:</span>
              ) : (
                <div className="cs-unit" key={item.label}>
                  <div className={`cs-unit-box${item.label === "Seconds" && tick ? " tick" : ""}`}>
                    {pad(item.value)}
                  </div>
                  <span className="cs-unit-label">{item.label}</span>
                </div>
              )
            )}
          </div>

          {/* Notify form */}
          <p className="cs-notify-label">Notify me when it's ready</p>
          {notified ? (
            <div className="cs-form-success">
              &nbsp;You're on the list we'll be in touch soon.
            </div>
          ) : (
            <form className="cs-form" onSubmit={handleNotify}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit">Notify Me</button>
            </form>
          )}

          {/* Services teaser */}
          <div className="cs-services">
            {SERVICES.map(s => (
              <span key={s.label} className="cs-pill">
                <i className={`bi ${s.icon}`} />
                {s.label}
              </span>
            ))}
          </div>

          {/* Back link */}
          <a href="/" className="cs-back">
            <i className="bi bi-arrow-left" />
            Back to home
          </a>

        </div>
      </div>
    </>
  );
};