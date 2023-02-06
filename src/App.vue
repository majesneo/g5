<template>
  <div id="app">
    <TheHeader :screenSize="screenSize" />
    <TheMain :screenSize="screenSize" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheMain from '@/components/TheMain.vue';
import useDebounce from '@/hooks/useDebounce';
import getScreenSize from '@/common/getScreenSize';

@Component({
  components: {
    TheMain,
    TheHeader,
  },
})
export default class App extends Vue {
  windowWidth = Vue.observable({
    value: window.innerWidth,
  });

  beforeMount() {
    window.addEventListener('resize', useDebounce(this.onWindowResize, 50));
  }

  mounted() {
    this.onWindowResize();
  }

  beforeDestroy() {
    window.removeEventListener('resize', useDebounce(this.onWindowResize, 50));
  }

  onWindowResize() {
    this.windowWidth.value = window.innerWidth;
  }

  get screenSize() {
    return getScreenSize(this.windowWidth.value);
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #ffffff;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #d5d5d5;
}
.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background-color: #5775a9;
}

button:focus,
input[type="button"]:focus {
  outline: none;
}
button:active,
input[type="button"]:active {
  outline: none;
}
</style>
