<template>
  <div class="arrows" v-if="arrows">
    <button class="arrow-transparent bg-transparent-rounded" type="button" @click="prev">
      <ArrowLeftIcon class="absolute" width="48" height="48" />
    </button>

    <button class="arrow-transparent bg-transparent-rounded" type="button" @click="next">
      <ArrowRightIcon class="absolute" width="48" height="48" />
    </button>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Emit, Prop,
} from 'vue-property-decorator';
import ArrowRightIcon from '@/Front/components/Icons/ArrowRightIcon.vue';
import ArrowLeftIcon from '@/Front/components/Icons/ArrowLeftIcon.vue';

@Component({
  components: { ArrowLeftIcon, ArrowRightIcon },
})
export default class ArrowsSlider extends Vue {
  @Emit() prev() {}

  @Emit() next() {}

  @Prop() arrows!: boolean;
}
</script>
<style lang="less">
.arrows {
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.arrow-transparent {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  position: relative;
}
.absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bg-transparent-rounded {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100%;
}
</style>
