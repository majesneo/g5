import { GetProductsQuery } from '@/usecases/getProductsQuery';

export const Types = {
  SliderAdapter: Symbol.for('SliderAdapter'),
  SliderService: Symbol.for('SliderService'),
  SliderStore: Symbol.for('SliderStore'),
  FetcherI: Symbol.for('FetcherI'),
  Axios: Symbol.for('Axios'),
  getMultipleImagesQuery: Symbol.for('getMultipleImagesQuery'),
  SliderPort: Symbol.for('SliderPort'),
  AbstractVueCookiesService: Symbol.for('AbstractVueCookiesService'),
  ProductAdapter: Symbol.for('ProductAdapter'),
  ProductService: Symbol.for('ProductService'),
  ProductPort: Symbol.for('ProductPort'),
  GetProductsQuery: Symbol.for('GetProductsQuery'),
};
