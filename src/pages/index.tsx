import { GetServerSideProps, NextPage } from "next";
import LandingPage from "./landing-page";
import { BugetsInterface } from "../interfaces/bugetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import Pdf from "./pdf";
import NotFoundPage from "./404"

interface IndexPageInterface {
  bugets: BugetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  pdf: boolean;
  params: any;
}

const IndexPage: NextPage<IndexPageInterface> = ({ bugets, products, categories, customers, pdf, params }) => {
  return params == undefined ? <NotFoundPage /> : (
    pdf == true ? 
        <Pdf bugets={bugets} products={products} categories={categories} customers={customers} />
      : <LandingPage bugets={bugets} products={products} categories={categories} customers={customers} />
      );
};

export default IndexPage;