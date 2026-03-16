import { TAGS } from "../lib/tags";
import idMeNaijaLogo from "../assets/img/idmenaija_logo.png";

export const Footer: React.FC = () => (
  <footer id="footer" className="footer dark-background">
    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <img className="img-thumbnail" src={idMeNaijaLogo} alt="" style={{ borderRadius: 0, padding: "0.25rem", border: "1px solid #dee2e6", maxHeight: 40 }} />
              <span className="sitename">IDMeNaija</span>
            </a>
            <div className="footer-contact pt-3">
              <p><i className="bi bi-geo-alt-fill me-2" style={{ color: "#008751" }}></i>Abuja, FCT, NG</p>
              <p><i className="bi bi-geo-alt-fill me-2"></i>Lagos, NG</p>
            </div>
            <div className="social-links d-flex mt-4">{/* social links go here */}</div>
          </div>
          <div className="col-lg-8 col-md-12 footer-links">
            <h4 className="text-center mb-3">Popular Searches</h4>
            <div className="tag-cloud">
              {TAGS.map(t => (
                <a href="#" key={t.label} className="tag" style={{ fontSize: t.size }}>{t.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container text-center">
        <p>© <span>2026,</span> <strong className="px-1 sitename">ID Me Naija.</strong> <span>All Rights Reserved</span></p>
      </div>
    </div>
  </footer>
);