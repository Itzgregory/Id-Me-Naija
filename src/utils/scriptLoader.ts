export function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src; s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed: ${src}`));
    document.body.appendChild(s);
  });
}