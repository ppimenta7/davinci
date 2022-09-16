import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import data from "../../../data/portfolio/classic/four-columns.json";
import initIsotope from "../../../common/initIsotope";
import portfolios from "../../../data/main/portfolio3.json";

const OurServices = () => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding sub-bg" data-scroll-index="1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-head text-center">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">
                  Quem Somos
                </span>
              </h6>
              <h2>O &quot;Dream Team&quot; Brasileiro</h2>
              <p className="fz-16">
                Na Da vinci Clinic, contamos com o mais especializado corpo
                clínico da América do Sul
              </p>
              <p className="fz-16">
                Nossos profissionais têm décadas de experiência com reabilitação
                de amputados, utilizando das técnicas mais avançadas somadas à o
                que há de mais tecnológico no mercado
              </p>
            </div>
          </div>
        </div>

        <div className="wild-padding">
          <div className="gallery col-12 rest">
            <div className="row justify-content-center">
              {data.gallery.map((item, index) => (
                <div className={`col-lg-3 col-md-6 items md-getter wow fadeInUp`} data-wow-delay=".4s" key={index}>
                  <div className="item-img">
                    <Link href="/project-details">
                      <a className="imago wow primery-shadow">
                        <img src={item.image} alt="image" />
                        <div className="cont text-light">
                      <h6 className="fz-14 fw-700 text-u ls1 mb-5">teste teste</h6>
                      <span className="fz-14 opacity-8">teste</span>
                      <div className="shape gr-sunrise-bg"></div>
                    </div>
                      </a>
                    </Link>
                  </div>
                  <div className="cont mt-30 text-center">
                    <h6 className="fw-500">{ item.title }</h6>
                    <p className="hover fz-16">{ item.type }</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
