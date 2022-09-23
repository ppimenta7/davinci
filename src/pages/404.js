import { Head } from "next";
import Image from "next/image";
//= Layout
import MainLightLayout from "../layouts/main-light";

const NotFoundPage = () => {
  return (
    <>
      {/* <Head>
        <title>404 Error</title>
      </Head> */}
      <MainLightLayout>
        <main className="position-re">
          <section>
            <div className="container content-404 ">
              <div className="col-lg-4 justify-content-center text-center margin-rl-auto">
                <div className="content-icon">
                <Image width={50} height={50} src="/img/davinci/heartShape.png" alt="" className="img-fluid"/>
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
