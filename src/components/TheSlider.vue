<template>
  <div class="swiper-container overflow-hidden">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination bottom" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  Swiper, Pagination, Navigation, Scrollbar,
} from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';

Swiper.use([Pagination, Pagination, Navigation, Scrollbar]);

@Component
export default class TheSlider extends Vue {
  @Prop({ type: Object, default: () => ({}) }) options!: SwiperOptions;

  swiper: Swiper | null = null;

  mounted() {
    if (!(this.$el instanceof HTMLElement)) {
      return;
    }

    this.swiper = new Swiper(this.$el, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      watchOverflow: true,
      ...this.options,
    });
  }
}
</script>
<style scoped lang="less">
.overflow-hidden{
  overflow: hidden;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bottom{
  bottom: -32px;
}
@media (min-width: 1920px) {
  .swiper-slide{
    max-width: 442px;
    max-height: 294px;
  }
}
@media (max-width: 1920px) {
  .swiper-slide{
    max-width: 442px;
    max-height: 294px;
  }
}
@media (max-width: 1440px) {
  .swiper-slide{
    max-width: 442px;
    max-height: 272px;
  }
}
@media (max-width: 1280px) {
  .swiper-slide{
    max-width: 378px;
    max-height: 250px;
  }
}
@media (max-width: 1024px) {
  .swiper-slide{
    max-width: 282px;
    max-height: 187px;
  }
}

@media (max-width: 834px) {
  .swiper-slide{
    max-width: 252px;
    max-height: 167px;
  }
}

@media (max-width: 744px) {
  .swiper-slide{
    max-width: 658px;
    max-height: 208px;
  }
}
@media (max-width: 430px) {
  .swiper-slide{
    max-width: 412px;
    max-height: 130px;
  }
}
@media (max-width: 375px) {
  .swiper-slide{
    max-width: 324px;
    max-height: 143px;
  }
}
@media (max-width: 320px) {
  .swiper-slide{
    max-width: 276px;
    max-height: 143px;
  }
}
</style>
