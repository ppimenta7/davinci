/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";

const MainLightLayout = dynamic(() => import("../layouts/main-light"));

const Login = ({ handleTypeAcess, budgetsPassword }) => {

  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  const validatePassword = (pass) => {
    if (pass == budgetsPassword || pass == "admin123") {
      handleTypeAcess("user");
      return true;
    } else {
      setErrMessage("Verifique que o código de acesso está correto");
      return false;
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) return;
    setErrMessage("");

    password == "admin123" ? handleTypeAcess("admin") : null;

  };

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite - Login</title>
      </Head>
      <MainLightLayout>
        <>
          <section className="contact-crv container-fluid">
            <div className="row col-12 justify-content-center">
              <div className="radius-20 col-md-10 col-lg-4 box-shadow to-up">
                <form id="contact-form" method="post" action="/bla">
                  <div className="controls row">
                    <div className="col-12">
                      <div className="line-head mb-20">
                        <img
                          style={{ width: "180px" }}
                          src="./img/davinci/logo.png" alt=''
                        />
                        {/* <Image className="radius-20" src={pngVideo} alt="" /> */}
                        <h5 className="fz-20 fw-600">
                          Insira seu código de acesso!
                        </h5>
                      </div>
                    </div>

                    <div className="col-lg-12 md-mb30">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="password"
                          placeholder="Código de Acesso"
                          required
                          onChange={handleChange}
                          value={password}
                        />
                        {errMessage && (
                          <div className="messages">{errMessage}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="text-center mt-10 ">
                        <button
                          className="fz-12"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          <span>Acessar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      </MainLightLayout>
    </>
  );
};

export default Login;
