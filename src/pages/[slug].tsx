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
    includes: any;
    slug: string;
  };
}
const Slug: NextPage<SlugInterface> = ({
  params,
  budgets,
}) => {
    const pdf = params.includes("pdf") ? true : false;
    // if(pdf) return <Pdf budgets={budgets} products={products} customers={customers} />;
    if (params == undefined) return <NotFoundPage />;
    return (
      <IndexPage
        budgets={budgets}
      />
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const params = query.slug;

    const typeHistorico = params.includes("historico")
    const paramSplit = params.split("&");

    let historyID = undefined;
    if(typeHistorico){historyID = paramSplit[0].split("=")[0].replace(/historico/i, "").replace(/-pdf/i, "");}

    const paramID = typeHistorico ? historyID : paramSplit[1];
    const id = typeof params === "string" ? paramID : "";

    const budgets = typeHistorico ? ( await getBudgetsHistory(id).then((res) => res.data))
      : (await getBudgets(id).then((res) => res.data));

    return {
      props: {
        id: id,
        params: params,
        budgets: budgets,
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