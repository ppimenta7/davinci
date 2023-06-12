/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ImgHeart from "../../public/img/davinci/heartShape.png";

const NotFoundPage = () => {
  return (
    <main className="position-re">
      <section>
        <div className="container content-404 ">
          <div className="col-lg-4 justify-content-center text-center margin-rl-auto">
            <div className="content-icon">
              <Image
                className="img-fluid"
                src={ImgHeart}
                alt=""
                width={"50px"}
              />
            </div>
            <div>
              <h1>404 Erro!</h1>
              <p className="fz-18">
                A página que você está procurando não está disponível ou não
                pertencem a este site!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
