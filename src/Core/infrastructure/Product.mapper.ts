import { Product } from '@/Core/infrastructure/Interfaces';
import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';

export class ProductMapper {
  public static mapToDomain(products: Product[]): ProductEntity[] {
    const productsEntity: ProductEntity[] = [];
    products.forEach((product) => {
      productsEntity.push(
        new ProductEntity(
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
          Math.floor(Math.random() * 4) + 1,
          0,
        ),
      );
    });
    return productsEntity;
  }
}
