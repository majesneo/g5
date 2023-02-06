import { Product } from '@/infrastructure/Interfaces';

export interface GetProductsQuery {
  getProductsQuery(): Promise<Product[]>;
}
