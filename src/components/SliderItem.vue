<template>
  <div class="swiper-slide">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SliderItem extends Vue {}
</script>
