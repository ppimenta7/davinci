/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import parallaxie from "../../../common/parallaxie";
import { goToSection } from "../../Navbars/AppNavbar";
import { Autoplay } from "swiper";

const Header = ({ bugets }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    new parallaxie("header .background.bg-img.parallaxie");
  }, []);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const bgTitle = bugets?.title;
  const title = bgTitle ? bgTitle.replace(/Orçamento para/g, "") : null;
  return (
    <>
      <header className="home-bus1 position-re" data-scroll-index="0">
        <div
          className="background bg-img parallaxie valign"
          // data-background="img/davinci/fundo.jpg"
          // data-background="img/davinci/d3.png"
          data-background="img/davinci/image2.png"
          data-overlay-dark="4">
          <div className="container padding-rl-50">
            <div className="row">
              <div className="col-lg-8 col-md-10">
                <div className="caption">
                  <div style={{display:"flex", alignItems:"center"}}>
                    <div className="pr-30"> 
                      <img src="/img/davinci/d7.png" alt="" />
                    </div>
                    <div className="row" style={{borderLeft: "2px solid white", paddingLeft: "10px"}}>
                      <div className="social">
                        <ul className="rest">
                          <li>
                            <a href="https://www.facebook.com/davinciclinicbr"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/davincibrasil/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCa1K4UCwNtivaLBs_zF25VQ"><i className="fab fa-youtube"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="fw-400 fz-16">Cada prótese, Uma obra de arte</h6>
                      </div>
                    </div>
                  </div>
                  <h1 className="fw-300 text-u fz-40 pt-40">A <span className="orange-color fw-600 ">Da Vinci Clinic</span> é o centro de reabilitação mais avançado da América Latina </h1>
                  <p 
                  // style={{
                  //       backgroundColor:"#ccccccab",
                  //       padding: "5px 10px",
                  //       borderRadius: "10px",
                  //       color: "black",
                  //   }}
                  className="fz-18">A Da Vinci Clinic reúne os mais experientes profissionais do país que, juntos somam mais de 100 anos de experiência e milhares de pacientes reabilitados. Sua próxima experiência pode ser aqui</p>
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
              <div className="col-md-2 offset-lg-2 valign">
                <div className="full-width text-center">
                  <div className="play-button">
                    <a
                      href="https://youtu.be/WRwJE1S7iuw"
                      className="vid"
                      onClick={openVideo}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
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
