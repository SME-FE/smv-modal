<template lang="pug">
.test
  SFC
  button(@click='onTimelineClick') clickme
</template>

<script>
// import ModalContent from './ModalContent.vue';
import Vue from 'vue';
import Modal from '@/index.js';
import SFC from '../md/sfc.md';

const lightblue = '#9cd3d3';
const test = '#a3a7e4';
const main = '#8b80f9';

export default {
  components: {
    SFC,
  },
  data() {
    return {
      modal: null,
      comp: null,
      comps: [],
      items: [
        {
          tag: '2010年1月',
          color: 'yellow',
          content: 'xxxxx',
        },
      ],
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
        // background: '',
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
  mounted() {},
  methods: {
    onTimelineClick() {
      const p = this.modal
        .show()
        .then(res => {
          ilog.info('resolve', res);
          // this.modal.$content.resetTest();
        })
        .catch(err => {
          ilog.warn('reject', err);
          // this.modal.destroy();
        });
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.test {
  background: yellowgreen;
  height: 100vh;
}
</style>

