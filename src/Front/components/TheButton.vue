<template>
  <button @click="$emit('click')" :style="buttonStyles" class="base-button"><slot /></button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TheButton extends Vue {
  @Prop() readonly width!: string;

  @Prop() readonly padding!: string;

  get buttonStyles() {
    return {
      width: this.width,
      padding: this.padding,
    };
  }
}
</script>

<style scoped lang="less">
.base-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background: #ffffff;
  border-radius: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  cursor: pointer;
}
</style>
