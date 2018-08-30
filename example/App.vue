<template lang="pug">
div
  router-view
</template>

<script>
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
body {
  background: white;
  color: $font-color;
  font-family: $font-family;
}
</style>
