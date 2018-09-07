<template lang="pug">
div
  router-view
</template>

<script>
// import { delItemAction } from './modules/page/index.js';

// setTimeout(() => {
//   delItemAction();
// });

export default {
  data() {
    return {
      lang: 'zh',
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang='scss'>
@import './styles/config.scss';

* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background: white;
  color: $font-color;
  font-family: $font-family;
}
</style>
