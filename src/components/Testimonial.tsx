import { TESTIMONIALS } from "../lib/testimonials";
import testimonialsBg from "../assets/img/testimonials-bg.jpg";
import testimonial1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonial5 from "../assets/img/testimonials/testimonials-5.jpg";

const TESTIMONIAL_IMGS = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5];

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="testimonials section dark-background">
    <img src={testimonialsBg} className="testimonials-bg" alt="" />
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="swiper init-swiper">
        <script type="application/json" className="swiper-config" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          loop: true, speed: 600, autoplay: { delay: 5000 }, slidesPerView: "auto",
          pagination: { el: ".swiper-pagination", type: "bullets", clickable: true }
        })}} />
        <div className="swiper-wrapper">
          {TESTIMONIALS.map(t => (
            <div className="swiper-slide" key={t.idx}>
              <div className="testimonial-item">
                <img src={TESTIMONIAL_IMGS[t.idx]} className="testimonial-img" alt={t.name} />
                <h3>{t.name}</h3>
                <h4>{t.role}</h4>
                <h4>{t.company}</h4>
                <div className="stars">
                  {Array.from({ length: t.stars }).map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{t.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  </section>
);