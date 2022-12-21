/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import ExpiratePage from "../components/Landing-Page/ExpiratePage";
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
import { acessType } from "../../public/js/index";
import { useRouter } from 'next/router';

interface IndexPageInterface {
  budgets: any;
}

const IndexPage: NextPage<IndexPageInterface> = ({
  budgets
}) => {
  const router = useRouter();
  const { query } = useRouter();
  const params = query.slug;

  const dateNow = new Date();
  const expirationDate = new Date(budgets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();
   
  if(!status && acessType !== "admin") return <ExpiratePage />

  if(acessType !== 'negate') return (
      <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>
          <>
            <FixedSearch />
            <Header2 />
            <Team />
            <Services />
            <Info />
            <Portfolio />
            <About
              budgets={budgets}
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
    router.push(`/${params}`)
};

export default IndexPage;