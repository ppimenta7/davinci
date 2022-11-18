import axios, { AxiosResponse } from "axios";
import { BudgetsHistoryInterface } from "../interfaces/budgetsHistoryInterface";
import { options } from "./getBudgets";

export const getBudgetsHistory = async (
  id
): Promise<AxiosResponse<BudgetsHistoryInterface>> => {
  const response = await axios.get(
    `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_history/${id}/`,
    {
      headers: {
        Authorization: options.headers.Authorization,
        // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
      },
    }
  );

  return response;
};
