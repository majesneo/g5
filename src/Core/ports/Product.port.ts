import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';

export interface ProductPort {
  getProducts(url: string): Promise<ProductEntity[]>;
}
