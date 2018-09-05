<template lang="pug">
.split-page
  Split
    template(slot='left')
      .content
        h1 smv modal
        p
          | support 
          strong JSX 🌝 
          | as content
        p 
          strong scroll 
          | the page to see next example ⏬
        .btn(@click='showModal') click
    template(slot='right')
      Links(codeLink='https://github.com/SME-FE/smv-modal/blob/master/example/modules/page/JSX.vue')
      JSX
</template>

<script>
import Modal from '@/index.js';
import Split from 'example/components/split/Split.vue';
import JSX from 'example/md/jsx.md';
import { waitPointActive } from 'example/utils';

export default {
  components: {
    Split,
    JSX,
  },
  data() {
    return {
      modal: null,
    };
  },
  created() {
    this.modal = Modal({
      title: 'JSX',
      className: 'hallo-world',
      modalStyle: {
        width: '400px',
        height: '240px',
      },
      content: <h2 class="modal-content">let's try jsx.</h2>,
    });
  },
  methods: {
    async showModal() {
      waitPointActive(true, 'code-2');
      try {
        const resp = await this.modal.show();
        ilog.info('resolve', resp);
      } catch (err) {
        ilog.warn('reject', err);
      }
      waitPointActive(false, 'code-2');
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
