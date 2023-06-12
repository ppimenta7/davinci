/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { acessType } from "../../public/js/index";
import FixedSearch from '../components/Common/FixedSearch';
import Footer from '../components/Footers/MainFooter';
import About from '../components/Landing-Page/About';
import ExpiratePage from "../components/Landing-Page/ExpiratePage";
import Header2 from "../components/Landing-Page/Header2";
import Info from "../components/Landing-Page/Info";
import Portfolio from '../components/Landing-Page/Portfolio';
import Pricing from '../components/Landing-Page/Pricing';
import Section from "../components/Landing-Page/Section";
import Services from "../components/Landing-Page/Services";
import Team from "../components/Landing-Page/Team";
import Testimonials from "../components/Landing-Page/Testimonials";

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
  const expirationDate = new Date(budgets?.budgets.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  useEffect(() => {
    if(acessType == 'negate'){
     router.push(`/${params}`)
    }
  }, []);


  // console.log(acessType);
  // if(acessType == 'negate'){
  //   router.push(`/abc`)
  // }

  if(!status && acessType !== "admin") return <ExpiratePage />
  // if(acessType === 'admin'){
  //   return router.push(`/${params}`)
  // }

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