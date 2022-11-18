import { NextPage } from "next";
import dynamic from "next/dynamic";
import { BudgetsInterface } from "../interfaces/budgetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBudgets } from "../services/getBudgets";
import { getBudgetsHistory } from "../services/getBudgetsHistory";
import { getCategories } from "../services/getCategories";
import { getCustomers } from "../services/getCustomers";
import { getProducts } from "../services/getProducts";
const IndexPage = dynamic(() => import("."));

interface SlugInterface {
  pdf: boolean;
  budgets: BudgetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  params: {
    slug: string;
  };
}
const Slug: NextPage<SlugInterface> = ({
  pdf,
  budgets,
  products,
  categories,
  customers,
  params,
}) => {
  return (
    <>
      <IndexPage
        params={params}
        budgets={budgets}
        products={products}
        categories={categories}
        customers={customers}
        pdf={pdf}
      />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const params = query.slug;

  // const params = "orcamento-para-solucao-de-amputacao-chopart&19"
  // const params = "pdf=orcamento-para-solucao-de-amputacao-chopart&22"

  // const params = "historico2=orcamento-para-solucao-de-amputacao-chopart&22-versao=1"
  // const params = "historico-pdf3=orcamento-para-solucao-de-amputacao-chopart&22-versao=2"

  const type = params.includes("historico")
    ? "historico"
    : params.includes("pdf")
    ? "pdf"
    : "hotsite";
  const pdf = params.includes("pdf") ? true : false;

  const paramSplit = params.split("&");
  const history = paramSplit[0].split("=");

  const historyID = history[0].replace(/historico/i, "").replace(/-pdf/i, "");
  const paramID = type == "historico" ? historyID : paramSplit[1];

  const id = typeof params === "string" ? paramID : "";

  try {
    let budgets;
    if (type == "historico") {
      budgets = await getBudgetsHistory(id).then((res) => res.data);
    } else {
      budgets = await getBudgets(id).then((res) => res.data);
    }

    const IDproducts = budgets?.products.join();
    const products = await getProducts(IDproducts).then(
      (res) => res.data.results
    );
    let IDCategorys = [];
    for (let prop in products) {
      IDCategorys?.push(products[prop].category);
    }
    
    const categories = await getCategories(IDCategorys).then((res) => res.data.results);

    const customers = await getCustomers(budgets.customer).then((res) => res.data.results[0]);

    return {
      props: {
        budgets,
        products,
        categories,
        customers,
        pdf: pdf,
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
