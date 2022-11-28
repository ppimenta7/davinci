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

interface SlugInterface {
  budgets: BudgetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  params: {
    slug: string;
  };
}
const Slug: NextPage<SlugInterface> = ({
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

  const typeHistorico = params.includes("historico")

  const paramSplit = params.split("&");
  const history = paramSplit[0].split("=");

  const historyID = history[0].replace(/historico/i, "").replace(/-pdf/i, "");
  const paramID = typeHistorico ? historyID : paramSplit[1];

  const id = typeof params === "string" ? paramID : "";

  try {
    let budgets;
    typeHistorico ? (budgets = await getBudgetsHistory(id).then((res) => res.data))
    : (budgets = await getBudgets(id).then((res) => res.data));

    const IDproducts = budgets?.products.join();
    const products = await getProducts(IDproducts).then(
      (res) => res.data.results
    );

    const IDCategorys = products?.map((products: ProductsInterface) => products?.category);
    const categories = await getCategories(IDCategorys)

    const customers = await getCustomers(budgets?.customer).then(
      (res) => res.data.results[0]
    );

    return {
      props: {
        budgets,
        products,
        categories,
        customers,
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
