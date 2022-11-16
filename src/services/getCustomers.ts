import axios, { AxiosResponse } from "axios";
import { CustomersInterface } from "../interfaces/customersInterface";
import { options } from "./getBudgets";

export const getCustomers = async (
  id
): Promise<AxiosResponse<CustomersInterface>> => {
  const response = await axios.get(
    `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/customers/`,
    {
      params: { id: id },
      headers: {
        Authorization: options.headers.Authorization,
        // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
      },
    }
  );

  return response.data.records[0];
};
