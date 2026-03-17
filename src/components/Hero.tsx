import { HERO_BOXES } from "../lib/hero";
import heroBg   from "../assets/img/idmenaija_bg.png";

export const Hero: React.FC = () => (
  <section id="hero" className="hero section dark-background">
    <img src={heroBg} alt="" data-aos="fade-in" />
    <div className="container">
      <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="col-xl-6 col-lg-8">
          <h2>Identity Verified. <span>Trust Established.</span></h2>
          <p>API-powered NIN, BVN, passport and document verification for Nigerian businesses, real-time, reliable and built for compliance.</p>
        </div>
      </div>
      <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
        {HERO_BOXES.map((b, i) => (
          <div className="col-xl-2 col-md-4" key={b.label} data-aos="fade-up" data-aos-delay={300 + i * 100}>
            <div className="icon-box">
              <i className={`bi ${b.icon}`}></i>
              <h3><a href="">{b.label}</a></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
