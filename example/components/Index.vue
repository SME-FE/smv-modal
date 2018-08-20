<template lang="pug">
.test
  button(@click='onTimelineClick') clickme
</template>

<script>
import ModalContent from './ModalContent.vue';
import Vue from 'vue';
import Modal from '@/index.js';

export default {
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
      title: '这是标题',
      confirmOnEnter: true,
      // content: <div style="color: red;">ooooddd man</div>,
      // content: '这是modal的内容，内容内容。这是modal的内容，内容内容。这是modal的内容，内容内容。',
      content: ModalContent,
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

