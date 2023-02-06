import { Product } from '@/infrastructure/Interfaces';
import { ProductEntity } from '@/Domains/Entities/Product.entity';

export class ProductMapper {
  public static mapToDomain(product: Product): ProductEntity {
    return new ProductEntity(
      product.id,
      product.title,
      product.description,
      product.price,
      product.discountPercentage,
      product.rating,
      product.stock,
      product.brand,
      product.category,
      product.thumbnail,
      product.images,
    );
  }
}
