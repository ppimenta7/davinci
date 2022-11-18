import dynamic from "next/dynamic";
import Head from "next/head";

const MainLightLayout = dynamic(() => import("../layouts/main-light"));
const FixedSearch = dynamic(() => import("../components/Common/FixedSearch"));
// const Header = dynamic(() => import("../components/Landing-Page/Header"));
const Header2 = dynamic(() => import("../components/Landing-Page/Header2"));
const Services = dynamic(() => import("../components/Landing-Page/Services"));
const Team = dynamic(() => import("../components/Landing-Page/Team"));
const Portfolio = dynamic(() => import("../components/Landing-Page/Portfolio"));
const Pricing = dynamic(() => import("../components/Landing-Page/Pricing"));
const Testimonials = dynamic(() => import("../components/Landing-Page/Testimonials"));
const About = dynamic(() => import("../components/Landing-Page/About"));
const Section = dynamic(() => import("../components/Landing-Page/Section"));
const Info = dynamic(() => import("../components/Landing-Page/Info"));
const ExpiratePage = dynamic(() => import("../components/Landing-Page/ExpiratePage"));
const Footer = dynamic(() => import("../components/Footers/MainFooter"));

const LandingPage = ({ budgets, products, categories, customers, acessType }) => {
  const dateNow = new Date();
  const expirationDate = new Date(budgets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  return (
    <>
      <Head>
        <title>Davinci - Orçamento Hotsite</title>
      </Head>
      <MainLightLayout>
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
      </MainLightLayout>
    </>
  );
};

export default LandingPage;
