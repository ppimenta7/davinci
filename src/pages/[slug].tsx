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

interface SlugInterface {
  budgets: BudgetsInterface;
  budgetCompiled: BudgetCompiledInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  type: 'pdf' | 'historico' | 'hotsite';
  params: {
    slug: string;
  };
}
const Slug: NextPage<SlugInterface> = ({
  type, budgetCompiled, categories,
}) => {
    if(type == 'pdf') return <Pdf budgets={budgetCompiled}/>;
    // if (params == undefined) return <NotFoundPage />;
    return (
      <IndexPage
        budgets={budgetCompiled} categories={categories}
      />
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const params = query.slug;

    const setType = () => {
      if(params.includes("pdf")) return "pdf"
      if(params.includes("historico")) return "historico" 
      return "hotsite"
    }
    const type = setType()
    const paramID = params.split("=")[1]
    const id = typeof params === "string" ? paramID : "";

    const budgets = type == 'historico' ? ( await getBudgetsHistory(id).then((res) => res.data))
      : (await getBudgetCompiled(id).then((res) => res[0]));

    const products = budgets?.products_json || budgets?.products;
    const IDCategorys = products?.map((product: ProductsInterface) => product?.category);
    const categories = await getCategories(IDCategorys);
    return {
      props: {
        id,
        type,
        budgetCompiled: budgets,
        categories,
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