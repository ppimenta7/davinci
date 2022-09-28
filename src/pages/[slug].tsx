import { NextPage } from "next";
import { BugetsInterface } from "../interfaces/bugetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBugets } from "../services/getBugets";
import { getCategories } from "../services/getCategories";
import { getCustomers } from "../services/getCustomers";
import { getProducts } from "../services/getProducts";
import LandingPage from "./landing-page";

interface SlugInterface {
  bugets: BugetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  params: {
    slug: string;
  };
}

const Slug: NextPage<SlugInterface> = ({
  bugets,
  products,
  categories,
  customers,
}) => {
  return (
    <>
      <LandingPage
        bugets={bugets}
        products={products}
        categories={categories}
        customers={customers}
      />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    const params = query.slug;

    const paramSplit = params.split("&");
    const id = typeof params === "string" ? paramSplit.at(-1) : "";

    const bugets = await getBugets(id).then((res) => res.data);
    const IDproducts = bugets.products.join();

    const products = await getProducts(IDproducts).then(
      (res) => res.data.results
    );

    const IDCategorys = await products.map(
      (products: ProductsInterface) => products.category
    );
    const categories = await getCategories(IDCategorys).then(
      (res) => res.data.results
    );

    const customers = await getCustomers(bugets.customer);

    return {
      props: {
        bugets,
        products,
        categories,
        customers,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
};

export default Slug;
