<template>
  <div class="product-card">
    <div class="product-card-container">
      <div class="image-wrapper">
        <BaseImage :max-width="`100%`" :max-height="`100%`" :image="product.thumbnail" />
        <TheBadge v-if="product.rating > 4.7" :type="BADGES.POPULAR" />
        <TheBadge v-if="product.discountPercentage > 15" :type="BADGES.SALE" />
        <TheBadge v-if="product.stock < 20" :type="BADGES.TOP" />
      </div>

      <ProductDescription
        :brand="product?.brand"
        :category="product?.category"
        :description="product?.description"
        :stock="product?.stock"
        :discountPercentage="product?.discountPercentage"
        :rating="product?.rating"
        :title="product?.title"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseImage from '@/Front/components/BaseImage.vue';
import ProductDescription from '@/Front/components/Product/ProductDescription.vue';
import { ProductEntity } from '@/Core/Domains/Entities/Product.entity';
import { SCREEN_SIZE_MAP } from '@/Core/common/getScreenSize';
import TheBadge from '@/Front/components/TheBadge.vue';
import { BADGES } from '@/Core/enums';

@Component({
  components: {
    TheBadge,
    ProductDescription,
    BaseImage,
  },
})
export default class ProductCard extends Vue {
  @Prop({ type: ProductEntity, required: true })
  product!: ProductEntity;

  @Prop({ type: Object })
  screenSize!: SCREEN_SIZE_MAP;

  BADGES = BADGES;
}
</script>
<style scoped lang="less">
@media only screen and (min-width: 1920px) {
  .product-card {
    width: 324px;
    height: 378px;
    font-size: 16px;
  }
  .base-image {
    width: 306px;
    height: 206px;
  }
}
@media (max-width: 1920px) {
  .product-card {
    font-size: 16px;
  }
  .base-image {
    width: 306px;
    height: 206px;
  }
}
@media (max-width: 1440px) and (min-width: 744px) {
  .product-card {
    font-size: 14px;
  }
}
@media (max-width: 1440px) {
  .base-image {
    width: 284px;
    height: 191px;
  }
}
@media (max-width: 1280px) {
  .base-image {
    width: 262px;
    height: 176px;
  }
}
@media (max-width: 1024px) {
  .product-card {
    max-width: 280px;
    max-height: 327px;
  }
  .base-image {
    width: 268px;
    height: 180px;
  }
}
@media (max-width: 834px) {
  .product-card {
    max-width: 250px;
    max-height: 292px;
  }
  .base-image {
    width: 240px;
    height: 161px;
  }
}
@media (max-width: 744px) {
  .product-card {
    max-width: 312px;
    max-height: 364px;
  }
  .base-image {
    width: 300px;
    height: 201px;
  }
}
@media (max-width: 744px) and (min-width: 320px) {
  .product-card {
    font-size: 16px;
  }
}
@media (max-width: 530px) {
  .product-card {
    max-width: 510px;
    max-height: 510px;
  }
  .base-image {
    width: 491px;
    height: 364px;
  }
}
@media (max-width: 430px) {
  .product-card {
    max-width: 412px;
    max-height: 412px;
  }
  .base-image {
    width: 391px;
    height: 264px;
  }
}
@media (max-width: 375px) {
  .product-card {
    max-width: 324px;
    max-height: 324px;
  }
  .base-image {
    width: 307px;
    height: 208px;
  }
}
@media (max-width: 320px) {
  .product-card {
    max-width: 276px;
    max-height: 276px;
  }
  .base-image {
    width: 261px;
    height: 171px;
  }
}

.image-wrapper {
  width: fit-content;
  height: fit-content;
  margin-bottom: 8px;
  position: relative;
}
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 1px solid #d9d9d9;
}
.product-card-container {
  padding: 9px 9px 18px 9px;
}
</style>
