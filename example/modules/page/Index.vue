<template lang="pug">
.scroll-page
  ScrollPage
    Page
      SFC
    Page
      JSX
    Page
      Anim
</template>

<script>
import ScrollPage from 'example/components/scroll-page/ScrollPage.vue';
import Page from 'example/components/scroll-page/Page.vue';
import SFC from './SFC.vue';
import JSX from './JSX.vue';
import Anim from './Anim.vue';

import { parseMarkdown } from 'example/utils';

export default {
  components: {
    ScrollPage,
    Page,
    SFC,
    JSX,
    Anim,
  },
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
</style>
