import { SERVICES } from "../lib/services";

export const Services: React.FC = () => (
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>What We Verify</p>
    </div>
    <div className="container">
      <div className="row gy-4">
        {SERVICES.map((s, i) => (
          <div className="col-lg-4 col-md-6" key={s.title} data-aos="fade-up" data-aos-delay={100 + i * 100}>
            <div className="service-item position-relative">
              <div className="icon"><i className={`bi ${s.icon}`}></i></div>
              <a href="service-details.html" className="stretched-link"><h3>{s.title}</h3></a>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);