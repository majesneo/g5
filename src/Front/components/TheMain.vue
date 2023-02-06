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
        v-for="product in products"
        :screenSize="screenSize"
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
import TheSlider from '@/Front/components/Slider/TheSlider.vue';
import SliderItem from '@/Front/components/Slider/SliderItem.vue';
import ArrowsSlider from '@/Front/components/Icons/ArrowsSlider.vue';
import { SlideImage } from '@/Core/infrastructure/Interfaces';
import BaseImage from '@/Front/components/BaseImage.vue';
import ProductCard from '@/Front/components/Product/ProductCard.vue';
import ProductContainer from '@/Front/components/Product/ProductContainer.vue';
import { SCREEN_SIZE_MAP } from '@/Core/common/getScreenSize';
import TheBadge from '@/Front/components/TheBadge.vue';
import { IMAGES_COOKIE_KEY } from '@/Core/constants';
import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

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
    slidesPerView: 3,
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

  mounted() {
    this.startTimer();
  }

  updated() {
    if (this.updateCarousel) {
      this.updateCarousel = false;
      this.swiper.update();
    }
  }

  startTimer() {
    setInterval(() => {
      this.products.forEach((product) => {
        this.$store.dispatch('increaseProductTimer', product.id);
        if (product.timer === product.interval && product.stock > 0) {
          this.$store.dispatch('decreaseProductStock', product.id);
          this.$store.dispatch('resetProductTimer', product.id);
        }
      });
    }, 1000);
  }

  checkCookieForImage() {
    const images = this.$cookies.get(IMAGES_COOKIE_KEY);
    if (images && images.length) {
      this.$store.dispatch('getTenImages', images);
    }
  }

  get products(): ProductEntity[] {
    return this.$store.state.productModule.products;
  }

  get slideImages(): SlideImage[] {
    return this.$store.state.sliderModule.slideImages;
  }

  @Ref() readonly carousel!: typeof Swiper;

  updateCarousel = false;

  get swiper(): typeof Swiper {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
