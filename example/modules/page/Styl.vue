<template lang="pug">
.split-page
  Split
    template(slot='left')
      .content
        h1 smv modal
        p use modal without tear 😂
        .btn(@click='showModal') click
    template(slot='right')
      Styl
</template>

<script>
import Modal from '@/index.js';
import Split from 'example/components/split/Split.vue';
import Styl from 'example/md/styl.md';
import { waitPointActive } from 'example/utils';

const theme = '#a3a7e4';

export default {
  components: {
    Split,
    Styl,
  },
  data() {
    return {
      modal: null,
    };
  },
  created() {
    this.modal = Modal({
      theme,
      title: 'Custom Style',
      className: 'hallo-world',
      modalStyle: {
        width: '400px',
        height: '240px',
        background: '#fff url(/background.jpg) no-repeat 5% -100%',
      },
      // prettier-ignore
      content: (
        <h3 style={{ marginLeft: '50%', color: theme }}>
          ~~ sakura ~~
        </h3>
      )
    });
  },
  methods: {
    async showModal() {
      waitPointActive(true, 'code-4');
      try {
        const resp = await this.modal.show();
        ilog.info('resolve', resp);
      } catch (err) {
        ilog.warn('reject', err);
      }
      waitPointActive(false, 'code-4');
    },
  },
};
</script>
<style lang="scss">
@import './../../styles/config.scss';
.btn {
  padding: 5px 16px;
  background: white;
  border: 1px solid $purple;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
.split-page {
  height: 100vh;
  background: white;
  overflow: hidden;
}
.smv-modal.hallo-world {
  width: 60%;
}
</style>
