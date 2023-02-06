<template>
  <div :style="screenSizeStyle" class="product-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SCREEN_SIZE_MAP } from '@/Core/common/getScreenSize';

@Component
export default class ProductContainer extends Vue {
  @Prop({ type: Object })
  screenSize!: SCREEN_SIZE_MAP;

  get screenSizeStyle() {
    return this.screenSize.XXL
      ? {
        gridTemplateColumns: 'repeat(4, minmax(auto,322px))',
        gridTemplateRows: 'minmax(auto,376px)',
        fontSize: '16px',
      }
      : this.screenSize.XL
        ? {
          gridTemplateColumns: 'repeat(4, minmax(auto,298px))',
          gridTemplateRows: 'minmax(auto,348px)',
          fontSize: '14px',
        }
        : this.screenSize.LG_XL
          ? {
            gridTemplateColumns: 'repeat(4, minmax(auto,276px))',
            gridTemplateRows: 'minmax(auto,322px)',
            fontSize: '14px',
          }
          : this.screenSize.LG || this.screenSize.LG_MD
            ? {
              gridTemplateColumns: 'repeat(3, minmax(auto,auto))',
            }
            : this.screenSize.MD
              ? {
                gridTemplateColumns: 'repeat(2,  minmax(auto,312px))',
                gridTemplateRows: 'minmax(auto,364px)',
              }
              : this.screenSize.MD_SM
                ? {
                  gridTemplateColumns: 'repeat(1, minmax(auto,510px))',
                  gridTemplateRows: 'minmax(auto,510px)',
                }
                : this.screenSize.SM_MD
                  ? {
                    gridTemplateColumns: 'repeat(1,minmax(auto,412px))',
                    gridTemplateRows: 'minmax(auto,412px)',
                  }
                  : this.screenSize.SM
                    ? {
                      gridTemplateColumns: 'repeat(1,minmax(auto,324px))',
                      gridTemplateRows: 'minmax(auto,324px)',
                    }
                    : {
                      gridTemplateColumns: 'repeat(1,minmax(auto,276px))',
                      gridTemplateRows: 'minmax(auto,276px)',
                    };
  }
}
</script>
<style lang="less" scoped>
.product-container {
  display: grid;
  gap: 1.8rem;
  justify-content: center;
}
@media only screen and (min-width: 1920px) {
  .product-card {
    grid-template-columns: repeat(3, minmax(auto,324));
    grid-template-rows: minmax(auto,378px);
  }
}
</style>
