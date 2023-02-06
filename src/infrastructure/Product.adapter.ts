import { inject, injectable } from 'inversify';

import { FetcherI } from '@/infrastructure/Fetcher';
import { Types } from '@/infrastructure/Types';
import { ProductPort } from '@/ports/Product.port';
import { Product } from '@/infrastructure/Interfaces';

@injectable()
export class ProductAdapter implements ProductPort {
  public constructor(
    @inject(Types.FetcherI)
    public Fetcher: FetcherI,
  ) {}

  async getProducts(url: string): Promise<Product[]> {
    const { products } = await this.Fetcher.get(url);
    // ProductMapper.mapToDomain(products);
    return products;
  }
}
