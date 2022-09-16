/* eslint-disable @next/next/no-css-tags */
// eslint-disable-next-line react/no-children-prop
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
import Navbar from "../../components/Navbars/MainNavbar/index";
//= Components
import Header from '../../components/Business/Header';
import OurServices from '../../components/Business/OurServices';
import Team from '../../components/Business/Team';
import Portfolio1 from '../../components/Business/Portfolio1';
import Portfolio3 from '../../components/Business/Portfolio3';
import Pricing from '../../components/Business/Pricing';
import Testimonials from '../../components/Business/Testimonials';
import Footer from "../../components/Footers/MainFooter";
import About from '../../components/Business/About';
import Section from '../../components/Business/Section2';


const LandingPreview = ({ bugets, products, categories }) => {
  useEffect(() => {
    document.body.classList.add('index-main');

    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  const nav_links = [
    {
      name: "Home",
      href: "#0"
    },
    {
      name: "Equipe",
      href: "#0"
    },
    {
      name: "Produtos",
      href: "#0"
    },
    {
      name: "Detalhes",
      href: "#0"
    },
    {
      name: "Proposta",
      href: "#0"
    }
  ]

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>

      <MainLightLayout type="landing-preview" links={nav_links} navTheme="light" >
        <Header bugets={bugets}/>
        <main className="position-re">
          <OurServices />
          <Team />
          <Portfolio1 products={products} categories={categories}/>
          <About products={products} categories={categories}/>
          <Section />
          <Testimonials curve={true} />
          <Pricing bugets={bugets}/>
          <Footer footerClass="main-footer bg-dark-blue bg-img" footerBg={true} business={true} creative={undefined} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default LandingPreview;