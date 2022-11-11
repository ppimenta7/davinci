import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const MainLightLayout = dynamic(() => import("../layouts/main-light"));
const FixedSearch = dynamic(() => import("../components/Common/FixedSearch"));
const Header = dynamic(() => import("../components/Landing-Page/Header"));
const Header2 = dynamic(() => import("../components/Landing-Page/Header2"));
const Services = dynamic(() => import("../components/Landing-Page/Services"));
const Team = dynamic(() => import("../components/Landing-Page/Team"));
const Portfolio = dynamic(() => import("../components/Landing-Page/Portfolio"));
const Pricing = dynamic(() => import("../components/Landing-Page/Pricing"));
const Testimonials = dynamic(() => import("../components/Landing-Page/Testimonials"));
const About = dynamic(() => import("../components/Landing-Page/About"));
const Section = dynamic(() => import("../components/Landing-Page/Section"));
const Info = dynamic(() => import("../components/Landing-Page/Info"));
const Login = dynamic(() => import("../components/Landing-Page/Login"));
const ExpiratePage = dynamic(() => import("../components/Landing-Page/ExpiratePage"));
const Footer = dynamic(() => import("../components/Footers/MainFooter"));

const LandingPage = ({ bugets, products, categories, customers }) => {

  const dateNow = new Date();
  const expirationDate = new Date(bugets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  const [acessType, setAcessType] = useState("");
  const handleTypeAcess = () => {
    setAcessType("admin");
  };

  const [acess, setAcess] = useState(false); //false
  const handleAcess = () => {
    setAcess(true);
  };

  useEffect(() => {
    document.body.classList.add("index-main");
  }, []);

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>

      <MainLightLayout>
        {acess ? (
          status || acessType == "admin" ? (
            <>
              <FixedSearch />
              {/* <Header bugets={bugets} /> */}
              <Header2 bugets={bugets} />
              <main className="position-re">
                <Team />
                <Services />
                <Info />
                <Portfolio />
                <About bugets={bugets} products={products} categories={categories} />
                <Pricing
                  bugets={bugets}
                  customers={customers}
                  products={products}
                />
                <Section />
                <Testimonials />
                <Footer />
              </main>
            </>
          ) : (
            <ExpiratePage />
          )
        ) : (
          <Login
            handleAcess={handleAcess}
            handleTypeAcess={handleTypeAcess}
            bugetsPassword={bugets?.password_access_code}
          />
        )}
      </MainLightLayout>
    </>
  );
};

export default LandingPage;
