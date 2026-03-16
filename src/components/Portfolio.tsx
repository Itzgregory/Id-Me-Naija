import { useState } from "react";
import { PORTFOLIO_ITEMS } from "../lib/portfolio";
import portfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import portfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import portfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
import portfolio4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg";
import portfolio5 from "../assets/img/masonry-portfolio/masonry-portfolio-5.jpg";
import portfolio6 from "../assets/img/masonry-portfolio/masonry-portfolio-6.jpg";
import portfolio7 from "../assets/img/masonry-portfolio/masonry-portfolio-7.jpg";
import portfolio8 from "../assets/img/masonry-portfolio/masonry-portfolio-8.jpg";

const PORTFOLIO_IMGS = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8];


export const Portfolio: React.FC = () => {
  const [active, setActive] = useState("*");
  const filters = [
    { key: "*", label: "All" }, { key: "filter-app", label: "BFSI" },
    { key: "filter-product", label: "ITeS" }, { key: "filter-branding", label: "General" },
  ];
  const visible = PORTFOLIO_ITEMS.filter(p => active === "*" || p.filter === active);
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Industries we serve</h2>
        <p>Who We Work With</p>
      </div>
      <div className="container">
        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          {filters.map(f => (
            <li key={f.key} className={active === f.key ? "filter-active" : ""} onClick={() => setActive(f.key)}>{f.label}</li>
          ))}
        </ul>
        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
          {visible.map(item => (
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item" key={item.title}>
              <img src={PORTFOLIO_IMGS[item.idx]} className="img-fluid" alt={item.title} style={{ borderRadius: 0, width: "100%", display: "block" }} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <a href={PORTFOLIO_IMGS[item.idx]} title={item.title} className="glightbox preview-link" style={{ position: "absolute", right: 50, top: "calc(50% - 14px)", fontSize: 24, color: "rgba(255,255,255,0.7)", lineHeight: 0 }}>
                  <i className="bi bi-zoom-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};