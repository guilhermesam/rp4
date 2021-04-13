import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export type RequestConfig = AxiosRequestConfig;

export type Response<T = any> = AxiosResponse<T>;

export default class Request {
  constructor (private request = axios) {}

  public async get<T> (
    url: string,
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return this.request.get<T, Response<T>>(url, config)
  }

  public async post<T = any> (url: string, data: any, config: RequestConfig = {}) {
    return this.request.post<T, Response<T>>(url, data, config)
  }

  public static isRequestError (error: AxiosError): boolean {
    return !!(error.response && error.response.status)
  }
}
