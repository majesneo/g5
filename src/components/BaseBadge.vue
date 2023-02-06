<template>
<!--  <img :src="thumbnail" alt=""/>-->
  <div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseBadge extends Vue {
  @Prop({ type: String, required: true })
  thumbnail!: string;

  get imageStyles() {
    return {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '442px',
      height: '294px',
    };
  }
}
</script>
