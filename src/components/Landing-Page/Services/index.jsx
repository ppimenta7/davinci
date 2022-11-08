import services from "../../../data/business/services.json";

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
          {services.map((service) => (
            <div className="col-lg-4 pb-15" key={service.id}>
              <div className="item shadw bord text-center">
                <div className="icon fz-50 mb-15 rest">
                  <i
                    className={`gr-sunrise-text fas ${service.icon} i-span`}
                  ></i>
                  <i className="fa-solid fa-house"></i>
                  {/* <span className={`${service.icon} gr-sunrise-text`}></span> */}
                </div>
                <h6 className="mb-15 margin-rl-25">{service.title}</h6>
                {/* <p>{service.detials}</p> */}
                {/* <div className="tag mt-30">
                    {service.tags.map((tag, i) => (
                      <a href="#0" className="me-1" key={i}>
                        <span>{tag}</span>
                      </a>
                    ))}
                  </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
