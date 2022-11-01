import support from "../../../data/business/support.json";

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
            De quem ainda vai passar por uma amputação àqueles que busca melhor
            sua qualidade de vida com próteses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio1;
