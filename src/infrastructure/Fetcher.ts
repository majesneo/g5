import { inject, injectable } from 'inversify';
import { Types } from '@/infrastructure/Types';

export interface FetcherI {
  get<T>(url: string): Promise<T>;
  getMultipleRequests<T>(url: string, quantity: number): Promise<T[]>;
}

@injectable()
export class Fetcher implements FetcherI {
  constructor(
    @inject(Types.Axios)
    private instance: FetcherI,
  ) {}

  async get<T>(url: string): Promise<T> {
    return await this.instance.get(url);
  }

  async getMultipleRequests<T>(url: string, quantity: number): Promise<T[]> {
    try {
      return await this.instance.getMultipleRequests(url, quantity);
    } catch (error) {
      console.log(error, 'error getMultipleRequests');
      const timeId = setTimeout(() => {
        this.getMultipleRequests(url, quantity);
        clearTimeout(timeId);
      }, 1000);
      return [];
    }
  }
}
