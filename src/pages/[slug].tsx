import { NextPage } from "next";
import { BudgetsInterface } from "../interfaces/budgetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBudgetCompiled } from "../services/getBudgetCompiled";
import { getBudgetsHistory } from "../services/getBudgetsHistory";
import IndexPage from ".";
import Pdf from './pdf';
import NotFoundPage from './404';
import { BudgetCompiledInterface } from '../interfaces/budgetCompiledInterface';
import { getCategories } from '../services/getCategories';
import { destroyCookie } from 'nookies';
import { getBudgets } from '../services/getBudgets';
import { getProducts } from '../services/getProducts';
import { getCustomers } from '../services/getCustomers';

interface SlugInterface {
  budgets: BudgetsInterface;
  // budgetCompiled: BudgetCompiledInterface;
  budgetCompiled: any;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  type: 'pdf' | 'historico' | 'hotsite';
  params: {
    slug: string;
  };
}
const Slug: NextPage<SlugInterface> = ({
  type, budgetCompiled,
}) => {
  console.log(budgetCompiled)
    if(type == 'pdf') return <Pdf budgets={budgetCompiled}/>;
    setTimeout(() => { destroyCookie(undefined, "token") }, 5000);
    return (
      <IndexPage budgets={budgetCompiled} />
      );
};

export const getServerSideProps = async ({ query, req}) => {
  const params = query.slug;
  const cookies = req.cookies;
  if(!cookies.token) return {
      redirect: {
        destination: `/login?${params}`,
      },
    };

  try {
    const setType = () => {
      if(params.includes("pdf")) return "pdf"
      if(params.includes("historico")) return "historico" 
      return "hotsite"
    }
    const type = setType()
    const paramID = params.split("=")[1]
    const id = typeof params === "string" ? paramID : "";

    // const budgets = type == 'historico' ? ( await getBudgetsHistory(id).then((res) => res.data))
    //   : (await getBudgetCompiled(id).then((res) => res[0]));

    // const products = budgets?.products_json || budgets?.products;
    // const IDCategorys = products?.map((product: ProductsInterface) => product?.category);
    // const categories = await getCategories(IDCategorys);



    const budgets = type == 'historico' ? ( await getBudgetsHistory(id).then((res) => res.data))
      : ( await getBudgets(id).then((res) => res.data));

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
        type,
        // budgetCompiled: budgets,
        budgetCompiled: {
          budgets,
          products,
          categories,
          customers,
        },
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