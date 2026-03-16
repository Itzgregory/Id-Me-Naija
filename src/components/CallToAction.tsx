
import ctaBg         from "../assets/img/cta-bg.jpg";
export const CallToAction: React.FC = () => (
  <section id="call-to-action" className="call-to-action section dark-background">
    <img src={ctaBg} alt="" />
    <div className="container">
      <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="col-xl-10">
          <div className="text-center">
            <h3>Start Verifying Nigerian Identities with Confidence</h3>
            <p>Unlock real-time NIN, BVN and document checks with our developer-friendly API. Go live in hours.</p>
            <a className="cta-btn" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);