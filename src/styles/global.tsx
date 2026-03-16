export const GLOBAL_CSS = `
:root {
  --default-font: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Raleway", sans-serif;
  --nav-font: "Poppins", sans-serif;
}
:root {
  --background-color: #ffffff;
  --default-color: #444444;
  --heading-color: #151515;
  --accent-color: #ffc451;
  --surface-color: #ffffff;
  --contrast-color: #312f2f;
}
:root {
  --nav-color: rgba(255,255,255,0.905);
  --nav-hover-color: #ffc451;
  --nav-mobile-background-color: #ffffff;
  --nav-dropdown-background-color: #ffffff;
  --nav-dropdown-color: #212529;
  --nav-dropdown-hover-color: #ffc451;
}
.light-background { --background-color: #f9f9f9; --surface-color: #ffffff; }
.dark-background {
  --background-color: #060606;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #252525;
  --contrast-color: #2a2727;
}
:root { scroll-behavior: smooth; }
*,*::before,*::after { box-sizing: border-box; }
body { color: var(--default-color); background-color: var(--background-color); font-family: var(--default-font); margin: 0; padding: 0; }
a { color: var(--accent-color); text-decoration: none; transition: 0.3s; }
a:hover { color: color-mix(in srgb, var(--accent-color), transparent 25%); text-decoration: none; }
h1,h2,h3,h4,h5,h6 { color: var(--heading-color); font-family: var(--heading-font); }
img { border-radius: 25px; }

/* ── Header ── */
.header {
  --background-color: rgba(0,0,0,0.8);
  --heading-color: #ffffff;
  --contrast-color: #ffffff;
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 10px 0; transition: all 0.5s; z-index: 997;
  position: fixed; top: 0; left: 0; right: 0;
}
.header .logo { line-height: 1; }
.header .logo img { max-height: 36px; margin-right: 8px; border-radius: 0; }
.header .logo h1 { font-size: 32px; margin: 0; font-weight: 700; color: var(--heading-color); }
.header .logo span { color: var(--accent-color); font-size: 32px; }
.header .btn-getstarted,
.header .btn-getstarted:focus {
  color: var(--contrast-color); font-size: 14px; padding: 8px 30px;
  margin: 0 0 0 30px; border-radius: 4px; transition: 0.3s;
  border: 2px solid var(--accent-color); background: transparent;
  cursor: pointer; font-family: var(--default-font); white-space: nowrap;
}
.header .btn-getstarted:hover,
.header .btn-getstarted:focus:hover { color: var(--default-color); background: var(--accent-color); }
.scrolled .header { box-shadow: 0px 0 18px rgba(0,0,0,0.1); }
.index-page .header { --background-color: rgba(0,0,0,0); }
.index-page.scrolled .header { --background-color: rgba(0,0,0,0.8); }

/* ── Navmenu Desktop ── */
@media (min-width: 1200px) {
  .navmenu { padding: 0; }
  .navmenu ul { margin: 0; padding: 0; display: flex; list-style: none; align-items: center; }
  .navmenu li { position: relative; }
  .navmenu a, .navmenu a:focus {
    color: var(--nav-color); padding: 18px 15px; font-size: 16px;
    font-family: var(--nav-font); font-weight: 400;
    display: flex; align-items: center; justify-content: space-between;
    white-space: nowrap; transition: 0.3s;
  }
  .navmenu li:last-child a { padding-right: 0; }
  .navmenu li:hover > a, .navmenu .active, .navmenu .active:focus { color: var(--nav-hover-color); }
}

/* ── Navmenu Mobile ── */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: var(--nav-color); font-size: 28px; line-height: 0;
    margin-right: 10px; cursor: pointer; transition: color 0.3s;
    background: none; border: none;
  }
  .navmenu { padding: 0; z-index: 9997; }
  .navmenu ul {
    display: none; list-style: none;
    position: absolute; inset: 60px 20px 20px 20px;
    padding: 10px 0; margin: 0; border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    overflow-y: auto; transition: 0.3s; z-index: 9998;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
  }
  .navmenu ul.mobile-open { display: block; }
  .navmenu a, .navmenu a:focus {
    color: var(--nav-dropdown-color); padding: 10px 20px;
    font-family: var(--nav-font); font-size: 17px; font-weight: 500;
    display: flex; align-items: center; justify-content: space-between;
    white-space: nowrap; transition: 0.3s;
  }
  .navmenu a:hover, .navmenu .active, .navmenu .active:focus { background-color: var(--nav-dropdown-hover-color); }
  .mobile-nav-active .mobile-nav-toggle { color: #fff; position: absolute; font-size: 32px; top: 15px; right: 15px; margin-right: 0; z-index: 9999; }
  .mobile-nav-active .navmenu { position: fixed; overflow: hidden; inset: 0; background: rgba(33,37,41,0.8); transition: 0.3s; }
  .mobile-nav-active .navmenu > ul { display: block; }
  .header .logo { order: 1; }
  .header .btn-getstarted { order: 2; margin: 0 15px 0 0; padding: 6px 15px; }
  .header .navmenu { order: 3; }
}

/* ── Footer ── */
.footer { color: var(--default-color); background-color: var(--background-color); font-size: 14px; position: relative; }
.footer .footer-top { padding: 50px 0; background-color: color-mix(in srgb, var(--background-color) 90%, white 10%); }
.footer .footer-about .logo { line-height: 1; margin-bottom: 10px; display: inline-flex; align-items: center; }
.footer .footer-about .logo img { max-height: 40px; margin-right: 6px; border-radius: 0; }
.footer .footer-about .logo span { font-size: 26px; font-weight: 700; letter-spacing: 1px; font-family: var(--heading-font); color: var(--heading-color); }
.footer .footer-about p { font-size: 14px; font-family: var(--heading-font); }
.footer .social-links a {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  background-color: color-mix(in srgb, var(--default-color) 5%, white 10%);
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 4px; font-size: 16px; margin-right: 10px; transition: 0.3s;
}
.footer .social-links a:hover { color: var(--contrast-color); background-color: var(--accent-color); }
.footer h4 { font-size: 16px; font-weight: bold; position: relative; padding-bottom: 12px; }
.footer .footer-links { margin-bottom: 30px; }
.footer .footer-links ul { list-style: none; padding: 0; margin: 0; }
.footer .footer-links ul i { margin-right: 4px; font-size: 12px; line-height: 0; color: var(--accent-color); }
.footer .footer-links ul li { padding: 10px 0; display: flex; align-items: center; }
.footer .footer-links ul li:first-child { padding-top: 0; }
.footer .footer-links ul a { color: color-mix(in srgb, var(--default-color), transparent 30%); display: inline-block; line-height: 1; }
.footer .footer-links ul a:hover { color: var(--accent-color); }
.footer .footer-contact p { margin-bottom: 5px; }
.footer .copyright { padding: 30px 0; }
.footer .copyright p { margin-bottom: 0; }
.footer .credits { margin-top: 5px; font-size: 13px; }

/* ── Preloader ── */
#preloader { position: fixed; inset: 0; z-index: 999999; overflow: hidden; background: #000; transition: all 0.6s ease-out; }
#preloader.hide { opacity: 0; pointer-events: none; }
#preloader:before {
  content: ""; position: fixed;
  top: calc(50% - 30px); left: calc(50% - 30px);
  border: 6px solid #ffffff;
  border-color: var(--accent-color) transparent var(--accent-color) transparent;
  border-radius: 50%; width: 60px; height: 60px;
  animation: animate-preloader 1.5s linear infinite;
}
@keyframes animate-preloader { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* ── Scroll Top ── */
.scroll-top {
  position: fixed; visibility: hidden; opacity: 0; right: 15px; bottom: 15px; z-index: 99999;
  background-color: var(--accent-color); width: 40px; height: 40px; border-radius: 4px; transition: all 0.4s;
  display: flex; align-items: center; justify-content: center;
}
.scroll-top i { font-size: 24px; color: var(--contrast-color); line-height: 0; }
.scroll-top:hover { background-color: color-mix(in srgb, var(--accent-color), transparent 20%); }
.scroll-top.active { visibility: visible; opacity: 1; }
@media screen and (max-width: 768px) { [data-aos-delay] { transition-delay: 0 !important; } }

/* ── Sections ── */
section, .section { color: var(--default-color); background-color: var(--background-color); padding: 60px 0; scroll-margin-top: 80px; overflow: clip; }
@media (max-width: 1199px) { section, .section { scroll-margin-top: 58px; } }

/* ── Section Title ── */
.section-title { padding-bottom: 60px; position: relative; }
.section-title h2 { font-size: 14px; font-weight: 500; padding: 0; line-height: 1px; margin: 0; letter-spacing: 1.5px; text-transform: uppercase; color: color-mix(in srgb, var(--default-color), transparent 50%); position: relative; }
.section-title h2::after { content: ""; width: 120px; height: 1px; display: inline-block; background: var(--accent-color); margin: 4px 10px; }
.section-title p { color: var(--heading-color); margin: 0; font-size: 36px; font-weight: 700; text-transform: uppercase; }

/* ── Hero ── */
.hero { width: 100%; min-height: 100vh; position: relative; padding: 120px 0 80px 0; display: flex; align-items: center; justify-content: center; }
.hero img { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius: 0; }
.hero:before { content: ""; background: color-mix(in srgb, var(--background-color), transparent 30%); position: absolute; inset: 0; z-index: 2; }
.hero .container { position: relative; z-index: 3; }
.hero h2 { margin: 0; font-size: 56px; font-weight: 700; font-family: var(--nav-font); }
.hero h2 span { color: var(--accent-color); }
.hero p { margin: 10px 0 0 0; font-size: 24px; color: color-mix(in srgb, var(--default-color), transparent 30%); }
.hero .icon-box { padding: 30px 20px; transition: ease-in-out 0.3s; border: 1px solid color-mix(in srgb, var(--default-color), transparent 70%); height: 100%; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.hero .icon-box i { font-size: 32px; line-height: 1; color: var(--accent-color); }
.hero .icon-box h3 { font-weight: 700; margin: 10px 0 0 0; padding: 0; font-size: 20px; line-height: 26px; }
.hero .icon-box h3 a { color: color-mix(in srgb, var(--default-color), transparent 20%); transition: ease-in-out 0.3s; }
.hero .icon-box:hover { border-color: var(--accent-color); }
.hero .icon-box:hover h3 a { color: var(--accent-color); }
@media (max-width: 768px) { .hero h2 { font-size: 32px; } .hero p { font-size: 18px; } }

/* ── About ── */
.about .content h3 { font-size: 1.75rem; font-weight: 700; }
.about .content .fst-italic { color: color-mix(in srgb, var(--default-color), var(--contrast-color) 50%); }
.about .content ul { list-style: none; padding: 0; }
.about .content ul li { padding: 10px 0 0 0; display: flex; }
.about .content ul i { color: var(--accent-color); margin-right: 0.5rem; line-height: 1.2; font-size: 1.25rem; }
.about .content p:last-child { margin-bottom: 0; }

/* ── Clients ── */
.clients .swiper-slide img { opacity: 0.5; transition: 0.3s; filter: grayscale(100); }
.clients .swiper-slide img:hover { filter: none; opacity: 1; }
.clients .swiper-wrapper { height: auto; }
.clients .swiper-pagination { margin-top: 20px; position: relative; }
.clients .swiper-pagination .swiper-pagination-bullet { width: 12px; height: 12px; opacity: 1; background-color: color-mix(in srgb, var(--default-color), transparent 80%); }
.clients .swiper-pagination .swiper-pagination-bullet-active { background-color: var(--accent-color); }

/* ── Features ── */
.features .features-image { position: relative; min-height: 400px; }
.features .features-image img { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius: 25px; }
.features .features-item h4 { font-size: 20px; font-weight: 700; margin: 0 0 5px 0; }
.features .features-item i { font-size: 48px; color: var(--accent-color); margin-right: 20px; line-height: 0; }
.features .features-item p { font-size: 15px; color: color-mix(in srgb, var(--default-color), transparent 20%); margin: 0; }

/* ── Services ── */
.services .service-item { background-color: var(--surface-color); text-align: center; border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%); padding: 80px 20px; height: 100%; transition: all ease-in-out 0.3s; }
.services .service-item .icon { background: var(--accent-color); color: var(--contrast-color); margin: 0 auto; width: 64px; height: 64px; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: 0.3s; }
.services .service-item .icon i { font-size: 28px; transition: ease-in-out 0.3s; }
.services .service-item h3 { font-weight: 700; margin: 10px 0 15px 0; font-size: 22px; transition: 0.3s; }
.services .service-item p { line-height: 24px; font-size: 14px; margin-bottom: 0; }
.services .service-item:hover { box-shadow: 0px 0 25px 0 rgba(0,0,0,0.1); transform: translateY(-10px); }

/* ── Call To Action ── */
.call-to-action { padding: 80px 0; position: relative; clip-path: inset(0); }
.call-to-action img { position: fixed; top: 0; left: 0; display: block; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius: 0; }
.call-to-action:before { content: ""; background: color-mix(in srgb, var(--background-color), transparent 50%); position: absolute; inset: 0; z-index: 2; }
.call-to-action .container { position: relative; z-index: 3; }
.call-to-action h3 { font-size: 28px; font-weight: 700; color: var(--default-color); }
.call-to-action p { color: var(--default-color); }
.call-to-action .cta-btn { font-family: var(--heading-font); font-weight: 500; font-size: 16px; letter-spacing: 1px; display: inline-block; padding: 12px 40px; border-radius: 5px; transition: 0.5s; margin: 10px; border: 2px solid var(--default-color); color: var(--default-color); }
.call-to-action .cta-btn:hover { background: var(--accent-color); color: var(--background-color); border: 2px solid var(--accent-color); }

/* ── Portfolio ── */
.portfolio .portfolio-filters { padding: 0; margin: 0 auto 20px auto; list-style: none; text-align: center; }
.portfolio .portfolio-filters li { cursor: pointer; display: inline-block; padding: 8px 20px 10px 20px; margin: 0; font-size: 15px; font-weight: 500; line-height: 1; margin-bottom: 5px; border-radius: 4px; transition: all 0.3s ease-in-out; font-family: var(--heading-font); }
.portfolio .portfolio-filters li:hover, .portfolio .portfolio-filters li.filter-active { color: var(--contrast-color); background-color: var(--accent-color); }
.portfolio .portfolio-filters li:first-child { margin-left: 0; }
.portfolio .portfolio-filters li:last-child { margin-right: 0; }
@media (max-width: 575px) { .portfolio .portfolio-filters li { font-size: 14px; margin: 0 0 10px 0; } }
.portfolio .portfolio-item { position: relative; overflow: hidden; }
.portfolio .portfolio-item .portfolio-info { opacity: 0; position: absolute; left: 12px; right: 12px; bottom: -100%; z-index: 3; transition: all ease-in-out 0.5s; background: color-mix(in srgb, var(--background-color), transparent 10%); padding: 15px; }
.portfolio .portfolio-item .portfolio-info h4 { font-size: 18px; font-weight: 600; padding-right: 50px; }
.portfolio .portfolio-item .portfolio-info p { color: color-mix(in srgb, var(--default-color), transparent 30%); font-size: 14px; margin-bottom: 0; padding-right: 50px; }
.portfolio .portfolio-item:hover .portfolio-info { opacity: 1; bottom: 0; }

/* ── Stats ── */
.stats .stats-item { padding: 10px; }
.stats .stats-item i { font-size: 44px; color: var(--accent-color); line-height: 0; margin-right: 15px; }
.stats .stats-item .purecounter { color: var(--heading-color); font-size: 40px; display: block; font-weight: 700; line-height: 40px; }
.stats .stats-item p { color: color-mix(in srgb, var(--default-color), transparent 40%); padding: 15px 0 0 0; margin: 0; font-family: var(--heading-font); font-size: 14px; }

/* ── Testimonials ── */
.testimonials { padding: 80px 0; position: relative; }
.testimonials:before { content: ""; background: color-mix(in srgb, var(--background-color), transparent 30%); position: absolute; inset: 0; z-index: 2; }
.testimonials .testimonials-bg { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius: 0; }
.testimonials .container { position: relative; z-index: 3; }
.testimonials .testimonials-carousel, .testimonials .testimonials-slider { overflow: hidden; }
.testimonials .testimonial-item { text-align: center; }
.testimonials .testimonial-item .testimonial-img { width: 100px; border-radius: 50% !important; border: 6px solid color-mix(in srgb, var(--default-color), transparent 85%); margin: 0 auto; display: block; }
.testimonials .testimonial-item h3 { font-size: 20px; font-weight: bold; margin: 10px 0 5px 0; }
.testimonials .testimonial-item h4 { font-size: 14px; margin: 0 0 15px 0; color: color-mix(in srgb, var(--default-color), transparent 40%); }
.testimonials .testimonial-item .stars { margin-bottom: 15px; }
.testimonials .testimonial-item .stars i { color: #ffc107; margin: 0 1px; }
.testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right { color: color-mix(in srgb, var(--default-color), transparent 40%); font-size: 26px; line-height: 0; }
.testimonials .testimonial-item .quote-icon-left { display: inline-block; left: -5px; position: relative; }
.testimonials .testimonial-item .quote-icon-right { display: inline-block; right: -5px; position: relative; top: 10px; transform: scale(-1,-1); }
.testimonials .testimonial-item p { font-style: italic; margin: 0 auto 15px auto; }
.testimonials .swiper-wrapper { height: auto; }
.testimonials .swiper-pagination { margin-top: 20px; position: relative; }
.testimonials .swiper-pagination .swiper-pagination-bullet { width: 12px; height: 12px; background-color: color-mix(in srgb, var(--default-color), transparent 50%); opacity: 0.5; }
.testimonials .swiper-pagination .swiper-pagination-bullet-active { background-color: var(--default-color); opacity: 1; }
@media (min-width: 992px) { .testimonials .testimonial-item p { width: 80%; } }

/* ── Team ── */
.team .team-member { background-color: var(--surface-color); overflow: hidden; border-radius: 5px; box-shadow: 0px 2px 15px rgba(0,0,0,0.1); height: 100%; }
.team .team-member .member-img { position: relative; overflow: hidden; }
.team .team-member .social { position: absolute; left: 10px; top: 15px; right: 0; opacity: 0; transition: ease-in-out 0.3s; text-align: right; }
.team .team-member .social a { background: color-mix(in srgb, var(--contrast-color), transparent 25%); color: color-mix(in srgb, var(--default-color), transparent 20%); margin: 0 3px; border-radius: 4px; width: 36px; height: 36px; transition: ease-in-out 0.3s; display: inline-flex; justify-content: center; align-items: center; }
.team .team-member .social a:hover { color: var(--contrast-color); background: var(--accent-color); }
.team .team-member .social i { font-size: 18px; line-height: 0; }
.team .team-member .member-info { padding: 25px 15px; }
.team .team-member .member-info h4 { font-weight: 700; margin-bottom: 5px; font-size: 18px; }
.team .team-member .member-info span { display: block; font-size: 13px; font-weight: 400; color: color-mix(in srgb, var(--default-color), transparent 40%); }
.team .team-member:hover .social { opacity: 1; }

/* ── Contact ── */
.contact .info-item + .info-item { margin-top: 40px; }
.contact .info-item i { color: var(--contrast-color); background: var(--accent-color); font-size: 20px; width: 44px; height: 44px; display: flex; justify-content: center; align-items: center; border-radius: 4px; transition: all 0.3s ease-in-out; margin-right: 15px; flex-shrink: 0; }
.contact .info-item h3 { padding: 0; font-size: 18px; font-weight: 700; margin-bottom: 5px; }
.contact .info-item p { padding: 0; margin-bottom: 0; font-size: 14px; }
.contact .php-email-form { height: 100%; }
.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form input[type=tel],
.contact .php-email-form textarea { font-size: 14px; padding: 10px 15px; box-shadow: none; border-radius: 0.375rem; color: var(--default-color); background-color: color-mix(in srgb, var(--background-color), transparent 50%); border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%); width: 100%; font-family: var(--default-font); }
.contact .php-email-form input:focus, .contact .php-email-form textarea:focus { border-color: var(--accent-color); outline: none; }
.contact .php-email-form input::placeholder, .contact .php-email-form textarea::placeholder { color: color-mix(in srgb, var(--default-color), transparent 70%); }
.contact .php-email-form button[type=submit] { color: var(--contrast-color); background: var(--accent-color); border: 0; padding: 10px 30px; transition: 0.4s; border-radius: 4px; cursor: pointer; font-family: var(--default-font); font-size: 14px; }
.contact .php-email-form button[type=submit]:hover { background: color-mix(in srgb, var(--accent-color), transparent 20%); }

/* ── Tag Cloud — exact from original <head> inline style ── */
.tag-cloud { text-align: center; padding: 20px; }
.tag { display: inline-block; margin: 5px; text-decoration: none; color: #0d6efd; font-weight: 500; transition: all 0.3s ease-in-out; }
.tag:hover { color: #dc3545; transform: scale(1.2); }
`;

