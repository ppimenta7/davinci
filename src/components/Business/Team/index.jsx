/* eslint-disable @next/next/no-img-element */
import team from '../../../data/corporate/team.json';

const Team = () => {
  return (
    <section className="team-shape section-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">Our Staff <span></span></h6>
              <h2 className="fw-700">Creative Minds</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {
            team.map((member, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="item">
                  <div className="img">
                    <img src={member.picture} className="primery-shadow" alt="" />
                    <div className="cont text-light">
                      <h6 className="fz-14 fw-700 text-u ls1 mb-5">{ member.name }</h6>
                      <span className="fz-14 opacity-8">{ member.position }</span>
                      <p className="fz-14 opacity-8 text-light">{ member.about }</p>
                      <div className="shape gr-sunrise-bg"></div>
                    </div>
                    <div className="mt-30 mb-30 text-light text-center bg-gray " stylle={{minHeight: "15vh"}}>
                    <h6 className="fw-500 text-black blue-bg in">{ member.name }</h6>
                    <p className="fz-16">{ member.position }</p>
                    </div>
                  </div>
                  {/* <div className="cont mt-30 mb-30 text-center bg-gray">
                    <h6 className="fw-500">{ member.name }</h6>
                    <p className="fz-16">{ member.position }</p>
                  </div> */}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team