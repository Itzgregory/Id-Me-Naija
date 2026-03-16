import { STATS } from "../lib/stats";
import statsImg      from "../assets/img/stats-img.jpg";

export const Stats: React.FC = () => (
  <section id="stats" className="stats section">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 align-items-center justify-content-between">
        <div className="col-lg-5">
          <img src={statsImg} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3 className="fw-bold fs-2 mb-3">Why ID Me Naija?</h3>
          <p>Nigeria's most reliable identity verification API — built for compliance and scale.</p>
          <div className="row gy-4">
            {STATS.map(s => (
              <div className="col-lg-6" key={s.label}>
                <div className="stats-item d-flex">
                  <i className={`bi ${s.icon} flex-shrink-0`}></i>
                  <div>
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end={s.end}
                      data-purecounter-duration="1"
                    >{s.end}</span>
                    <p><strong>{s.label}</strong>{s.sub ? <> <span>{s.sub}</span></> : null}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);