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
import ExpiratePage from "../components/Landing-Page/ExpiratePage";
import Footer from '../components/Footers/MainFooter';

const LandingPage = ({ budgets, products, categories, customers, acessType }) => {
  const dateNow = new Date();
  const expirationDate = new Date(budgets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>
        {status || acessType == "admin" ? (
          <>
            <FixedSearch />
            {/* <Header budgets={budgets} /> */}
            <Header2 budgets={budgets} />
            <main className="position-re">
              <Team />
              <Services />
              <Info />
              <Portfolio />
              <About
                budgets={budgets}
                products={products}
                categories={categories}
              />
              <Pricing
                budgets={budgets}
                customers={customers}
                products={products}
              />
              <Section />
              <Testimonials />
              <Footer />
            </main>
          </>
        ) : ( <ExpiratePage />)}
    </>
  );
};

export default LandingPage;
