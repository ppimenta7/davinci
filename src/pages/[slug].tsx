import { NextPage } from "next";
import { BudgetsInterface } from "../interfaces/budgetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBudgets } from "../services/getBudgets";
import { getBudgetsHistory } from "../services/getBudgetsHistory";
import { getCategories } from "../services/getCategories";
import { getCustomers } from "../services/getCustomers";
import { getProducts } from "../services/getProducts";
import IndexPage from ".";
import Pdf from './pdf';
import NotFoundPage from './404';

interface SlugInterface {
  budgets: BudgetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  params: {
    includes(arg0: string): unknown;
    slug: string;
  };
  id: string;
}
const Slug: NextPage<SlugInterface> = ({
  params,
  id,
}) => {
    const pdf = params.includes("pdf") ? true : false;
    // if(pdf) return <Pdf budgets={budgets} products={products} customers={customers} />;
    if (params == undefined) return <NotFoundPage />;
    return (
      <IndexPage
        id={id}
        params={params}
      />
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const params = query.slug;

    const typeHistorico = params.includes("historico")

    const paramSplit = params.split("&");
    const history = paramSplit[0].split("=");

    const historyID = history[0].replace(/historico/i, "").replace(/-pdf/i, "");
    const paramID = typeHistorico ? historyID : paramSplit[1];

    const id = typeof params === "string" ? paramID : "";

    return {
      props: {
        id: id,
        params: params,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
};

export default Slug;