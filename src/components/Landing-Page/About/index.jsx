/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import MyVerticallyCenteredModal from "../../../../public/js/modal";

const { htmlToText } = require("html-to-text");

const About = ({ categories, budgets }) => {
  const products = budgets?.products_json
  
  const bgTitle = budgets?.title;
  const title = bgTitle ? bgTitle.replace(/Orçamento para/g, "") : null;

  const [isOpen, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [productSelect, setProductSelect] = useState("");

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const strlenText = (text) => {
    if (text.length > 255) {
      return text.substring(0, 255) + "...";
    } else {
      return text;
    }
  };

  return (
    <>
      <div data-scroll-index="3">
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
        {products?.map((product) => (
          <section
            style={{ backgroundColor: "#f0f0f0" }}
            key={product.id}
            className="section-padding pt-0"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 valign">
                  <div className="intro-two-img full-width md-mb50">
                    <div className="img1">
                      <div className="svg-color">
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 288 288"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="100%"
                          id="blobSvg1"
                        >
                          <defs>
                            <linearGradient
                              id="gradient1"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop
                                offset="1000%"
                                style={{ stopColor: "#a5baca" }}
                              ></stop>
                              <stop
                                offset="0%"
                                style={{ stopColor: "#a5baca" }}
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path fill="url(#gradient1)" id="blob1" d="">
                            <animate
                              repeatCount="indefinite"
                              attributeName="d"
                              dur="12s"
                              values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                            />
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div className="img2">
                      <Image
                        src={product.image}
                        alt=""
                        layout="fill"
                        // width={'auto'}
                        // height={'auto'}
                      />
                      {/* {product.link_video && product.link_video != 'https://www.link-video.com' ? ( */}
                      {product.link_video ? (
                        <div className="play-button">
                          <a
                            href={product.link_video}
                            className="btn vid"
                            onClick={openVideo}
                          >
                            <svg
                              width="100px"
                              height="100px"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <circle
                                className="circle"
                                cx="50"
                                cy="50"
                                r="48"
                                stroke="white"
                                strokeWidth="2"
                                fill="none"
                              />
                            </svg>
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 valign">
                  <div className="content pl-50">
                    <h2 className="mb-20 fw-800">
                      {product.short_description}.{/* <br />{product.name}. */}
                      <span style={{ display: "block" }} className="blue-color">
                        {" "}
                        {categories?.map((category) =>
                          category.id == product.category ? category.name : ""
                        )}{" "}
                      </span>
                    </h2>

                    <p>{htmlToText(strlenText(product.details))}</p>
                    {product.details.length > 255 && (
                      <a
                        className="butn butn-md butn-orange-light text-u fw-700 radius-30 mt-30"
                        onClick={() => (
                          setModalShow(true), setProductSelect(product)
                        )}
                      >
                        <span className="text slide-up fz-15">Ver Mais</span>
                        <span className="text slide-down fz-15">Ver Mais</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {typeof window !== "undefined" && (
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="AzwC6umvd1s"
                onClose={() => setOpen(false)}
              />
            )}

            <MyVerticallyCenteredModal
              show={modalShow}
              product={productSelect}
              onHide={() => setModalShow(false)}
            />
          </section>
        ))}
      </div>
      <section className="process-simp position-re">
        <div className="curve-cls top">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 250"
            enableBackground="new 0 0 500 250"
            xmlSpace="preserve"
            preserveAspectRatio="none"
          >
            <path
              fill="#f5f5f5"
              d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default About;
