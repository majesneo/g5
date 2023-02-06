import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';

export interface GetProductsQuery {
  getProductsQuery(): Promise<ProductEntity[]>;
}
