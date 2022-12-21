/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import parallaxie from "../../../common/parallaxie";
import { goToSection } from "../../Navbars/AppNavbar";
// import { Autoplay } from "swiper";
// import Video from "../../Video";
import Image from "next/image";
import ImgLogo from "../../../../public/img/davinci/d7.png";
import pngVideo from "../../../../public/img/davinci/png-video.png";

const Header = ({ }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    new parallaxie("header .background.bg-img.parallaxie");
  }, []);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <header className="home-bus1 position-re" data-scroll-index="0">
        <div
          // background-color='linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/davinci/fundo.jpg")'
          className="overlay-dark-6 background bg-img parallaxie valign"
          // data-background="img/davinci/fundo.jpg"
          // data-background="img/davinci/d2.png"
          data-background="img/davinci/image2.png"
        >
          <div className="container padding-rl-50">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="pr-30">
                <Image
                  src={ImgLogo}
                  alt=""
                  layout="fixed"
                  //width={"180px"}
                  //height={'auto'}
                />
              </div>
              <div
                className="row"
                style={{
                  borderLeft: "2px solid white",
                  paddingLeft: "10px",
                }}
              >
                <div className="social">
                  <ul className="rest">
                    <li>
                      <a href="https://www.facebook.com/davinciclinicbr">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/davincibrasil/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCa1K4UCwNtivaLBs_zF25VQ">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="fw-400 fz-16">
                    Cada prótese, Uma obra de arte
                  </h6>
                </div>
              </div>
            </div>
            <div style={{ flexDirection: "row" }} className="row">
              <div className="col-lg-7 col-md-4">
                <div className="caption">
                  <h1 className="fw-300 text-u fz-38 pt-40">
                    A{" "}
                    <span className="orange-color fw-600 ">
                      Seja Bem-vindo(a)
                    </span>{" "}
                    ao nosso Portal de orçamento!
                  </h1>
                  {/* <div className="">
                    {/* <Video /> 
                    <img
                      style={{ width: "300px" }}
                      src="/img/davinci/png-video.png"
                      alt=""
                    />
                  </div> */}
                  <p
                    style={{
                      backgroundColor: "#ccccccab",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: "black",
                    }}
                    className="fz-18"
                  >
                    Aqui, você poderá conhecer um pouco mais sobre nosso
                    trabalho e, mais abaixo, terá as informações técnicas e
                    financeiras do orçamento requisitado.
                  </p>
                  <a
                    href="#0"
                    data-scroll-nav={1}
                    className="butn butn-md butn-rounded butn-gradient mt-30"
                    onClick={(e) => goToSection(e, "#0")}
                  >
                    <span className="text text-u">Veja Mais</span>
                  </a>
                </div>
              </div>
              <div className="col-md-5 valign rest pl-15">
                {/* <div className="play-button">
                    <a
                      href="https://youtu.be/WRwJE1S7iuw"
                      className="vid"
                      onClick={openVideo}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>*/}
                <a
                  href="https://youtu.be/WRwJE1S7iuw"
                  className="vid"
                  onClick={openVideo}
                >
                  <Image className="radius-20" src={pngVideo} alt="" />
                </a>
              </div>
            </div>
          </div>
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
        {typeof window !== "undefined" && (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="WRwJE1S7iuw"
            onClose={() => setOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Header;
