import { NextPage } from "next";
import dynamic from "next/dynamic";

import { BugetsInterface } from "../interfaces/bugetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";

const LandingPage = dynamic(() => import("./landing-page"));
const Pdf = dynamic(() => import("./pdf"));
const NotFoundPage = dynamic(() => import("./404"));

interface IndexPageInterface {
  bugets: BugetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  pdf: boolean;
  params: any;
}

const IndexPage: NextPage<IndexPageInterface> = ({ bugets, products, categories, customers, pdf, params }) => {
  if(params == undefined) return <NotFoundPage />;
  if(pdf == true ) return <Pdf bugets={bugets} products={products} customers={customers} />;
  else{
    return <LandingPage bugets={bugets} products={products} categories={categories} customers={customers} />
  }
};


export default IndexPage;