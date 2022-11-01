/* eslint-disable @next/next/no-img-element */
import team from "../../../data/business/team.json";
import Video from "../../Video";
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Team = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const timeID = (member) => {
    const nameMember = member.name.split(' ')
    const timeID = nameMember[0].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return timeID
  }

  return (
    <section className="team-shape section-padding" data-scroll-index="1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="section-head text-center">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">
                  Quem Somos
                </span>
              </h6>
              <h2>Experiência Conta</h2>
              <p className="fz-24">O &quot;Dream Team&quot; Brasileiro</p>
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

        <div className="sec-head">
          <div className="s-title valign justify-content-center flex-direction">
            <a href="https://youtu.be/hq8-I0N5BM4" onClick={openVideo}>
              <h6>
                <p>Conheça a equipe Da Vinci Clinic</p>
                <span
                  style={{ color: "black" }}
                  className="icon pe-7s-angle-right"
                ></span>
              </h6>
            </a>
            <div className="play-button">
              <a
                href="https://youtu.be/WRwJE1S7iuw"
                className="vid ttt"
                onClick={openVideo}
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="valign justify-content-center">
          <a
            href="https://youtu.be/hq8-I0N5BM4"
            onClick={openVideo}
            className="btn vid underline"
          >
            <span className="fw-500 fz-13 text-u">
              Conheça a equipe Da Vinci Clinic
            </span>
            <i className="fas fa-play fz-12 ml-5"></i>
          </a>
        </div> */}
        {/*<div className="row col-lg-8 col-md-10 margin-rl-auto">
          <Video /> 
        </div>*/}
        <div className="row col-lg-10 col-md-12 pt-60 justify-content-center margin-rl-auto">
          {team.map((member, index) => (
            <div className="card-team col-lg-3 col-md-6" key={index}>
              <div style={{ height: "100%" }} className="item md-mb50">
                <div className="img">
                  <img src={member.picture} className="primery-shadow" alt="" />
                  <div className="cont text-dark">
                    {/* <h6 className="fz-14 fw-700 text-u ls1 mb-5">{ member.name }</h6>
                      <span className="fz-14 opacity-8">{ member.position }</span> */}
                    <hr />
                    <p className="fz-14 opacity-8 text-dark">{member.about}</p>
                    <div className="shape"></div>
                  </div>
                  <div
                    className="mt-30 text-dark text-center bg-gray "
                    style={{ minHeight: "16vh" }}
                  >
                    <h6
                      className="fw-500 mb-10 text-black blue-bg in"
                      style={{ padding: "5px 10px" }}
                    >
                      {member.name}
                    </h6>
                    <p className="fz-16 pt-10">{member.position}</p>
                    {/* <span style={{textDecoration: "underline", color: "#ccc"}} className="fz-12">saiba mais</span> */}
                  </div>
                </div>
                {/* <div className="cont mt-30 mb-30 text-center bg-gray">
                    <h6 className="fw-500">{ member.name }</h6>
                    <p className="fz-16">{ member.position }</p>
                  </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="hq8-I0N5BM4"
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default Team;
