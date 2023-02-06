import { ActionTree, MutationTree } from 'vuex';
import { ProductServiceState, SliderServiceState } from '@/Core/infrastructure/Interfaces';
import { ProductService } from '@/Core/services/Product.service';
import { SliderService } from '@/Core/services/Slider.service';
import { container } from '@/Core/infrastructure/Inversify.config';
import { Types } from '@/Core/infrastructure/Types';

export interface StoreModule {
  state: ProductServiceState | SliderServiceState;
  actions?: ActionTree<ProductServiceState, {}> | ActionTree<SliderServiceState, {}>;
  mutations?: MutationTree<ProductServiceState> | MutationTree<SliderServiceState>;
}

export class StoreService {
  createModule(
    state: ProductServiceState | SliderServiceState,
    actions?: ActionTree<ProductServiceState, {}> | ActionTree<SliderServiceState, {}>,
    mutations?: MutationTree<ProductServiceState> | MutationTree<SliderServiceState>,
  ): StoreModule {
    return {
      state,
      actions,
      mutations,
    };
  }
}

const storeService = new StoreService();

const sliderService = container.get<SliderService>(Types.SliderService);
const productService = container.get<ProductService>(Types.ProductService);

export const productModule = storeService.createModule(
  productService.state(),
  productService.actions,
  productService.mutations,
);
export const sliderModule = storeService.createModule(
  sliderService.state(),
  sliderService.actions,
  sliderService.mutations,
);
