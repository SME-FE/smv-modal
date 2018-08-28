<template lang="pug">
.smv-split
  .split-left
    slot(name='left')
  .split-right
    slot(name='right')
</template>
<script>
import { parseMarkdown } from 'example/utils';

export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      parseMarkdown();
    });
  },
  methods: {},
};
</script>
<style lang="scss">
@import './../../styles/_config.scss';

%common {
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  padding: 2rem;
  height: 100%;
}
.smv-split {
  height: 100%;
  .split-left {
    @extend %common;
    width: 60%;
  }
  .split-right {
    @extend %common;
    width: 40%;
    background: $gray;
    border-left: 4px solid $purple;
  }
  .await-point {
    position: relative;
    line-height: 0.5;
    padding-bottom: 6px;

    width: 100%;
    background: transparent;
    transition: all 1s ease;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      background-color: $yellow;
      width: 30px;
      height: 100%;
      opacity: 0;
      transition: all 1s ease;
    }
    &::before {
      left: 0;
      margin-left: -30px;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
    &::after {
      right: 60px;
      top: 0;
      content: 'pending...';
      color: white;
      padding-top: 6px;
      background: transparent;
    }
    &.active {
      background: $yellow;
      &::before,
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>

