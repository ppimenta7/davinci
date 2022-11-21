import axios, { AxiosResponse } from "axios";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { options } from "./getBudgets";

export const getCategories = async (
  IDCategorys
  ): Promise<AxiosResponse<CategoriesInterface[]|any>> => {
  
    const response = await axios.get(
      `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/categories/`,
      {
        params: { id__in: `${IDCategorys}` },
        headers: {
          Authorization: options.headers.Authorization,
          // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
        },
      }
    );
  
    return response.data.results;
  };