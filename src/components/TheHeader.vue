<template>
  <header class="header">
    <div class="header-container" v-if="showLogoAndButtonScreenSize">
      <TheLogoIcon
        ref="Logo"
        fill="#002195"
        :height="resizeLogo"
        :width="resizeLogo"
        viewBox="0 0 1302 1302"
        v-if="resizeLogo"
      />

      <TheButton :width="resizeButton" :padding="`8px 16px`" v-if="resizeButton">
        Update Products
      </TheButton>
    </div>
  </header>
</template>
<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import TheLogoIcon from '@/components/TheLogoIcon.vue';
import TheButton from '@/components/TheButton.vue';
import { SCREEN_SIZE_MAP } from '@/common/getScreenSize';
import { SCREEN_SIZE } from '@/enums';

@Component({
  components: { TheButton, TheLogoIcon },
})
export default class TheHeader extends Vue {
  @Prop({ type: Object })
  screenSize!: SCREEN_SIZE_MAP;

  get showLogoAndButtonScreenSize() {
    return Object.values(this.screenSize)[0] > SCREEN_SIZE.MD;
  }

  get resizeButton() {
    return this.screenSize.XL
      ? '130px'
      : this.screenSize.LG_XL
        ? '138px'
        : this.screenSize.LG
          ? '146px'
          : this.screenSize.LG_MD
            ? '155px'
            : this.screenSize.MD
              ? '155px'
              : '130px';
  }

  get resizeLogo() {
    return this.screenSize.XL
      ? '22'
      : this.screenSize.LG_XL
        ? '24'
        : this.screenSize.LG
          ? '26'
          : this.screenSize.LG_MD
            ? '28'
            : this.screenSize.MD
              ? '28'
              : '20';
  }
}
</script>
<style scoped lang="less">
.header {
  background: #5775a9;
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 267px;
  right: 267px;
}
</style>
