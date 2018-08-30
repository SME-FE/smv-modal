<template lang="pug">
.split-page
  Split
    template(slot='left')
      .content
        h1 smv modal
        p use modal without tear 😂
        .btn(@click='showModal') click
    template(slot='right')
      SFC
</template>

<script>
import Modal from '@/index.js';
import Split from 'example/components/split/Split.vue';
import SFC from '../md/sfc.md';

const test = '#a3a7e4';

export default {
  components: {
    Split,
    SFC,
  },
  data() {
    return {
      modal: null,
    };
  },
  created() {
    this.modal = Modal({
      theme: test,
      title: '这是标题',
      animation: {
        type: 'shutter',
      },
      confirmText: '确认',
      cancelText: '取消',
      className: 'hallo-world',
      confirmOnEnter: true,
      closeBtn: true,
      maskClosable: false,
      mask: true,
      maskStyle: {
        // width: '65%',
      },
      modalStyle: {
        width: '400px',
        height: '240px',
      },
      // content: <div style="color: red;">ooooddd man</div>,
      content: '这是modal的内容，内容内容。这是modal的内容，内容内容。这是modal的内容，内容内容。',
      // content: ModalContent,
    });
  },
  methods: {
    async showModal() {
      const wp = document.querySelector('.await-point');
      wp.className += ' active';
      try {
        const resp = await this.modal.show();
        ilog.info('resolve', resp);
      } catch (err) {
        ilog.warn('reject', err);
      }
      wp.className = wp.className.replace('active', '');
    },
  },
};
</script>
<style lang="scss">
@import './../styles/config.scss';
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

