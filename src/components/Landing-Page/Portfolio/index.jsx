import support from "../../../data/business/support.json";
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ElderlyIcon from '@mui/icons-material/Elderly';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

const Icons = [
  <EscalatorWarningIcon key="" sx={{ fontSize: 100 }} />,
  <ElderlyIcon key="" sx={{ fontSize: 100 }} />,
  <SportsHandballIcon key="" sx={{ fontSize: 100 }} />,
];

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-simp-crus section-padding">
        <div className="container">
          <div className="row col-lg-10 col-md-12 pt-60 justify-content-center margin-rl-auto">
            {support.map((slide, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div
                  style={{ backgroundImage: `url(${slide.image})` }}
                  className="slide-item img info mt-20 text-center"
                >
                  <div
                    className="text-white margin-rl-auto"
                    style={{ opacity: ".5" }}
                  >
                    {Icons[idx]}
                  </div>
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
                        Com apenas 2 anos de mercado, no seu primeiro ano de
                        vida, a Da Vinci Clinic já reabilitou mais de 100
                        pacientes! E você também pode ser um deles...
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
