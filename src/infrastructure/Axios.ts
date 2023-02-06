import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { FetcherI } from '@/infrastructure/Fetcher';
import { injectable } from 'inversify';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': 'false',
  'X-Requested-With': 'XMLHttpRequest',
};

@injectable()
export class Axios implements FetcherI {
  private headers = headers;

  private get axiosInstance(): AxiosInstance {
    return this.axiosInitInstance();
  }

  axiosInitInstance(): AxiosInstance {
    return axios.create({
      headers: this.headers,
      withCredentials: false,
    });
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(url);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getMultipleRequests<T>(url: string, quantity: number): Promise<T[]> {
    const promises:T[] = [];
    for (let i = 0; i < quantity; i++) {
      promises.push(await this.get(url));
    }
    try {
      return await Promise.all(promises);
    } catch (error) {
      throw error;
    }
  }
}
