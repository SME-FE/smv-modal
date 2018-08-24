<template lang="pug">
.scroll-page
  ScrollPage
    Page
      .content1
    Page
      .content2
    Page
      .content3
</template>

<script>
import ScrollPage from 'example/components/scroll-page/ScrollPage.vue';
import Page from 'example/components/scroll-page/Page.vue';
export default {
  components: {
    ScrollPage,
    Page,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.content1 {
  background: yellowgreen;
  height: 100vh;
}
.content2 {
  background: blueviolet;
  height: 100vh;
}
.content3 {
  background: paleturquoise;
  height: 100vh;
}
</style>

