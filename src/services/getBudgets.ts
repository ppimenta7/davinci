import axios, { AxiosResponse } from "axios";
import { BudgetsInterface } from "../interfaces/budgetsInterface";

export const options = {
  headers: {
    Authorization: process.env.TOKEN_API_JETADMIN,
  },
};

export const getBudgets = async (
  id
): Promise<AxiosResponse<BudgetsInterface>> => {
  const response = await axios.get(
    `https://data.jetadmin.app/projects/da_vinci/prod/jet_database_8fl3/models/budget_generation/${id}/`,
    {
      headers: {
        Authorization: options.headers.Authorization,
        // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
      },
    }
  );

  return response;
};
