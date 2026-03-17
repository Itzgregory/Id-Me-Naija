
import aboutImg      from "../assets/img/about.jpg";

export const About: React.FC = () => (
  <section id="about" className="about section">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4">
        <div className="col-lg-6 order-1 order-lg-2">
          <img src={aboutImg} className="img-fluid" alt="About ID Me Naija" />
        </div>
        <div className="col-lg-6 order-2 order-lg-1 content">
          <h3>Verify. Authenticate. Decide , Instantly.</h3>
          <p className="fst-italic">
            In Nigeria's fast-growing digital economy, accurate identity verification is the foundation of trust. ID Me Naija provides instant API access to Nigeria's authoritative identity databases , NIMC, CBN, FRSC, INEC, CAC and more , so your business can make confident, compliant decisions in real time. Built for:
          </p>
          <ul>
            <li><i className="bi bi-check2-all"></i> <span>Nigerian fintechs and financial institutions requiring CBN KYC compliance</span></li>
            <li><i className="bi bi-check2-all"></i> <span>Employers and HR platforms conducting pre-hire background checks</span></li>
            <li><i className="bi bi-check2-all"></i> <span>E-commerce, proptech and gig platforms verifying users at onboarding</span></li>
          </ul>
          <p>
            With sub-second response times, 99% accuracy and full audit trails, we help Nigerian businesses reduce fraud exposure, meet regulatory requirements and onboard customers faster. Our white-label API integrates in minutes , REST-based, fully documented, and production-ready.
          </p>
          <p>
            Partner with ID Me Naija to build on verified facts, not assumptions.
          </p>
        </div>
      </div>
    </div>
  </section>
);