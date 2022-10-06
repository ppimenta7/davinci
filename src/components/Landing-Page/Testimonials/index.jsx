/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Controller } from "swiper";
import parallaxie from "../../../common/parallaxie";
import testimonials from "../../../data/business/testimonials.json";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Controller]);

const Testimonials = () => {
  const galleryTop = useRef();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    new parallaxie(".testimonials.bg-img.parallaxie");
  }, []);

  return (
    <>
      <section
        className="testimonials slider-thumbs section-padding pb-60 bg-img parallaxie"
        data-background={"img/davinci/d4.png"}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="round-head text-center mb-50">
                <h6 className="ls2 text-u fz-13 fw-600 mb-20 gr-green-text rest">
                  Feedbacks
                </h6>
                <h3 className="fw-700">Recomeços</h3>
              </div>
            </div>
            <div className="col-lg-8 col-md-10">
              <div>
                <Swiper
                  className="swiper-container gallery-top"
                  speed={350}
                  spaceBetween={10}
                  loop={true}
                  loopedSlides={4}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    galleryTop.current = swiper;
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                >
                  {testimonials.galleryTop.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="item">
                        <div className="text">
                          <p className="fz-20">{slide.content}</p>
                        </div>
                        <div className="info mt-30">
                          <h6 className="mb-5 text-u ls2 fw-700">
                            {slide.author.name}
                          </h6>
                          <span>{slide.author.position}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="controls-rf">
              <div
                className="swiper-button-next ctrl-circle"
                ref={navigationNextRef}
              >
                <span className="icon pe-7s-angle-right"></span>
              </div>
              <div
                className="swiper-button-prev ctrl-circle"
                ref={navigationPrevRef}
              >
                <span className="icon pe-7s-angle-left"></span>
              </div>
            </div>
          </div>
        </div>

          <div className="curve-top">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              width="1920"
              height="217"
              viewBox="0 0 1920 217"
            >
              <g fillRule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
                <path
                  d="M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z"
                  opacity=".3"
                ></path>
                <path
                  d="M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z"
                  opacity=".6"
                ></path>
                <path d="M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"></path>
              </g>
            </svg>
          </div>

        <div className="curve-buttom">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="217"
            viewBox="0 0 1920 217"
          >
            <g fillRule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
              <path
                d="M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z"
                opacity=".3"
              ></path>
              <path
                d="M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z"
                opacity=".6"
              ></path>
              <path d="M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"></path>
            </g>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
