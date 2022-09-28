import Image from "next/image";
//= Layout
import MainLightLayout from "../../../layouts/main-light";

const ExpiratePage = () => {
  return (
    <>
      <MainLightLayout>
        <main className="position-re">
          <section>
            <div className="container content-404 ">
              <div className="col-lg-4 justify-content-center text-center margin-rl-auto">
                <div>
                  <h1>Acesso Expirado</h1>
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

export default ExpiratePage;