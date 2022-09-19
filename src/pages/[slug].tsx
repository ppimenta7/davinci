import { NextPage } from "next";
import { BugetsInterface } from "../interfaces/bugetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { ProductsInterface } from "../interfaces/productsInterface";
import { getBugets } from "../services/getBugets";
import { getCategories } from "../services/getCategories";
import { getProducts } from "../services/getProducts";
import LandingPreview from "./landing-preview";

interface SlugInterface {
  bugets: BugetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  params: {
    slug: string;
  };
}

const Slug: NextPage<SlugInterface> = ({ bugets, products, categories }) => {
  return (
    <>
      <LandingPreview bugets={bugets} products={products} categories={categories}/>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const params = query.slug;

  const paramSplit = params.split("&")
  const id = typeof params === "string" ? paramSplit.at(-1) : "";

  const bugets = await getBugets(id);

  const IDproducts = bugets.products.join();
  const rest1 = await getProducts(IDproducts);
  const products = rest1.results

  const IDCategorys = products?.map((product) => { return product.category; });
  const categories = await getCategories(IDCategorys);

  return {
    props: {
      bugets,
      products,
      categories: categories.results,
    },
  };
};

export default Slug;
