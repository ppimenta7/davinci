/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolios from "../../../data/main/portfolio3.json";

const Portfolio = () => {
  return (
    <section className="portfolio-simp-crus section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-8 margin-rl-auto">
            <div className="work-crus flex">
                {portfolios.map((slide, idx) => (
                  <div key={idx} className="col-4 padding-rl-20 mr-30 ">
                    <div style={{backgroundImage: `url(${slide.image})`}} className="slide-item img info mt-20 text-center">
                        <h6 className="fw-600 text-u text-light fz-24">{slide.title}</h6>
                      </div>
                  </div>
                ))}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <div className="text-center pb-50 mt-30">
          <h2>Uma clínica para todos.</h2>
          <p className="col-6 fz-18 margin-rl-auto">
            De quem ainda vai passar por uma amputação àqueles que busca melhor sua qualidade de vida com próteses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
