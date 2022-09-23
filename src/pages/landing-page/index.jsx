/* eslint-disable @next/next/no-css-tags */
// eslint-disable-next-line react/no-children-prop
import { useState, useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLightLayout from "../../layouts/main-light";
import Navbar from "../../components/Navbars/MainNavbar/index";
//= Components
import Header from "../../components/Business/Header";
import Services from "../../components/Business/Services";
import Team from "../../components/Business/Team";
import Portfolio1 from "../../components/Business/Portfolio1";
import Portfolio3 from "../../components/Business/Portfolio3";
import Pricing from "../../components/Business/Pricing";
import Testimonials from "../../components/Business/Testimonials";
import Footer from "../../components/Footers/MainFooter";
import About from "../../components/Business/About";
import Section from "../../components/Business/Section2";
import Info from "../../components/Business/Info";
import Login from "../../components/Business/Login";

const LandingPage = ({ bugets, products, categories }) => {
  const [acess, setAcess] = useState(false);

  const handleAcess = () => {
    setAcess(true)
  };

  useEffect(() => {
    document.body.classList.add("index-main");

    const removeClasses = [
      "index-bus1",
      "index-corporate",
      "index-restaurant",
      "index-arch",
      "index-freelancer",
      "cr-agency",
      "land-demo2",
      "mobile-app",
      "gr-orange-bg",
      "nft-market",
    ];

    document.body.classList.remove(...removeClasses);
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
          <>
            <Header bugets={bugets} />
            <main className="position-re">
              <Team />
              <Services />
              <Portfolio3 />
              <Portfolio1
                bugets={bugets}
                products={products}
                categories={categories}
              />
              <About products={products} categories={categories} />
              <Section />
              <Testimonials curve={true} />
              <Info />
              <Pricing bugets={bugets} />
              <Footer
                footerClass="main-footer bg-dark-blue bg-img"
                footerBg={true}
                business={true}
                creative={undefined}
              />
            </main>
          </>
        ) : (
          <Login handleAcess={handleAcess} bugetsPassword={bugets.password_access_code}/>
        )}
      </MainLightLayout>
    </>
  );
};

export default LandingPage;
