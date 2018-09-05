<template lang="pug">
.split-page
  Split
    template(slot='left')
      .content
        h1 smv modal
        p with animation ✨✨✨ 
        p 
          strong scroll 
          | the page to see next example ⏬
        .btn-box
          .btn(@click='() => showModal("shutter")') shutter(default)
          .btn(@click='() => showModal("zoom")') zoom
          .btn(@click='() => showModal("slideUp")') slideUp
          .btn(@click='() => showModal("slideDown")') slideDown
          .btn(@click='() => showModal("slideLeft")') slideLeft
          .btn(@click='() => showModal("slideRight")') slideRight
    template(slot='right')
      Links(codeLink='https://github.com/SME-FE/smv-modal/blob/master/example/modules/page/Anim.vue')
      Anim
</template>

<script>
import Modal from '@/index.js';
import Split from 'example/components/split/Split.vue';
import Anim from 'example/md/animation.md';
import { waitPointActive } from 'example/utils';

async function genModal(animationType, context) {
  const h = context.$createElement;
  const modal = Modal({
    title: 'Animation',
    animation: {
      type: animationType,
      duratino: 300,
    },
    modalStyle: {
      width: '400px',
      height: '200px',
    },
    className: 'hallo-world',
    content: <h2 class="modal-content">{animationType} example</h2>,
  });

  try {
    const resp = await modal.show();
    ilog.info('resolve', resp);
  } catch (err) {
    ilog.warn('reject', err);
  }

  modal.destroy();
}

export default {
  components: {
    Split,
    Anim,
  },
  data() {
    return {
      modal: null,
    };
  },
  created() {},
  methods: {
    async showModal(type) {
      waitPointActive(true, 'code-3');
      await genModal(type, this);
      waitPointActive(false, 'code-3');
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
.btn-box {
  .btn {
    margin: 0 5px;
  }
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
