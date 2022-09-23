import headerData from "../../../data/project/header.json";

const Info = () => {
  return (
    <>
      <section
        className="work-carsouel crv section-padding pt-30"
        data-scroll-index="2"
      >
        <div className="container">
          <div className="round-head text-center mb-20">
            <h2 className="text-u fz-35 pt-40">Nosso Método de Reabilitação</h2>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="img/davinci/info.png" alt="" />
          </div>
        </div>
      </section>
      <section className="process-simp position-re">
        <div className="curve-cls top">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 250"
            enableBackground="new 0 0 500 250"
            xmlSpace="preserve"
            preserveAspectRatio="none"
          >
            <path
              fill="#f5f5f5"
              d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Info;
