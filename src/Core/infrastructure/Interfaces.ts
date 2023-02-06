import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';

export interface SlideImage{
  url: string;
  fileSizeBytes: number;
}

export interface SliderServiceState {
  slideImages: SlideImage[];
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductServiceState {
  products: ProductEntity[]
}
