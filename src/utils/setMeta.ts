
import idMeNaijaLogo from "../assets/img/idmenaija_logo.png";

export function setMeta() {
  document.title = "ID Me Naija – Identity Verification for Nigeria";
  const setMetaTag = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
    el.content = content;
  };
  setMetaTag("description", "ID Me Naija – Fast, reliable identity verification for Nigerian individuals and businesses. Verify NIN, BVN, driver's licence, passport, and more via a simple API.");
  setMetaTag("keywords", "identity verification Nigeria,Nigerian identity check,NIN verification,BVN verification,passport verification Nigeria,driver's licence verification Nigeria,voter card verification,CAC verification,business verification Nigeria,KYC Nigeria,AML compliance Nigeria,fraud prevention Nigeria,eKYC API Nigeria,identity verification API,document verification Nigeria,background check Nigeria,address verification Nigeria,bank account verification Nigeria,fintech verification Nigeria,compliance solutions Nigeria,pre-employment screening Nigeria,real-time identity verification,automated KYC,ID verification API,secure identity verification,Nigerian KYC solution,digital identity Nigeria,identity fraud prevention Nigeria,risk assessment Nigeria,regulatory compliance Nigeria");
  // favicon
  let fav = document.querySelector("link[rel='icon']") as HTMLLinkElement;
  if (!fav) { fav = document.createElement("link"); fav.rel = "icon"; document.head.appendChild(fav); }
  fav.href = idMeNaijaLogo;
}