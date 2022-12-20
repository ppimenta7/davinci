import services from "../../../data/business/services.json";
import Icon from "@mui/material/Icon";

import { Diversity1, Group, Handyman, RocketLaunch, VolunteerActivism } from "@mui/icons-material";
const Icons = [
  <Diversity1 key="" sx={{ fontSize: 65, fill: "url(#linearColors)" }} />,[],
  <VolunteerActivism key="" sx={{ fontSize: 65, fill: "url(#linearColors)" }} />,[],
  <RocketLaunch key="" sx={{ fontSize: 65, fill: "url(#linearColors)" }} />,
  <Handyman key="" sx={{ fontSize: 65, fill: "url(#linearColors)" }} />,
];

const Services = () => {
  return (
    <section className="services section-padding pt-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-40">
              <h2 className="fw-700 text-white text-u">Por que a Da Vinci?</h2>
            </div>
          </div>
        </div>

        <div className="col-10 row margin-rl-auto">
          {services.map((service, idx) => (
            <div className="col-lg-4 pb-15" key={service.id}>
              <div className="item shadw bord text-center">
                <div className="icon gr-sunrise-text fz-60 mb-15 rest">
                  <i
                    className={`gr-sunrise-text fas ${service.icon} i-span`}
                  ></i>
                  <svg width={0} height={0}>
                    <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1} >
                      <stop offset={0} stopColor="#fdc168" />
                      <stop offset={1} stopColor="#fb8080" />
                    </linearGradient>
                  </svg>
                  {Icons[idx]}
                </div>
                <h6 className="mb-15 margin-rl-25">{service.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