export const TEAM_CSS = `
.team-avatar {
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.team-avatar-inner {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--heading-font);
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  transition: transform 0.35s ease;
}
.team-avatar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--avatar-color, #008751) 12%, transparent);
}
.team-member:hover .team-avatar-inner {
  transform: scale(1.08);
}
.team-avatar-ring {
  position: absolute;
  width: 134px;
  height: 134px;
  border-radius: 50%;
  border: 2px solid var(--avatar-color, #008751);
  opacity: 0.35;
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.team-member:hover .team-avatar-ring {
  opacity: 0.7;
  transform: scale(1.06);
}
.team-member .member-bio {
  font-size: 13px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  line-height: 1.6;
  margin-top: 6px;
  margin-bottom: 0;
}
.team-member .member-info .member-role-tag {
  display: inline-block;
  margin-top: 4px;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: color-mix(in srgb, var(--accent-color) 15%, transparent);
  color: var(--accent-color);
  margin-bottom: 10px;
}
`;

export const COOMING_SOON_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&family=Poppins:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .cs-root {
    min-height: 100vh;
    background: #04102e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    color: #fff;
    overflow: hidden;
    position: relative;
    padding: 40px 20px;
  }

  /* ── Animated hex grid background ── */
  .cs-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }
  .cs-bg-hex {
    position: absolute;
    border: 1px solid rgba(0, 210, 255, 0.08);
    width: 120px;
    height: 104px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: rgba(0, 30, 80, 0.35);
    animation: cs-hex-pulse 4s ease-in-out infinite;
  }
  @keyframes cs-hex-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(1.04); }
  }

  /* Radial glow */
  .cs-glow {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,135,81,0.10) 0%, rgba(0,135,81,0.03) 50%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Content ── */
  .cs-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 680px;
    width: 100%;
  }

  /* Logo */
  .cs-logo {
    height: 52px;
    width: auto;
    margin-bottom: 40px;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }

  /* Badge */
  .cs-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 196, 81, 0.12);
    border: 1px solid rgba(255, 196, 81, 0.35);
    color: #ffc451;
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 24px;
  }
  .cs-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffc451;
    animation: cs-blink 1.4s ease-in-out infinite;
  }
  @keyframes cs-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.2; }
  }

  /* Heading */
  .cs-heading {
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 16px;
    letter-spacing: -1px;
  }
  .cs-heading span {
    color: #ffc451;
  }

  /* Sub heading */
  .cs-sub {
    font-size: clamp(14px, 2vw, 17px);
    font-weight: 400;
    color: rgba(180, 210, 255, 0.70);
    line-height: 1.7;
    margin-bottom: 48px;
    max-width: 520px;
  }

  /* ── Countdown ── */
  .cs-countdown {
    display: flex;
    gap: 16px;
    margin-bottom: 52px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cs-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .cs-unit-box {
    width: 80px;
    height: 80px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(0, 210, 255, 0.18);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s;
  }
  .cs-unit-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,135,81,0.08), transparent 60%);
  }
  .cs-unit-box.tick {
    border-color: rgba(255,196,81,0.5);
  }
  .cs-unit-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(180, 210, 255, 0.50);
    font-family: 'Poppins', sans-serif;
  }
  .cs-divider {
    font-size: 28px;
    font-weight: 300;
    color: rgba(255,255,255,0.2);
    align-self: flex-start;
    margin-top: 20px;
  }

  /* ── Notify form ── */
  .cs-notify-label {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: rgba(200,220,255,0.6);
    margin-bottom: 14px;
    font-family: 'Poppins', sans-serif;
  }
  .cs-form {
    display: flex;
    gap: 0;
    width: 100%;
    max-width: 420px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(0,210,255,0.2);
    transition: border-color 0.3s;
    margin-bottom: 48px;
  }
  .cs-form:focus-within {
    border-color: rgba(255,196,81,0.5);
  }
  .cs-form input {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: none;
    padding: 14px 18px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    outline: none;
  }
  .cs-form input::placeholder {
    color: rgba(180,200,255,0.35);
  }
  .cs-form button {
    background: #ffc451;
    color: #1a2a5e;
    border: none;
    padding: 14px 22px;
    font-size: 13px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;
    letter-spacing: 0.3px;
  }
  .cs-form button:hover {
    background: #ffb020;
  }
  .cs-form-success {
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    color: #008751;
    background: rgba(0,135,81,0.1);
    border: 1px solid rgba(0,135,81,0.3);
    border-radius: 8px;
    padding: 14px 22px;
    width: 100%;
    max-width: 420px;
    text-align: center;
    margin-bottom: 48px;
  }

  /* ── Services teaser pills ── */
  .cs-services {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 44px;
  }
  .cs-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(0,135,81,0.10);
    border: 1px solid rgba(0,135,81,0.25);
    color: rgba(180,230,200,0.85);
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 20px;
  }
  .cs-pill i {
    font-size: 13px;
    color: #008751;
  }

  /* ── Back link ── */
  .cs-back {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    color: rgba(180,200,255,0.45);
    text-decoration: none;
    transition: color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .cs-back:hover {
    color: #ffc451;
  }

  @media (max-width: 480px) {
    .cs-unit-box { width: 64px; height: 64px; font-size: 24px; }
    .cs-countdown { gap: 10px; }
    .cs-divider { font-size: 22px; margin-top: 14px; }
  }
`;
