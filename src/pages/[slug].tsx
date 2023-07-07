import { NextPage } from "next";
import { destroyCookie } from 'nookies';
import IndexPage from ".";
import { BudgetsInterface } from "../interfaces/budgetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBudgets } from '../services/getBudgets';
import { getBudgetsHistory } from "../services/getBudgetsHistory";
import { getCategories } from '../services/getCategories';
import { getCustomers } from '../services/getCustomers';
import { getProducts } from '../services/getProducts';
import Pdf from './pdf';

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
    if(type == 'pdf') return <Pdf budgets={budgetCompiled}/>;
    destroyCookie(undefined, "token");
    destroyCookie(undefined, "temp");
    return (
      <IndexPage budgets={budgetCompiled} />
      );
};

export const getServerSideProps = async ({ query, req}) => {
  const params = query.slug;
  const cookies = req.cookies;
  const Base64 = new Buffer('admin123').toString('base64');

  if(!cookies.token && (cookies.token != cookies.temp || cookies.token != Base64)) return {
      redirect: {
        destination: `/login?${params}`,
      },
    };
    const setType = () => {
      if(params.includes("pdf")) return "pdf"
      if(params.includes("historico")) return "historico"
      return "hotsite"
    }
  try {
    const type = setType()
    const paramID = params.split("=")[1]
    const id = typeof params === "string" ? paramID : "";

    // // const budgets = type == 'historico' ? ( await getBudgetsHistory(id).then((res) => res.data))
    // //   : (await getBudgetCompiled(id).then((res) => res[0]));

    // // const products = budgets?.products_json || budgets?.products;
    // // const IDCategorys = products?.map((product: ProductsInterface) => product?.category);

    const budgets = type == 'historico' ? ( await getBudgetsHistory(id).then((res) => res.data))
      : ( await getBudgets(id).then((res) => res.data));

    const IDproducts = budgets?.products.join();
    const products = await getProducts(IDproducts).then(
      (res) => res.data.results
    );

    const IDCategorys = products?.map((products: ProductsInterface) => products?.category);
    const IDCategorysFilter = IDCategorys.filter(category => category !== null)
    const categories = await getCategories(IDCategorysFilter)

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
    console.log('deu erro')
    // console.log(error);
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
};

export default Slug;