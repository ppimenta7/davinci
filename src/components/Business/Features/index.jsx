import Tilt from 'react-parallax-tilt';
import features from '../../../data/business/features.json';

const Features = ({ services }) => {
  return (
    <section className={`feat-exp section-padding ${services ? 'pb-50':'pb-0'} bg-gray-blue`} data-overlay-light="0">
      <div className="container">
        <div className="row">
          <div className={`col-lg-4 ${services ? '':'col-md-6'} valign`}>
            <div className="exp">
              {
                services ?
                <h2 className="fw-600">Create your own unique website</h2>
                :
                <h3 className="fw-700">Create your own <span className="fw-300">unique website</span></h3>
              }
            </div>
          </div>
          <div className={`col-lg-4 ${services ? '':'col-md-6'} valign`}>
            <div className={`exp ${services ? '':'m-auto'}`}>
              <div className="flex">
                <h2 className={`lg-text gr-green-text ${services ? 'fw-600':'fw-700 line-height-1'}`}>{ features.years }</h2>
                <div className="valign ml-20">
                  <h6 className="text-u ls4 fz-14 line-height-28">years <br /> in the field</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="text">
              {
                services ? <p>{ features.srtext }</p> : <p>{ features.text }</p>
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-lg mt-100">
        <div className="row justify-content-center">
          {
            features.feats.map((feature, idx) => (

                <div key={idx} className="col-lg-3 col-md-6 hover3d mb-50">
                  <div className="feat-item-img hover3d-child bg-img bg-light-op bg-center d-flex align-items-end primery-shadow" style={{ backgroundImage: `url('${feature.bg}')` }}>
                    <div className="num">{ feature.numb }</div>
                    <div className="cont bg-light">
                      <span className="fz-14 opacity-8 mb-5">{ feature.title }</span>
                      <h6 className="fz-20 fw-500">{ feature.type }</h6>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
      </div> */}
    </section>
  )
}

export default Features