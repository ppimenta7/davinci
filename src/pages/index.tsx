import { GetServerSideProps, NextPage } from "next";
import LandingPage from "./landing-page";
import { BugetsInterface } from "../interfaces/bugetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import Pdf from "./pdf";

interface IndexPageInterface {
  bugets: BugetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  pdf: boolean;
}

const IndexPage: NextPage<IndexPageInterface> = ({ bugets, products, categories, customers, pdf }) => {
  if (pdf == true) {
      return (
        <Pdf
        bugets={bugets}
        products={products}
        categories={categories}
        customers={customers}
      />
      );
  } else {
      return (
        <LandingPage
        bugets={bugets}
        products={products}
        categories={categories}
        customers={customers}
      />
      );
  }
};

export default IndexPage;