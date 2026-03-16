import { CDN_STYLES } from "./cdn";

export function injectStyles() {
  CDN_STYLES.forEach(href => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href;
    // preconnect for Google Fonts
    if (href.includes("fonts.googleapis")) {
      const pc1 = document.createElement("link"); pc1.rel = "preconnect"; pc1.href = "https://fonts.googleapis.com"; document.head.prepend(pc1);
      const pc2 = document.createElement("link"); pc2.rel = "preconnect"; pc2.href = "https://fonts.gstatic.com"; pc2.crossOrigin = ""; document.head.prepend(pc2);
    }
    document.head.appendChild(l);
  });
}