<template>
  <img
    class="base-image"
    :src="image"
    :style="`width:${width}; height: ${height}; max-width:${maxWidth}; max-height:${maxHeight};`"
    alt=""
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseImage extends Vue {
  @Prop({ type: String })
  image!: string;

  @Prop({ type: String })
  width!: string;

  @Prop({ type: String })
  height!: string;

  @Prop({ type: String })
  maxWidth!: string;

  @Prop({ type: String })
  maxHeight!: string;
}
</script>
<style scoped lang="less">
.base-image {
  object-fit: cover;
}
</style>
