import { ProductPort } from '@/Core/ports/Product.port';
import { GetProductsQuery } from '@/Core/usecases/getProductsQuery';
import { Types } from '@/Core/infrastructure/Types';

import { ProductServiceState } from '@/Core/infrastructure/Interfaces';
import { Commit, MutationTree } from 'vuex';
import { inject, injectable } from 'inversify';
import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';

@injectable()
export class ProductService implements GetProductsQuery {
  BASE_URL_PRODUCTS = 'https://dummyjson.com/products?limit=100';

  constructor(
    @inject(Types.ProductAdapter)
    public productAdapter: ProductPort,
  ) {}

  state() {
    return {
      products: [] as ProductEntity[],
    };
  }

   actions = {
     getProducts: async ({ commit }: { commit: Commit }) => {
       const products = await this.getProductsQuery();
       commit('setProduct', products);
     },
     increaseProductTimer: ({ commit }: { commit: Commit }, productId:number) => {
       commit('increaseProductTimer', productId);
     },
     decreaseProductStock: ({ commit }: { commit: Commit }, productId:number) => {
       commit('decreaseProductStock', productId);
     },
     resetProductTimer: ({ commit }: { commit: Commit }, productId:number) => {
       commit('resetProductTimer', productId);
     },
   };

   mutations:MutationTree<ProductServiceState> = {
     setProduct(state: ProductServiceState, products: ProductEntity[]) {
       state.products = products;
     },
     increaseProductTimer(state: ProductServiceState, productId: number) {
       const product = state.products.find((p) => p.id === productId);
       if (product) {
         product.timer++;
       }
     },
     decreaseProductStock(state: ProductServiceState, productId: number) {
       const product = state.products.find((p) => p.id === productId);
       if (product) {
         product.stock--;
       }
     },
     resetProductTimer(state: ProductServiceState, productId: number) {
       const product = state.products.find((p) => p.id === productId);
       if (product) {
         product.timer = 0;
       }
     },
   };

   async getProductsQuery(): Promise<ProductEntity[]> {
     return await this.productAdapter.getProducts(this.BASE_URL_PRODUCTS);
   }
}
