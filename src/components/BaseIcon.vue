<template>
  <svg
    :fill="color"
    :viewBox="viewBox"
    :height="height"
    :width="width"
    :style="{
      transform: `rotate(${rotate}deg)`,
    }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseIcon extends Vue {
  @Prop({ type: String, default: 'transparent' }) readonly color!: string;

  @Prop() readonly viewBox!: string;

  @Prop() readonly height!: string;

  @Prop() readonly width!: string;

  @Prop() readonly rotate!: number;
}
</script>
