/* eslint-disable @next/next/no-css-tags */
// eslint-disable-next-line react/no-children-prop
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import MainLightLayout from "../layouts/main-light";
import Navbar from "../components/Navbars/MainNavbar/index";
import FixedSearch from "../components/Common/FixedSearch";

const Header = dynamic(() => import("../components/Landing-Page/Header"));
const Services = dynamic(() => import("../components/Landing-Page/Services"));
const Team = dynamic(() => import("../components/Landing-Page/Team"));
const Portfolio = dynamic(() => import("../components/Landing-Page/Portfolio"));
const Portfolio1 = dynamic(() => import("../components/Landing-Page/Portfolio1"));
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

      <MainLightLayout links={nav_links}>
        {acess ? (
          status || acessType == "admin" ? (
            <>
              <FixedSearch />
              <Header bugets={bugets} />
              <main className="position-re">
                <Team />
                <Services />
                <Info />
                <Portfolio1 />
                <Portfolio
                  bugets={bugets}
                  products={products}
                  categories={categories}
                />
                <About products={products} categories={categories} />
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
