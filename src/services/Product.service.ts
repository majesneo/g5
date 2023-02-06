import { ProductPort } from '@/ports/Product.port';
import { GetProductsQuery } from '@/usecases/getProductsQuery';
import { Types } from '@/infrastructure/Types';

import { Product, ProductServiceState } from '@/infrastructure/Interfaces';
import { Commit } from 'vuex';
import { inject, injectable } from 'inversify';

@injectable()
export class ProductService implements GetProductsQuery {
  private BASE_URL_PRODUCTS = 'https://dummyjson.com/products?limit=100';

  constructor(
    @inject(Types.ProductAdapter)
    public productAdapter: ProductPort,
  ) {}

  async getProductsQuery(): Promise<Product[]> {
    return await this.productAdapter.getProducts(this.BASE_URL_PRODUCTS);
  }

  createStore() {
    return {
      state: () => ({
        products: [] as Product[],
      }),
      mutations: {
        setProduct(state: ProductServiceState, products: Product[]) {
          state.products = products;
        },
      },
      actions: {
        getProducts: async ({ commit }: { commit: Commit }) => {
          const products = await this.productAdapter.getProducts(this.BASE_URL_PRODUCTS);
          console.log(products, 'product actions');
          commit('setProduct', products);
        },
      },
    };
  }
}
