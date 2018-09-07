<template lang="pug">
.scroll-page
  ScrollPage
    Page
      SFC
    Page
      JSX
    Page
      Anim
    Page
      Styl
</template>

<script>
import ScrollPage from 'example/components/scroll-page/ScrollPage.vue';
import Page from 'example/components/scroll-page/Page.vue';
import SFC from './SFC.vue';
import JSX from './JSX.vue';
import Anim from './Anim.vue';
import Styl from './Styl.vue';
// import { showModal } from './index.js';

// setTimeout(() => {
//   showModal();
// });

import { parseMarkdown } from 'example/utils';

export default {
  components: {
    ScrollPage,
    Page,
    SFC,
    JSX,
    Anim,
    Styl,
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
