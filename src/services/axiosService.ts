import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type Endpoint = string;
export type Body = any;
export type Token = string | undefined;
export type Otherheaders = AxiosRequestConfig;

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