/* eslint-disable react/jsx-no-undef */
import support from "../../../data/business/support.json";
import DeleteIcon from "@mui/icons-material/Delete";
import { EscalatorWarning, Elderly, SportsHandball } from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import AbcIcon from "@mui/icons-material/Abc";

const Icons = [
  <EscalatorWarning key="" sx={{ fontSize: 100 }} />,
  <Elderly key="" sx={{ fontSize: 100 }} />,
  <SportsHandball key="" sx={{ fontSize: 100 }} />,
];

const Portfolio1 = () => {
  return (
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
  );
};

export default Portfolio1;
