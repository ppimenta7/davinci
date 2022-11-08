import axios, { AxiosResponse } from "axios";
import { ProductsInterface } from "../interfaces/productsInterface";
import { CustomAxiosResponse } from "./axiosService";
import { options } from "./getBugets";

export const getProducts = async (
    IDproducts
  ): Promise<AxiosResponse<ProductsInterface[]|any>> => {
  
    const response = await axios.get(
      `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/collection/`,
      {
        params: { id__in: `${IDproducts}` },
        headers: {
          Authorization: options.headers.Authorization,
          // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
        },
      }
    );
  
    return response;
  };