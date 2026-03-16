import client1 from "../assets/img/clients/client-1.png";
import client2 from "../assets/img/clients/client-2.png";
import client3 from "../assets/img/clients/client-3.png";
import client4 from "../assets/img/clients/client-4.png";
import client5 from "../assets/img/clients/client-5.png";
import client6 from "../assets/img/clients/client-6.png";
import client7 from "../assets/img/clients/client-7.png";
import client8 from "../assets/img/clients/client-8.png";

const CLIENT_IMGS  = [client1, client2, client3, client4, client5, client6, client7, client8];

export const Clients: React.FC = () => (
  <section id="clients" className="clients section">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="swiper init-swiper">
        <script type="application/json" className="swiper-config" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          loop: true, speed: 600, autoplay: { delay: 5000 },
          slidesPerView: "auto",
          pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
          breakpoints: {
            320:  { slidesPerView: 2, spaceBetween: 40 },
            480:  { slidesPerView: 3, spaceBetween: 60 },
            640:  { slidesPerView: 4, spaceBetween: 80 },
            992:  { slidesPerView: 6, spaceBetween: 120 },
          }
        })}} />
        <div className="swiper-wrapper align-items-center">
          {CLIENT_IMGS.map((src, i) => (
            <div className="swiper-slide" key={i}>
              <img src={src} className="img-fluid" alt={`Partner ${i+1}`} style={{ borderRadius: 0 }} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  </section>
);
