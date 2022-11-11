/* eslint-disable react/jsx-no-undef */
import support from "../../../data/business/support.json";
import DeleteIcon from "@mui/icons-material/Delete";
import { EscalatorWarning, Elderly, SportsHandball } from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import features from "../../../data/business/features.json";

const Icons = [
  <EscalatorWarning key="" sx={{ fontSize: 100 }} />,
  <Elderly key="" sx={{ fontSize: 100 }} />,
  <SportsHandball key="" sx={{ fontSize: 100 }} />,
];

const Portfolio = () => {
  return (
    <>
    <section className="portfolio-simp-crus pt-0 section-padding">
      <div className="container">
        <div className="row col-lg-10 col-md-12 pt-60 justify-content-center margin-rl-auto">
          {support.map((slide, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div
                style={{ backgroundImage: `url(${slide.image})` }}
                className="slide-item img info mt-20 text-center"
              >
                <div className="text-white margin-rl-auto" style={{opacity:'.5'}}>
                  {Icons[idx]}
                </div>

                {/* <i className={`text-white fas ${slide.icon} i-span`}></i> */}
                <h6 className="fw-600 text-u text-light fz-24">
                  {slide.title}
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pb-50 mt-30">
          <h2>Uma clínica para todos.</h2>
          <p className="col-6 fz-18 margin-rl-auto">
            De quem ainda vai passar por uma amputação àqueles que buscam
            melhorar sua qualidade de vida com próteses.
          </p>
        </div>
      </div>
    </section>
<section
        className="work-carsouel crv section-padding pb-30 pt-30 bg-color "
        data-scroll-index="2"
      >
        <div className="container">
          <div className="row">
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
            </section>
          </div>
        </div>
      </section>
      </>
  );
};

export default Portfolio;
