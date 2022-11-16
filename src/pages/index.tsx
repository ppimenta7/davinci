import { NextPage } from "next";
import dynamic from "next/dynamic";

import { BudgetsInterface } from "../interfaces/budgetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";

const LandingPage = dynamic(() => import("./landing-page"));
const Pdf = dynamic(() => import("./pdf"));
const NotFoundPage = dynamic(() => import("./404"));

interface IndexPageInterface {
  budgets: BudgetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  pdf: boolean;
  params: any;
}

const IndexPage: NextPage<IndexPageInterface> = ({
  budgets,
  products,
  categories,
  customers,
  pdf,
  params,
}) => {
  if (params == undefined) return <NotFoundPage />;
  if (pdf == true)
    return <Pdf budgets={budgets} products={products} customers={customers} />;
  else {
    return (
      <LandingPage
        budgets={budgets}
        products={products}
        categories={categories}
        customers={customers}
      />
    );
  }
};

export default IndexPage;
