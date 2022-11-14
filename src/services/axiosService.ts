import { AxiosResponse } from "axios";

export enum VariantEnum {
  Default = "info",
  Error = "error",
  Warning = "warning",
  Info = "info",
  Success = "success",
}

export interface CustomAxiosResponse<T> extends AxiosResponse<T> {
  [x: string]: any;
  message: string;
  variant: VariantEnum;
}