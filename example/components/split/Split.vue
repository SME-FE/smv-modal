<template lang="pug">
.smv-split
  .split-left
    slot(name='left')
  .split-right
    slot(name='right')
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
%common {
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  padding: 2rem;
  height: 100%;
}
.smv-split {
  .split-left {
    @extend %common;
    width: 65%;
  }
  .split-right {
    @extend %common;
    width: 35%;
  }
}
</style>

