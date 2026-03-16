import { useState } from "react";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile_number: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => { setStatus("sent"); setTimeout(() => window.location.reload(), 2000); }, 1200);
  };
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: "100%", height: 270 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1847!2d7.4892!3d9.0565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba6559d9b73%3A0x37e080fffe8a9f1a!2sAbuja!5e0!3m2!1sen!2sng"
            frameBorder={0} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div><h3>Address</h3><p>Central Business District, Abuja, Nigeria</p></div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div><h3>Call Us</h3><p>+234 800 000 0000</p></div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div><h3>Email Us</h3><p>hello@idmenaija.ng</p></div>
            </div>
          </div>
          <div className="col-lg-8">
            <form id="emlfrm" className="php-email-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-4">
                  <input type="text" name="name" className="form-control rounded-2" placeholder="Your Name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <input type="email" name="email" className="form-control rounded-2" placeholder="Your Email" required value={form.email} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <input type="tel" id="mobile" name="mobile_number" className="form-control rounded-2" placeholder="Enter 11-digit mobile" pattern="[0-9]{11}" minLength={11} maxLength={11} required value={form.mobile_number} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control rounded-2" placeholder="Subject" required value={form.subject} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <textarea name="message" className="form-control rounded-2" rows={6} placeholder="Message" required value={form.message} onChange={handleChange}></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className={`alert alert-info shadow mb-2 ldg${status === "loading" ? "" : " d-none"}`} role="alert">Loading</div>
                  <div className={`alert alert-warning shadow mb-2 em d-none`} role="alert"></div>
                  <div className={`alert alert-success shadow mb-2 sntml${status === "sent" ? "" : " d-none"}`} role="alert"></div>
                  <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                    <div className="g-recaptcha" style={{ display: "inline-block" }} data-sitekey="YOUR_RECAPTCHA_KEY">
                      <div style={{ width: 304, height: 78, border: "1px solid #d3d3d3", borderRadius: 3, background: "#f9f9f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: 12 }}>
                        reCAPTCHA
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-sm btn-warning shadow sndeml" id="sendBtn" disabled={status === "loading" || status === "sent"}>
                    {status === "sent" ? "Sent! Please wait..." : status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};