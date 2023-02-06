<template>
  <main class="main" :style="`padding:${screenSizePadding}`">
    <div class="slider-container">
      <ArrowsSlider
        :arrows="slideImages.length > 1"
        @next="handleNextClick"
        @prev="handlePrevClick"
      />
      <TheSlider ref="carousel" :options="carouselOptions">
        <SwiperSlide :lazy="true" v-for="image in slideImages" :key="image?.url">
          <BaseImage
            loading="lazy"
            :max-width="`100%`"
            :max-height="`100%`"
            width="100%"
            height="100%"
            :src="image?.url"
          />
        </SwiperSlide>
      </TheSlider>
    </div>

    <ProductContainer :screenSize="screenSize">
      <ProductCard
        :screenSize="screenSize"
        v-for="product in products"
        :product="product"
        :key="product?.id"
      />
    </ProductContainer>
  </main>
</template>

<script lang="ts">
import {
  Component, Prop, Ref, Vue,
} from 'vue-property-decorator';
import { SwiperOptions } from 'swiper/types/swiper-options';
import TheSlider from '@/components/TheSlider.vue';
import SliderItem from '@/components/SliderItem.vue';
import ArrowsSlider from '@/components/ArrowsSlider.vue';
import { Product, SlideImage } from '@/infrastructure/Interfaces';
import BaseImage from '@/components/BaseImage.vue';
import { IMAGES_COOKIE_KEY } from '@/constants';
import ProductCard from '@/components/ProductCard.vue';
import ProductContainer from '@/components/ProductContainer.vue';
import { SCREEN_SIZE_MAP } from '@/common/getScreenSize';
import TheBadge from '@/components/TheBadge.vue';
import { Swiper, SwiperSlide } from '../../node_modules/swiper/vue/swiper-vue';

@Component({
  components: {
    TheBadge,
    ProductContainer,
    ProductCard,
    SwiperSlide,
    BaseImage,
    ArrowsSlider,
    TheSlider,
    SliderItem,
  },
})
export default class TheMain extends Vue {
  @Prop({ type: Object })
  screenSize!: SCREEN_SIZE_MAP;

  carouselOptions: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1920: { slidesPerView: 3, spaceBetween: 30 },
      834: { slidesPerView: 3, spaceBetween: 30 },
      744: { slidesPerView: 1, spaceBetween: 30 },
      430: { slidesPerView: 1 },
      375: { slidesPerView: 1 },
      320: { slidesPerView: 1 },
    },
  };

  beforeMount() {
    this.checkCookieForImage();
    if (!this.slideImages.length) {
      this.$store.dispatch('getTenImages');
    }
    this.$store.dispatch('getProducts');
  }

  updated() {
    if (this.updateCarousel) {
      this.updateCarousel = false;
      this.swiper.update();
    }
  }

  checkCookieForImage() {
    const images = this.$cookies.get(IMAGES_COOKIE_KEY);
    if (images && images.length) {
      this.$store.dispatch('getTenImages', images);
    }
  }

  get products(): Product[] {
    return this.$store.state.ProductService.products;
  }

  get slideImages(): SlideImage[] {
    return this.$store.state.SliderService.slideImages;
  }

  @Ref() readonly carousel!: typeof Swiper;

  updateCarousel = false;

  get swiper(): typeof Swiper {
    return this.carousel.swiper!;
  }

  handleNextClick(): void {
    this.swiper.slideNext();
  }

  handlePrevClick(): void {
    this.swiper.slidePrev();
  }

  get screenSizePadding() {
    return this.screenSize.XXL
      ? '0 267px'
      : this.screenSize.XL
        ? '0 75px'
        : this.screenSize.LG_XL
          ? '0 43px'
          : this.screenSize.LG
            ? '0 59px'
            : this.screenSize.LG_MD
              ? '0 9px'
              : this.screenSize.MD
                ? '0 43px'
                : this.screenSize.MD_SM
                  ? '0 9px'
                  : this.screenSize.SM_MD
                    ? '0 9px'
                    : this.screenSize.SM
                      ? '0 25px'
                      : this.screenSize.XS
                        ? '0 22px'
                        : '0 267px';
  }
}
</script>
<style scoped lang="less">
.slider-container {
  position: relative;
  margin-bottom: 52px;
}
</style>
