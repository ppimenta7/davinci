import heroData from '../../../data/corporate/hero2.json';
import Video from '../../Project/Video';

const Hero = () => {
  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="hero-stu">
              <Video />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-text">
              <h6 className="sub-title gr-sunrise-text">What We Do ?</h6>
              <h3 className="fw-700 mb-15">{ heroData.sub_title }</h3>
              <p>
                { heroData.text }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero