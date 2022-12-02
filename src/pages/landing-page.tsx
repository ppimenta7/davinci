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
import { getProducts } from '../services/getProducts';
import { getCategories } from "../services/getCategories";
import { getCustomers } from "../services/getCustomers";
import { ProductsInterface } from '../interfaces/productsInterface';

const LandingPage = ({ budgets }) => {
  const [products, setProducts] = useState(null)
  const [categories, setCategories] = useState(null)
  const IDCustomer = budgets?.customer;

  useEffect(() => {
    async function fetchData() {
      const IDproducts = budgets?.products.join();
      const productsA = await getProducts(IDproducts).then((res) => res.data.results);
       setProducts(await productsA)

      const IDCategorys = productsA?.map((products: ProductsInterface) => products?.category);
      console.log(IDCategorys)
      const categoriesA = await getCategories(IDCategorys);
       setCategories(categoriesA);
    }
    fetchData();
  },[]);

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
                products={products}
                categories={categories}
              />
              <Pricing
                budgets={budgets}
                IDCustomer={IDCustomer}
                products={products}
              /> 
              <Section />
              <Testimonials />
              <Footer />
          </>
    </>
  );
};

export default LandingPage;