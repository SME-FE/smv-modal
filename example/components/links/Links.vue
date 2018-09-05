<template lang="pug">
.links-bar
  a(target='_blank' :href='codeLink') Source code
  a(target='_blank' href='https://sme-fe.github.io/website-vmodal/') Document
  a(target='_blank' href='https://github.com/SME-FE/smv-modal') Github
</template>
<script>
export default {
  props: {
    codeLink: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
@import './../../styles/config.scss';

.links-bar {
  position: absolute;
  top: 0;
  right: 0;
  a {
    display: inline-block;
    padding: 10px;
    text-align: center;
    color: $light-purple;
    text-decoration: none;
    border-bottom: 4px solid $light-purple;
  }
}
</style>

