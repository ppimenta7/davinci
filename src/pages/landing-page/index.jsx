/* eslint-disable @next/next/no-css-tags */
// eslint-disable-next-line react/no-children-prop
import { useState, useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLightLayout from "../../layouts/main-light";
import Navbar from "../../components/Navbars/MainNavbar/index";
//= Components
import Header from "../../components/Landing-Page/Header";
import Services from "../../components/Landing-Page/Services";
import Team from "../../components/Landing-Page/Team";
import Portfolio from "../../components/Landing-Page/Portfolio";
import Portfolio1 from "../../components/Landing-Page/Portfolio1";
import Pricing from "../../components/Landing-Page/Pricing";
import Testimonials from "../../components/Landing-Page/Testimonials";
import About from "../../components/Landing-Page/About";
import Section from "../../components/Landing-Page/Section";
import Info from "../../components/Landing-Page/Info";
import Login from "../../components/Landing-Page/Login";
import ExpiratePage from "../../components/Landing-Page/ExpiratePage";
import Footer from "../../components/Footers/MainFooter";

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

  const nav_links = [
    {
      name: "Home",
      href: "#0",
    },
    {
      name: "Equipe",
      href: "#0",
    },
    {
      name: "Produtos",
      href: "#0",
    },
    {
      name: "Detalhes",
      href: "#0",
    },
    {
      name: "Proposta",
      href: "#0",
    },
  ];

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>

      <MainLightLayout
        type="landing-preview"
        links={nav_links}
        navTheme="light"
      >
        {acess ? (
          status || acessType == "admin" ? (
            <>
              <Header bugets={bugets} />
              <main className="position-re">
                <Team />
                <Services />
                <Portfolio1 />
                <Portfolio
                  bugets={bugets}
                  products={products}
                  categories={categories}
                />
                <About products={products} categories={categories} />
                <Section />
                <Testimonials curve={true} />
                <Info />
                <Pricing
                  bugets={bugets}
                  customers={customers}
                  products={products}
                />
                <Footer
                  footerClass="main-footer bg-dark-blue bg-img"
                  footerBg={true}
                  business={true}
                  creative={undefined}
                />
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
