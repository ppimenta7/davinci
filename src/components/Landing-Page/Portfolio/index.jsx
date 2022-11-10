/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import features from "../../../data/business/features.json";

const Portfolio = ({ products, categories, bugets }) => {
  const bgTitle = bugets?.title;
  const title = bgTitle ? bgTitle.replace(/Orçamento para/g, "") : null;

  return (
    <>
      {/* <section
        className="work-carsouel crv section-padding pb-0 pt-30"
        data-scroll-index="2"
      >
        <div className="container">
            <div className="round-head text-center mb-20">
              <h2 className="orange-color text-u fz-35 pt-40 pb-30"><span className="fw-300 text-dark">Orçamento para</span>{title}</h2>
            </div>
      </div> 
      </section>*/}
      <section
        className="work-carsouel crv section-padding pb-30 pt-30 bg-color "
        data-scroll-index="2"
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-12">
            <div className="round-head text-center mb-40 ">
              {/* <h6 className="ls2 text-u fz-12 mb-15 gr-orange-text">
                Produtos<span></span>
              </h6> 
              <h2 className="orange-color text-u fz-35 pt-40 pb-30"><span className="fw-300">Orçamento para</span>{title}</h2>
            </div>
          </div> */}

            <section
              className="feat-exp"
              style={{ padding: 0 }}
              data-overlay-light="0"
            >
              <div className="container">
                <div className="row">
                  <div
                    className={`col-lg-4 'col-md-6' valign`}
                    style={{ paddingRight: "0" }}
                  >
                    <div className="exp">
                      <h3 className="fw-700">
                        As melhores
                        <span className="fw-300 block">
                          {" "}
                          próteses para VOCÊ
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`col-lg-5 col-md-6 valign`}
                    style={{ paddingLeft: "0", paddingRight: "50px" }}
                  >
                    <div className={`exp m-auto`}>
                      <div className="flex">
                        <h2
                          className={`lg-text feat-exp gr-green-text fw-700 line-height-1`}
                        >
                          +100
                        </h2>
                        <div className="valign ml-20">
                          <h6 className="text-u ls4 fz-14 line-height-28">
                            pacientes
                            <br /> reabilitados
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 valign"
                    style={{ paddingRight: "0" }}
                  >
                    <div className="text">
                      <p className="fz-16 text-white loader-container">
                        {features.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container pt-50">
                <div className="round-head text-center mb-20">
                  <h2
                    style={{ textDecoration: "underline" }}
                    className="orange-color text-u fz-35 pt-40 pb-30 underline"
                  >
                    <span className="fw-300 text-white">Orçamento para</span>
                    {title}
                  </h2>
                </div>
              </div> */}
            </section>

            {/* <div className="col-lg-12">
            <Swiper
              className="work-crsol position-re"
              slidesPerView="auto"
              spaceBetween={60}
              // loop={true}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <figure>
                    <Link href="/project-details">
                      <a>
                        <img src={product.image} alt="" />
                      </a>
                    </Link>
                  </figure>
                  <div className="cont">
                    <div className="info pr-30">
                      <span style={{padding:"1px 3px"}} className="fz-13 opacity-7 bg-gray-light text-black radius-5">{
              
              categories.map((category) => (
                category.id == product.category ? category.name : '' )
                )
              
            }</span>
                      <h6 className="fw-600 mt-5">
                        <Link href="/project-details">
                          <a>{product.nome}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
          </div>
        </div>
      </section>
      <div className="container pt-50">
        <div className="round-head text-center mb-20">
          <h2
            style={{ textDecoration: "underline" }}
            className="orange-color text-u fz-35 pt-40 pb-30 underline"
          >
            <span className="fw-600 text-black">Orçamento para</span>
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
