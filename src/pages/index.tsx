/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage, NextPageContext } from "next";
import { useState } from "react";
import LandingPage from './landing-page';
import Login from './login';
import ExpiratePage from "../components/Landing-Page/ExpiratePage";
import { useEffect } from 'react';
import { getBudgets } from "../services/getBudgets";
import { getBudgetsHistory } from "../services/getBudgetsHistory";
import { BudgetsInterface } from '../interfaces/budgetsInterface';

interface IndexPageInterface {
  budgets: BudgetsInterface;
}

const IndexPage: NextPage<IndexPageInterface> = ({
  budgets,
}) => {
  const [acessType, setAcessType] = useState("negate");
  const handleTypeAcess = (type: "admin" | "user" | "negate") => {
    setAcessType(type);
  };

  const dateNow = new Date();
  const expirationDate = new Date(budgets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  if(acessType == 'negate') return <Login handleTypeAcess={handleTypeAcess} budgetsPassword={budgets?.password_access_code} />

  if(!status && acessType !== "admin") return <ExpiratePage />
    
  return (
      <LandingPage budgets={budgets} />
    )
};


// interface Context extends NextPageContext {
//   // any modifications to the default context, e.g. query types
// }

// IndexPage.getInitialProps = async (ctx) => {
//   // ...
//   return {
//       props: {
//         // id: id,
//         // params: params,
//       },
//     };
// }
export default IndexPage;