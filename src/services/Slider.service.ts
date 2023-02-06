import { inject, injectable } from 'inversify';

import { Types } from '@/infrastructure/Types';
import { VueCookies } from 'vue-cookies';
import { SliderPort } from '@/ports/Slider.port';
import { Commit } from 'vuex';
import { getMultipleImagesQuery } from '@/usecases/getMultipleImages';
import { SlideImage, SliderServiceState } from '@/infrastructure/Interfaces';
import { IMAGES_COOKIE_KEY } from '@/constants';

@injectable()
export class SliderService implements getMultipleImagesQuery {
  private BASE_URL_IMAGES = 'https://random.dog/woof.json';

  private QUANTITY_IMAGES = 10;

  private COOKIE_EXPIRES_IN_MINUTES = '5min';

  private validTenImages: SlideImage[] = [];

  constructor(
    @inject(Types.SliderAdapter)
    public sliderAdapter: SliderPort,
    @inject(Types.AbstractVueCookiesService)
    public abstractVueCookiesService: VueCookies,
  ) {}

  async getTenImages(
    baseUrl = this.BASE_URL_IMAGES,
    quantity = this.QUANTITY_IMAGES,
  ) {
    const images = await this.sliderAdapter.getMultipleImages(baseUrl, quantity);
    this.validTenImages.push(...this.checkValidImages(images));

    if (this.validTenImages.length === this.QUANTITY_IMAGES) {
      this.abstractVueCookiesService.set(
        IMAGES_COOKIE_KEY,
        this.validTenImages,
        this.COOKIE_EXPIRES_IN_MINUTES,
      );
      return this.validTenImages;
    }
    await this.getTenImages(this.BASE_URL_IMAGES, this.QUANTITY_IMAGES - this.validTenImages.length);
    return this.validTenImages;
  }

  checkValidImages(images: SlideImage[]): SlideImage[] {
    return images?.filter(
      (image) => !image?.url?.endsWith('.mp4') && !image?.url?.endsWith('.webm'),
    );
  }

  createStore() {
    return {
      state: () => ({
        slideImages: [] as SlideImage[],
      }),
      mutations: {
        setImages(state: SliderServiceState, slideImages: SlideImage[]) {
          state.slideImages = slideImages;
        },
      },
      actions: {
        getTenImages: async ({ commit }: { commit: Commit }, images: SlideImage[]) => {
          console.log('images', images);
          if (images && images.length) {
            commit('setImages', images);
            this.abstractVueCookiesService.remove(IMAGES_COOKIE_KEY);
          } else {
            const slideImages = await this.getTenImages();
            console.log('slideImages', slideImages);
            commit('setImages', slideImages);
          }
        },
      },
    };
  }
}
