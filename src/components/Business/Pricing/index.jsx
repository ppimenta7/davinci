const Pricing = ({ bugets }) => {
  return (
    <section className="price section-padding gr-orange-bg-gr" data-scroll-index="4">
      <div className="container">
        <div className="price-table">
          <div className="row justify-content-center primery-shadow col-md-8 col-lg-6 margin-rl-auto">
                <div className={`item md-mb50`}>
                  <div className="round-head type">
                    <h6 className="ls2 text-u fz-12 mb-30">
                      Proposta <span></span>
                    </h6>
                  </div>
                  <div className="amount text-center">
                    <h3 className="full-width">
                      <span>R$</span>
                      {bugets.value}
                    </h3>
                  </div>
                  <div className="offer ">
                    <p>{bugets.comments_report}</p>
                  </div>
                  <div className="order text-center">
                    <a
                      href="#0"
                      className={`butn butn-md butn-icon-anim text-light radius-30 dark-blue-bg `}
                    >
                      <div className="text">
                        <span className="text-anim-two fz-12 fw-500 text-u ls2">
                          Ver PDF da Proposta
                        </span>
                        <span className="icon anim-two fz-12 fas fa-long-arrow-alt-right ml-10"></span>
                      </div>
                    </a>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
