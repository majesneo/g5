import { inject, injectable } from 'inversify';

import { FetcherI } from '@/Core/infrastructure/Fetcher';
import { Types } from '@/Core/infrastructure/Types';
import { ProductPort } from '@/Core/ports/Product.port';
import { ProductMapper } from '@/Core/infrastructure/Product.mapper';
import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';

@injectable()
export class ProductAdapter implements ProductPort {
  public constructor(
    @inject(Types.FetcherI)
    public Fetcher: FetcherI,
  ) {}

  async getProducts(url: string): Promise<ProductEntity[]> {
    const { products } = await this.Fetcher.get(url);
    return ProductMapper.mapToDomain(products);
  }
}
