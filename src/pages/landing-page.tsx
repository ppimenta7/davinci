/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import FixedSearch from '../components/Common/FixedSearch';
// import Header from "../components/Landing-Page/Header";
import Header2 from "../components/Landing-Page/Header2";
import Services from "../components/Landing-Page/Services";
import Team from "../components/Landing-Page/Team";
import Portfolio from '../components/Landing-Page/Portfolio';
import Pricing from '../components/Landing-Page/Pricing';
import Testimonials from "../components/Landing-Page/Testimonials";
import About from '../components/Landing-Page/About';
import Section from "../components/Landing-Page/Section";
import Info from "../components/Landing-Page/Info";
import Footer from '../components/Footers/MainFooter';
import { useEffect, useState } from 'react';
import { getCategories } from "../services/getCategories";
import { ProductsInterface } from '../interfaces/productsInterface';

const LandingPage = ({ budgets, categories }) => {
  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>
      <h1>Landing Page</h1>
          {/* <>
            <FixedSearch />
            <Header2 budgets={budgets} />
              <Team />
              <Services />
              <Info />
              <Portfolio />
              <About
                budgets={budgets}
                categories={categories}
              />
              <Pricing
                budgets={budgets}
              /> 
              <Section />
              <Testimonials />
              <Footer />
          </> */}
    </>
  );
};

export default LandingPage;