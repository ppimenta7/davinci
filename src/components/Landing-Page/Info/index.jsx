import info from "../../../data/business/info.json";
import { useEffect, useState } from "react";

const Info = () => {
  const [infoTitle, setInfoTitle] = useState(info[3].title)
  const [infoAbout, setInfoAbout] = useState(info[3].about)

    useEffect(() => {
      const slide1 = document.querySelector('.slide1')
      const span = document.querySelector('.slide')
      
      // document.onclick = function(event){
      //   console.log(event.target)
      // }

      document.onmouseover = function (event) {
        const path = event.target;
        const pathPai = event.target.parentNode;

          if(pathPai?.classList){
            pathPai.classList?.contains("cls") || path?.classList.contains("cls") || path?.classList.contains("cls-6") || path?.classList.contains("cls-7") || path?.classList.contains("cls-8")
              ? (span.style.display = "none", slide1.style.visibility = "visible") : (span.style.display = "flex", slide1.style.visibility = "hidden")

            pathPai?.classList.contains("item-1") ? (setInfoTitle(info[0].title), setInfoAbout(info[0].about)) : null;
            pathPai?.classList.contains("item-2") ? (setInfoTitle(info[1].title), setInfoAbout(info[1].about)) : null;
            pathPai?.classList.contains("item-3") ? (setInfoTitle(info[2].title), setInfoAbout(info[2].about)) : null;
            pathPai?.classList.contains("item-4") ? (setInfoTitle(info[3].title), setInfoAbout(info[3].about)) : null;
          }else{
            span.style.display = "flex",
            slide1.style.visibility = "hidden"
          }
      };

    }, []);
  

  return (
    <>
      <div className="container section-padding pb-0">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-20">
              <h2 className="text-u fz-35 pt-40">
                Nosso Método de Reabilitação
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section
        style={{ backgroundColor: "#ddd" }}
        className=" overlay-light-3 work-carsouel section-padding pt-30 pb-60 bg-light-gray"
        data-scroll-index="2"
      >
        <div className="container">
            <div className="row col-lg-10 col-md-12 margin-rl-auto justify-content-center">
              <div className="col-lg-5 col-md-10 valign justify-content-center">
                <svg
                  style={{ backgroundColor: '#fff',borderRadius: '50%'}}
                  id="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 961 952.9"
                >
                  <defs></defs>
                  <g id="Camada_2" data-name="Camada 2">
                    <g id="Camada_1-2" data-name="Camada 1">
                      <g className="item-1">
<path
                        className="cls cls-2"
                        d="M403.1,238.7A149.7,149.7,0,0,0,253.4,89a155.8,155.8,0,0,0-31.5,3.3l-1.5.2-6.9,1.2-4.4,1.1-9.9,3s-8.6,2.7-16.4,5.5c-5.2,1.9-42.3,18.5-88,76.2C58.2,225.7,41.6,266,37,277.8c-7.9,20.1-11.8,35.3-16.5,54C10.6,371-.5,414.2,0,471.9A459.1,459.1,0,0,0,61.7,698.5c1-26.4,4.8-50.5,16.3-72.9,13.4-32.6,36.4-57.4,65.8-76.9,22.2-14.8,47.3-22.7,73.3-28.3,18.2-.5,36.5-2.5,54.6,1,13,2.5,25.8,5.5,38.7,8.3a5.6,5.6,0,0,0,.6-2.2,23.6,23.6,0,0,0-.9-5.2c-17.6-61.4-5.8-115.2,32.1-163.2A149.3,149.3,0,0,0,403.1,238.7Z"
                      />
                      <path
                        className="cls-6"
                        d="M180.3,152.5c44-43.1,112.9-42.1,156.4,2.2s41.3,112.6-1.9,154.9a110.4,110.4,0,0,1-156.6-1.3C135.8,265.3,136.8,195.2,180.3,152.5Z"
                      />
                      <text
                        className="cls-7"
                        transform="translate(234.7 292.7)"
                      >
                        1
                      </text>
                      </g>
                      <g className="item-2">
                        <path
                        className="cls cls-3"
                        d="M864.9,217.5a32.9,32.9,0,0,0-.7-3.6s-.3-1.7-1-4.4-1.6-5.5-2.9-9.7c0,0-2.7-8.6-5.5-16.3-1.8-5.1-18.3-41.9-76.2-87.5-46.4-36.5-86.9-53.2-98.8-57.9-20.3-8-35.6-11.9-54.4-16.7C585.8,11.3,542.2,0,483.9,0A473,473,0,0,0,254.4,59c26.7,1.2,51,5.1,73.6,16.6,32.7,13.6,57.6,36.5,77.1,65.6,14.7,22.1,22.5,47,27.9,72.7.4,18,2.3,36-1.4,53.9-2.7,12.7-5.8,25.4-8.7,38.1a5.2,5.2,0,0,0,2.2.6,31.2,31.2,0,0,0,5.2-.8c61.3-16.7,114.9-5.2,162.4,31.3a151.5,151.5,0,0,0,123.8,63.9c83.8,0,151.8-67.9,151.8-151.7A150.2,150.2,0,0,0,864.9,217.5Z"
                      />
                      <path
                        className="cls-6"
                        d="M639.5,173c44-43.2,112.9-42.2,156.4,2.2s41.3,112.5-1.9,154.9a110.4,110.4,0,0,1-156.6-1.3C595,285.7,596,215.7,639.5,173Z"
                      />
                      <text
                        className="cls-7"
                        transform="translate(674.4 313.1)"
                      >
                        2
                      </text>
                      </g>
                      <g className="item-3">
                        <path
                        className="cls cls-4"
                        d="M960.9,477.3a457,457,0,0,0-63-227.5c-.9,26.6-4.7,50.8-16.3,73.4-13.6,32.7-36.9,57.6-66.6,77.3-22.5,14.9-47.9,22.9-74.3,28.6-18.5.6-37,2.6-55.4-.9-13.1-2.5-26.1-5.4-39.2-8.2a5.6,5.6,0,0,0-.6,2.2,31.5,31.5,0,0,0,.9,5.2c18.1,61.8,6.1,116.1-32.5,164.4a151.5,151.5,0,0,0-57.6,119c0,83.8,67.9,151.8,151.7,151.8a152.3,152.3,0,0,0,49.9-8.4l1.9-.6s8.7-2.7,16.6-5.6c5.2-1.8,42.8-18.6,89.1-76.7,37-46.5,53.7-87,58.4-98.9,8-20.2,11.9-35.4,16.6-54.2C950.4,578.7,961.6,535.3,960.9,477.3Z"
                      />
                      
                      
                      <path
                        className="cls-6"
                        d="M628.8,632.2c44-43.1,112.9-42.1,156.4,2.3s41.3,112.5-1.9,154.9a110.5,110.5,0,0,1-156.6-1.3C584.3,745,585.3,675,628.8,632.2Z"
                      />
                      <text
                        className="cls-8"
                        transform="translate(659.3 773.9)"
                      >
                        3
                      </text>
                      </g>
                      <g className="item-4">
<path
                        className="cls cls-5"
                        d="M632.6,871.5c-33.1-13.2-58.6-36.2-78.8-65.6-15.3-22.3-23.7-47.7-29.7-74-.8-18.4-3.1-36.9.2-55.3,2.4-13.2,5.2-26.3,7.8-39.4-.9-.2-1.6-.7-2.2-.6a31.8,31.8,0,0,0-5.2,1c-63.1,19.1-118.6,7.2-168.3-32.1A151.7,151.7,0,0,0,89,703.8c0,2.3,0,4.6.1,6.9a123.2,123.2,0,0,0,1.2,24c.4,2.5.8,4.8,1.3,7,0,0,.4,1.8,1.2,4.5s1.7,5.6,3.2,9.9c0,0,2.8,8.7,5.8,16.6,1.9,5.2,19.3,42.6,78.4,88.1,47.4,36.5,88.5,52.7,100.5,57.2,20.5,7.8,35.9,11.5,55,16,39.9,9.5,83.8,20.1,142.3,18.7A465.8,465.8,0,0,0,706.9,887C680,886.3,655.6,882.9,632.6,871.5Z"
                      />
                      
                      <path
                        className="cls-6"
                        d="M158.7,628.5c44-43.2,112.9-42.2,156.4,2.2s41.3,112.5-1.9,154.9a110.4,110.4,0,0,1-156.6-1.3C114.2,741.2,115.2,671.2,158.7,628.5Z"
                      />
                      <text
                        className="cls-7"
                        transform="translate(179.2 768.4)"
                      >
                        4
                      </text>
                      </g>

                      <path
                        className="cls-1"
                        d="M367.2,584.5c-57.8-60.1-60.3-161.8,7.4-223.6,60.1-54.9,156.8-58.5,220.2,9.7,58.6,63.2,55.4,154.8-2.3,213.7C524.6,653.7,425.4,644,367.2,584.5Z"
                      />
                      <image
                        className="cls-1-img"
                        width="139"
                        height="91"
                        transform="translate(367.1 403.2) scale(1.6)"
                        xlinkHref="data:image/png;base64,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"
                      />
                      
                    </g>
                  </g>
                </svg>
              </div>

              <div  className="col-lg-5 col-md-10 pt-25 valign flex-direction">
                <div className="container-content">
                    <div className="card col-12 col-lg-11 col-md-8">
                      <div className="slide">
                        <i className="icon" aria-hidden="true">
                          <span id="span-text" className="fz-18 text-dark fw-600">
                            Passe o mouse ou clique sobre os tópicos e veja mais
                          </span>
                        </i>
                      </div>
                      <div className="slide slide1">
                        <h3 className="fz-28">{infoTitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: infoAbout }} />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Info;
