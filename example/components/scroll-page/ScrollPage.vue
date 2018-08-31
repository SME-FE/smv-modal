<template lang="pug">
#smv-well.smv-well(style='transform: translateY(0)' ref='well')
  slot
</template>
<script>
import { debounce } from 'example/utils';

const SlideDuration = 500;

export default {
  data() {
    return {
      hold: false,
    };
  },
  mounted() {
    this.$refs.well.addEventListener('wheel', debounce(this.handleWheel.bind(this), 100));
  },
  methods: {
    handleWheel(e) {
      let scdir;
      if (e.deltaY < 0) scdir = 'down';
      if (e.deltaY > 0) scdir = 'up';
      this.scrollY(this.$refs.well, scdir);
    },
    scrollY(pan, scdir) {
      if (!pan) return;
      let scrollLen, pageLen;
      let step = 100;
      let vh = window.innerHeight / 100;
      let vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
      pageLen = parseInt(pan.offsetHeight / vh);
      pageLen = pageLen || parseInt(pan.offsetHeight / vmin);
      scrollLen = parseInt(pan.style.transform.replace('translateY(', ''));

      if (scdir === 'up' && Math.abs(scrollLen) < pageLen - step) {
        scrollLen = scrollLen - step;
      } else if (scdir === 'down' && scrollLen < 0) {
        scrollLen = scrollLen + step;
      } else if (scdir === 'top') {
        scrollLen = 0;
      }

      if (!this.hold) {
        this.hold = true;
        pan.style.transform = `translateY(${scrollLen}vh)`;
        setTimeout(() => {
          this.hold = false;
        }, SlideDuration);
      }

      // ilog.info(
      //   `scdir:${scdir}, scrollLen: ${scrollLen}, pageLen: ${pageLen}, (pageLen-step): ${pageLen -
      //     step}`
      // );
    },
  },
};
</script>
<style lang="scss">
body {
  overflow: hidden;
  margin: 0;
  font-family: 'Limelight', sans-serif;
  text-rendering: optimizeLegibility;
}

.smv-well {
  position: relative;
  overflow: hidden;
  // transition: 0.8s cubic-bezier(0.5, 0, 0.5, 1);
  transition: 1s cubic-bezier(0.22, 0.44, 0, 1);
}
</style>

