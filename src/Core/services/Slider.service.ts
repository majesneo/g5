import { inject, injectable } from 'inversify';

import { Types } from '@/Core/infrastructure/Types';
import { SliderPort } from '@/Core/ports/Slider.port';
import { Commit, MutationTree } from 'vuex';
import { getMultipleImagesQuery } from '@/Core/usecases/getMultipleImages';
import { SlideImage, SliderServiceState } from '@/Core/infrastructure/Interfaces';
import { CookiesAdapter } from '@/Core/infrastructure/VueCookies.adapter';
import { IMAGES_COOKIE_KEY } from '@/Core/constants';

@injectable()
export class SliderService implements getMultipleImagesQuery {
   BASE_URL_IMAGES = 'https://random.dog/woof.json';

   QUANTITY_IMAGES = 10;

  private COOKIE_EXPIRES_IN_MINUTES = '5min';

  private validTenImages: SlideImage[] = [];

  constructor(
    @inject(Types.SliderAdapter)
    public sliderAdapter: SliderPort,
    @inject(Types.VueCookiesAdapter)
    public VueCookiesAdapter: CookiesAdapter,
  ) {}

  async getTenImagesQuery(
    baseUrl = this.BASE_URL_IMAGES,
    quantity = this.QUANTITY_IMAGES,
  ) {
    const images = await this.sliderAdapter.getMultipleImages(baseUrl, quantity);
    this.validTenImages.push(...this.checkValidImages(images));
    if (this.validTenImages.length === this.QUANTITY_IMAGES) {
      this.VueCookiesAdapter.set(
        IMAGES_COOKIE_KEY,
        this.validTenImages,
        this.COOKIE_EXPIRES_IN_MINUTES,
      );
      return this.validTenImages;
    }
    await this.getTenImagesQuery(
      this.BASE_URL_IMAGES,
      this.QUANTITY_IMAGES - this.validTenImages.length,
    );
    return this.validTenImages;
  }

  checkValidImages(images: SlideImage[]): SlideImage[] {
    return images?.filter(
      (image) => !image?.url?.endsWith('.mp4') && !image?.url?.endsWith('.webm'),
    );
  }

  state() {
    return {
      slideImages: [] as SlideImage[],
    };
  }

   mutations:MutationTree<SliderServiceState> = {
     setImages(state: SliderServiceState, slideImages: SlideImage[]) {
       state.slideImages = slideImages;
     },
   };

   actions = {
     getTenImages: async ({ commit }: { commit: Commit }, images: SlideImage[]) => {
       if (images && images.length) {
         commit('setImages', images);
       } else {
         const slideImages = await this.getTenImagesQuery(
           this.BASE_URL_IMAGES,
           this.QUANTITY_IMAGES,
         );
         commit('setImages', slideImages);
       }
     },
   };
}
