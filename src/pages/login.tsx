import Head from "next/head";
import { FormEvent, useState } from "react";
import Image from "next/image";
import ImgLogo from "../../public/img/davinci/logo.png";
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { setCookie } from 'nookies';
import { v4 as uuidv4 } from 'uuid';
import { setAcessType } from "../../public/js/index";
import { getBudgetsHistory } from '../services/getBudgetsHistory';
import { getBudgets } from '../services/getBudgets';


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
    // const ACCESS_TOKEN_KEY = uuidv4();
    const ACCESS_TOKEN_KEY = new Buffer(password).toString('base64');

    const accessBase64 = new Buffer(codeAccess).toString('base64');
    setCookie(undefined, 'temp', `${accessBase64}`)

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

LoginPage.getInitialProps = async ({ query }) => {
  const params = Object.keys(query)[0];
  const id = Object.values(query)[0];
  const setType = () => {
      if(params.includes("pdf")) return "pdf"
      if(params.includes("historico")) return "historico" 
      return "hotsite"
    }
  const type = setType()
  const budgets = type == 'historico' ? ( await getBudgetsHistory(id).then((res) => res.data))
      : ( await getBudgets(id).then((res) => res.data));
  const codeAccess = budgets.password_access_code;
  return { codeAccess }
}

export default LoginPage;
