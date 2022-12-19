import axios, { AxiosResponse } from "axios";
import { BudgetCompiledInterface } from "../interfaces/budgetCompiledInterface";
import { options } from "./getBudgets";

  // method: 'GET',
  // url: 'https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_compiled',
  // params: {budget_id: '36'},
  // headers: {Authorization: 'Bearer iDPFUFlHgBl8Yyv1eQrrD5qay1Tajie3kj73wVG0'}

export const getBudgetCompiled = async (
  id
): Promise<AxiosResponse<BudgetCompiledInterface>> => {
  const response = await axios.get(
    `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_compiled`,
    {
      params: { budget_id: `${id}` },
      headers: {
        Authorization: options.headers.Authorization,
        // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
      },
    }
  );

  return response.data.results;
};
