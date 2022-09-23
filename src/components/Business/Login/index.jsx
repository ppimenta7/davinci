/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const Login = ({ bugetsPassword, handleAcess }) => {
  const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState(null);

  const validatePassword = (pass) => {
    if (!pass || pass != bugetsPassword) {
      setErrMessage("Verifique que o código de acceso está correto");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) return; //= Validate Form

    setErrMessage(""); //= Clear Error Message

    handleAcess()
    // document.forms[0].submit(); //= Sumbit The Form
  };

  return (
      <section className="contact-crv container-fluid">
        <div className="row col-12 justify-content-center">
            <div className="radius-20 col-md-10 col-lg-4 box-shadow to-up">
              <form id="contact-form" method="post" action="/bla">
                <div className="controls row">
                  <div className="col-12">
                    <div className="line-head mb-20">
                      <img style={{width: "180px"}} src="./img/davinci/logo.png" />
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
                        required="required"
                        onChange={handleChange}
                        value={password}
                      />
                      {errMessage && <div className="messages">{errMessage}</div>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="text-center mt-10 ">
                      <button className="fz-12" type="submit" onClick={handleSubmit}>
                        <span>Acessar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </section>
  );
};

export default Login;
