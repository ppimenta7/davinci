import axios, { AxiosResponse } from "axios";
import { BugetsHistoryInterface } from "../interfaces/bugetsHistoryInterface";
import { options } from "./getBugets";

export const getBugetsHistory = async (
  id
  ): Promise<AxiosResponse<BugetsHistoryInterface>> => {
  
    const response = await axios.get(
      `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_history/${id}/`,
      {
        headers: {
          Authorization: options.headers.Authorization,
          // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
        },
      }
    );
  
    return response.data;
  };