import { Product } from '@/infrastructure/Interfaces';
import { ProductEntity } from '@/Domains/Entities/Product.entity';

export interface ProductPort {
  getProducts(url: string): Promise<Product[]>;
}
