<template lang="pug">
.split-page
  Split
    template(slot='left')
      .content
        h1 smv modal
        p
          | support 
          strong .vue
          | (Single File Component) file as content 👌 
        p 
          strong scroll 
          | the page to see next example ⏬
        .btn(@click='showModal') click
    template(slot='right')
      Links(codeLink='https://github.com/SME-FE/smv-modal/blob/master/example/modules/page/SFC.vue')
      .code
        SFC
</template>

<script>
import Modal from '@/index.js';
import Split from 'example/components/split/Split.vue';
import ModalContent from 'example/components/test/ModalContent.vue';
import SFC from 'example/md/sfc.md';
import { waitPointActive } from 'example/utils';

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
    // this.modal = Modal({
    //   title: 'SFC',
    //   className: 'hallo-world',
    //   modalStyle: {
    //     width: '400px',
    //     height: '240px',
    //   },
    //   content: ModalContent,
    // });
    this.modal = Modal`${'SFC'} ${ModalContent}`;
  },
  methods: {
    async showModal() {
      waitPointActive(true, 'code-1');
      try {
        const resp = await this.modal.show();
        ilog.info('resolve', resp);
      } catch (err) {
        ilog.warn('reject', err);
      }
      waitPointActive(false, 'code-1');
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
.smv-modal {
  width: 60% !important;
}
</style>

