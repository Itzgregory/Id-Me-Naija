import React, { useEffect, useState } from "react";
import { PRELOADER_CSS } from "../styles/global";

interface PreloaderProps {
  children: React.ReactNode;
  waitFor?: Promise<unknown>[];
  minDuration?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({
  children,
  waitFor = [],
  minDuration = 1200,
}) => {
  const [hiding, setHiding] = useState(false);
  const [gone,   setGone]   = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      // Wait for the minimum display time AND all provided promises in parallel
      await Promise.all([
        new Promise<void>(res => setTimeout(res, minDuration)),
        ...waitFor,
      ]);

      if (cancelled) return;

      // Start the CSS fade-out transition
      setHiding(true);

      // Remove from DOM only after the transition finishes (matches CSS 0.55s)
      setTimeout(() => {
        if (!cancelled) setGone(true);
      }, 560);
    }

    run();
    return () => { cancelled = true; };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty , waitFor refs don't change after mount

  return (
    <>
      <style>{PRELOADER_CSS}</style>

      {/* Preloader overlay , removed from DOM after transition so it
          doesn't block pointer events or consume z-index space */}
      {!gone && (
        <div id="preloader" className={hiding ? "pl-hiding" : ""}>
          <div className="pl-icon">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <g className="pl-outer">
                <polygon
                  points="60,4 108,30 108,90 60,116 12,90 12,30"
                  fill="none" stroke="#ffc451" strokeWidth="1.5"
                  strokeDasharray="6 4" opacity="0.6"
                />
              </g>
              <g className="pl-inner">
                <polygon
                  points="60,14 100,36 100,84 60,106 20,84 20,36"
                  fill="none" stroke="#008751" strokeWidth="1.5"
                  strokeDasharray="10 6" opacity="0.5"
                />
              </g>
              <g className="pl-shield">
                <polygon points="60,22 88,36 88,64 60,82 32,64 32,36" fill="#1a2a5e"/>
                <polygon points="60,30 82,42 82,62 60,74 38,62 38,42" fill="#008751"/>
                <polyline
                  className="pl-check"
                  points="46,56 55,67 74,45"
                  fill="none" stroke="#ffc451" strokeWidth="4"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>

          <div className="pl-brand">ID Me<span>Naija</span></div>

          <div className="pl-dots">
            <div className="pl-dot" />
            <div className="pl-dot" />
            <div className="pl-dot" />
          </div>

          <div className="pl-sub">Verifying Identity</div>
        </div>
      )}

      {/* Page content renders immediately underneath , not blocked by preloader.
          This means fonts, scripts and images start loading straight away,
          which is what actually makes the preloader wait for real content. */}
      {children}
    </>
  );
};