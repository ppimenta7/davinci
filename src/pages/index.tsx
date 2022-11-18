import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from 'react';

import { BudgetsInterface } from "../interfaces/budgetsInterface";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomersInterface } from "../interfaces/customersInterface";
import { ProductsInterface } from "../interfaces/productsInterface";

const LandingPage = dynamic(() => import("./landing-page"));
const Pdf = dynamic(() => import("./pdf"));
const Login = dynamic(() => import("./login"));
const NotFoundPage = dynamic(() => import("./404"));

interface IndexPageInterface {
  budgets: BudgetsInterface;
  products: ProductsInterface;
  categories: CategoriesInterface;
  customers: CustomersInterface;
  params: any;
}

const IndexPage: NextPage<IndexPageInterface> = ({
  budgets,
  products,
  categories,
  customers,
  params,
}) => {

  const pdf = params?.includes("pdf") ? true : false;

  const [acessType, setAcessType] = useState("negate");
  const handleTypeAcess = (type: "admin" | "user" | "negate") => {
    setAcessType(type);
  };
  if (params == undefined) return <NotFoundPage />;
  if (pdf == true)
    return <Pdf budgets={budgets} products={products} customers={customers} />;
  else {
    return (
        acessType !== "negate" ? (
          <LandingPage budgets={budgets} products={products} categories={categories} customers={customers} acessType={acessType} />
        ) : (<Login
        handleTypeAcess={handleTypeAcess}
        budgetsPassword={budgets?.password_access_code}
      />)
    );
  }
};

export default IndexPage;
