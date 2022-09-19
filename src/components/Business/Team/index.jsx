/* eslint-disable @next/next/no-img-element */
import team from '../../../data/corporate/team.json';
import Video from '../../Project/Video';


const Team = () => {
  return (
    <section className="team-shape section-padding bg-gray" data-scroll-index="1">
      <div className="container-fluid">
      <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="section-head text-center pb-50">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">
                  Quem Somos
                </span>
              </h6>
              <h2>O &quot;Dream Team&quot; Brasileiro</h2>
              <p className="fz-16">
                Na Da vinci Clinic, contamos com o mais especializado corpo
                clínico da América do Sul
              </p>
              <p className="fz-16">
                Nossos profissionais têm décadas de experiência com reabilitação
                de amputados, utilizando das técnicas mais avançadas somadas à o
                que há de mais tecnológico no mercado
              </p>
            </div>
          </div>
        </div>
        <Video />
        <div className="row col-lg-10 col-md-12 pt-60 justify-content-center margin-rl-auto">
          {
            team.map((member, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="item md-mb50">
                  <div className="img">
                    <img src={member.picture} className="primery-shadow" alt="" />
                    <div className="cont text-dark">
                      {/* <h6 className="fz-14 fw-700 text-u ls1 mb-5">{ member.name }</h6>
                      <span className="fz-14 opacity-8">{ member.position }</span> */}
                      <hr/>
                      <p className="fz-14 opacity-8 text-dark">{ member.about }</p>
                      <div className="shape blue-light-bg"></div>
                    </div>
                    <div className="mt-30 mb-30 text-dark text-center bg-gray " stylle={{minHeight: "16vh"}}>
                    <h6 className="fw-500 mb-10 text-black blue-bg in" style={{padding: "5px 10px"}}>{ member.name }</h6>
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