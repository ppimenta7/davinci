import { NextPage } from "next";
import { BugetsInterface } from "../interfaces/bugetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBugets } from "../services/getBugets";
import { getCategories } from "../services/getCategories";
import { getCustomers } from "../services/getCustomers";
import { getProducts } from "../services/getProducts";
import dynamic from "next/dynamic";
import { getBugetsHistory } from "../services/getBugetsHistory";
const IndexPage = dynamic(() => import("."));

interface SlugInterface {
  pdf: boolean;
  bugets: BugetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  params: {
    slug: string;
  };
}
const Slug: NextPage<SlugInterface> = ({ pdf, bugets, products, categories, customers, params }) => {
  return (
    <>
      <IndexPage params={params} bugets={bugets} products={products} categories={categories} customers={customers} pdf={pdf}
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

  const type = params.includes("historico") ? 'historico' : (params.includes("pdf") ? 'pdf' : 'hotsite');
  const pdf = params.includes("pdf") ? true : false

  const paramSplit = params.split("&");
  const history = paramSplit[0].split("=");
  
  const historyID = history[0].replace(/historico/i, "").replace(/-pdf/i, "");
  const paramID = type == 'historico' ? historyID : paramSplit[1]

  const id = typeof params === "string" ? paramID : "";

  try {
    let bugets;
    if (type == 'historico') { bugets = await getBugetsHistory(id)}
    else { bugets = await getBugets(id)}

    const IDproducts = bugets.products.join()
    const products = await getProducts(IDproducts)
    let IDCategorys = [];
    for(let prop in products) { IDCategorys.push(products[prop].category); }
    
    const categories = await getCategories(IDCategorys)
    const customers = await getCustomers(bugets.customer);

    return {
      props: {
        bugets,
        products,
        categories,
        customers,
        pdf: pdf,
        params: params,
      },
    };
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
};

export default Slug;
