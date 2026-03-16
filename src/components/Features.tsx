import { FEATURES } from "../lib/features";
import featuresBg    from "../assets/img/features-bg.jpg";

export const Features: React.FC = () => (
  <section id="features" className="features section">
    <div className="container">
      <div className="row gy-4">
        <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <img src={featuresBg} alt="Features" />
        </div>
        <div className="col-lg-6">
          {FEATURES.map((f, i) => (
            <div className={`features-item d-flex ps-0 ps-lg-3${i > 0 ? " mt-5" : " pt-4 pt-lg-0"}`} key={f.title} data-aos="fade-up" data-aos-delay={200 + i * 100}>
              <i className={`bi ${f.icon} flex-shrink-0`}></i>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);