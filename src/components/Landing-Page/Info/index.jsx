import Image from "next/image";
import info from "../../../../public/img/davinci/info.png";

const Info = () => {
  return (
    <>
      <section className="work-carsouel section-padding" data-scroll-index="2">
        <div className="container">
          <div className="round-head text-center mb-20">
            <h2 className="text-u fz-35 pt-40">Nosso Método de Reabilitação</h2>
          </div>
          <div>
            <Image src={info} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
