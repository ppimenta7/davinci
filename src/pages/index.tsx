/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage, NextPageContext } from "next";
import { useState } from "react";
import LandingPage from './landing-page';
import Login from './login';
import ExpiratePage from "../components/Landing-Page/ExpiratePage";
import { getBudgetsHistory } from "../services/getBudgetsHistory";
import { BudgetsInterface } from '../interfaces/budgetsInterface';
import { BudgetCompiledInterface } from '../interfaces/budgetCompiledInterface';
import { CategoriesInterface } from '../interfaces/categoriesInterface';

import Head from "next/head";
import FixedSearch from '../components/Common/FixedSearch';
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
import { getCategories } from "../services/getCategories";
import { ProductsInterface } from '../interfaces/productsInterface';
import { acessType } from "../../public/js/index";
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
interface IndexPageInterface {
  budgets: BudgetCompiledInterface;
  categories: CategoriesInterface;
}

const IndexPage: NextPage<IndexPageInterface> = ({
  budgets, categories
}) => {
  const router = useRouter();
  const { query } = useRouter()
  const params = Object.keys(query)[0]+"="+Object.values(query)[0]
  const dateNow = new Date();
  const expirationDate = new Date(budgets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  if(acessType == 'negate') router.push(`/${params}`)

  if(!status && acessType !== "admin") return <ExpiratePage />
  setTimeout(() => { destroyCookie(undefined, "token") }, 5000);
    
  return (
      <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>
          <>
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
          </>
    </>
    )
};

export default IndexPage;