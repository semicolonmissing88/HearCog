import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Image } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "../SectionHeading";
import { ScrollReveal } from "../ScrollAnimation";
import styles from "./index.module.scss";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";

const TESTIMONIALS = [
  { id: 1, name: "Thomas Daniel", image: avatar1, rating: 5, text: "My mom purchased an over-the-counter hearing instrument online. After a full hearing evaluation by one of the HearCog providers, the results indicated a possible underlying medical pathology, so she was referred to an ENT for further examination." },
  { id: 2, name: "Alena Alex", image: avatar2, rating: 5, text: "I found a provider I trust within minutes." },
  { id: 3, name: "Thomas Edison", image: avatar3, rating: 5, text: "My mom got help faster than we expected. My mother has struggled for years. HearCog helped us find a provider who actually listened and explained everything clearly. It changed her confidence and peace of mind." },
  { id: 4, name: "Placeholder Name", image: avatar4, rating: 5, text: "l've always been overwhelmed trying to figure out where to go for hearing help. HearCog matched me with a qualified provider near me in less than five minutes. The experience was simple, honest, and reassuring." },
  { id: 5, name: "Thomas Daniel", image: avatar1, rating: 5, text: "No sales pressure-just real answers. Everywhere else felt like a sales pitch. HearCog connected me to a clinic that focused on my brain health, not selling devices. I wish this existed years ago." },
];

function Testimonials({ noMargin }) {
  return (
    <section className={`section bg ${noMargin ? "mt-0" : ""}`}>
      <Container>
        <SectionHeading
          small
          title="What People Say About Their Experience"
          desc="Real experiences from patients and professionals who trust our diagnosis-first, quality-driven approach to hearing care."
        />
      </Container>
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            speed={600}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              576: { slidesPerView: 2.2 },
              992: { slidesPerView: 3.2 },
            }}
            className={styles.slider}
          >
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                <div className={`card ${styles.card}`}>
                  <div className={styles.cardHeader}>
                    <Image src={item.image} alt={item.name} className={styles.avatar} roundedCircle />
                    <div>
                      <h5 className={styles.name}>{item.name}</h5>
                      <div className={styles.stars}>
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i} className={styles.star} aria-hidden>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Testimonials;
