/* eslint-disable @next/next/no-img-element */
import MainLightLayout from "../layouts/main-light";

const NotFoundPage = () => {
  return (
    <>
      <MainLightLayout>
        <main className="position-re">
          <section>
            <div className="container content-404 ">
              <div className="col-lg-4 justify-content-center text-center margin-rl-auto">
                <div className="content-icon">
                  <img
                    style={{ width: "50px" }}
                    src="/img/davinci/heartShape.png"
                    alt=""
                    className="img-fluid"
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
      </MainLightLayout>
    </>
  );
};

export default NotFoundPage;
