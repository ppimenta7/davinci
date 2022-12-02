/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import { useState } from "react";
import LandingPage from './landing-page';
import Login from './login';
import ExpiratePage from "../components/Landing-Page/ExpiratePage";
import { useEffect } from 'react';
import { getBudgets } from "../services/getBudgets";
import { getBudgetsHistory } from "../services/getBudgetsHistory";

interface IndexPageInterface {
  id: string;
  params: any;
}

const IndexPage: NextPage<IndexPageInterface> = ({
  params, id,
}) => {


  const [acessType, setAcessType] = useState("negate");
  const handleTypeAcess = (type: "admin" | "user" | "negate") => {
    setAcessType(type);
  };

  const [budgets, setBudgets] = useState(null)

  useEffect(() => {
    const typeHistorico = params.includes("historico")
      
    typeHistorico ? (getBudgetsHistory(id).then((res) => res.data).then((data) => { setBudgets(data) }))
    : (getBudgets(id).then((res) => res.data).then((data) => { setBudgets(data) }));
  }, [])

  const dateNow = new Date();
  const expirationDate = new Date(budgets?.expiration_date);
  const status = expirationDate.getTime() >= dateNow.getTime();

  if(acessType == 'negate') return <Login handleTypeAcess={handleTypeAcess} budgetsPassword={budgets?.password_access_code} />

  if(!status && acessType !== "admin") return <ExpiratePage />
    
  return (
      <LandingPage budgets={budgets} />
    )
};

export default IndexPage;