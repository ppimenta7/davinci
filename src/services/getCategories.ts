import axios from "axios";
import { CategoriesInterface } from "../interfaces/categoriesInterface";
import { CustomAxiosResponse } from "./axiosService";
import { options } from "./getBugets";

export const getCategories = async (
  IDCategorys
  ): Promise<CustomAxiosResponse<CategoriesInterface[]>> => {
  
    const response = await axios.get(`https://cloud.jetadmin.io/api/models/categories/`,{
    params: {id__in: `${IDCategorys}`},
      headers: {
        Authorization: options.headers.Authorization,
        "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
      },
    });
  
    return response.data;
  };