/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { FormEvent, useState } from "react";
import Image from "next/image";
import ImgLogo from "../../public/img/davinci/logo.png";
import { getBudgetCompiled } from '../services/getBudgetCompiled';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { setCookie } from 'nookies';
import { v4 as uuidv4 } from 'uuid';
import { setAcessType } from "../../public/js/index";


interface Props {
  codeAccess?: string;
}

const LoginPage: NextPage<Props> = ({ codeAccess }) => {

  const [errMessage, setErrMessage] = useState(null);

  const router = useRouter();
  const { query } = useRouter()
  const params = Object.keys(query)[0]+"="+Object.values(query)[0]
  // const params = "orcamento-para-solucao-de-amputacao-chopart=26"

  const validatePassword = (pass) => {
    if (pass == codeAccess || pass == "admin123") {
      setAcessType("user")
      return true;
    } else {
      setErrMessage("Verifique que o código de acesso está correto");
      return false;
    }
  };

    async function onSubmit(event: FormEvent) {
    event.preventDefault();

    const password = (document.querySelector("#password") as HTMLInputElement).value;
    const ACCESS_TOKEN_KEY = uuidv4();

    if (!validatePassword(password)) return;
    setErrMessage("");

    password == "admin123" ? setAcessType("admin") : null;

    if(password == "admin123" || password == codeAccess) {
      setCookie(undefined, 'token', `${ACCESS_TOKEN_KEY}`)
    }
    router.push(`/${params}`)
  }

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite - Login</title>
      </Head>
      <>
        <section className="contact-crv container-fluid">
          <div className="row col-12 justify-content-center">
            <div className="radius-20 col-md-10 col-lg-4 box-shadow to-up">
              <form id="contact-form" method="post" onSubmit={onSubmit}>
                <div className="controls row">
                  <div className="col-12">
                    <div className="line-head mb-20">
                      <Image
                        src={ImgLogo}
                        alt=""
                        width={"180px"}
                        // height={'auto'}
                      />
                      <h5 className="fz-20 fw-600">
                        Insira seu código de acesso!
                      </h5>
                    </div>
                  </div>

                  <div className="col-lg-12 md-mb30">
                    <div className="form-group mb-30">
                      <input
                        id="password"
                        type="text"
                        name="password"
                        placeholder="Código de Acesso"
                        required
                        // value={}
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
                        // onClick={handleSubmit}
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
    </>
  );
};

LoginPage.getInitialProps = async ({ req }) => {
  // const budgets = await getBudgetCompiled(36);
  // const codeAccess = budgets[0].['Password/Access Code'];
  return { codeAccess: '123456' }
}

export default LoginPage;
function uuid() {
  throw new Error('Function not implemented.');
}

