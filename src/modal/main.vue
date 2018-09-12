<template lang='pug'>
transition(name='smv-modal-fade')
  .smv-modal.override(
    :class='[className]'
    tabindex='-1'
    v-show='visible'
    @keyup.enter='onEnter'
    @keyup.esc='onEsc'
    :style='style'
  )
    .smv-modal-mask(v-if='mask' @click='onClickMask' :style='maskStyle')
    transition(:name='`smv-modal-${animation.type}`')
      .smv-modal-container(:style='modalContainerStyl' v-show='visible')
        .smv-header(v-show='title')
          .title {{title}}
          span.smv-modal-close(v-if='closeBtn' @click='onClose')
        .smv-content
          component(
            v-if='comp'
            :is='comp'
            ref='content'
            @confirmModal='emitConfirm'
            @cancelModal='emitCancel'
            @setCloseable='setCloseable'
          )
          .text(v-else)  {{content}}
        .smv-footer(v-if='footer')
          .btn.smv-modal-cancel(@click='onCancel' :style='cancelStyl') {{cancelText}}
          .btn.smv-modal-confirm(@click='onModalSubmit' :style='confirmStyl') {{confirmText}}
</template>
<script>
export default {
  name: 'smv-modal',
  props: {
    theme: {
      type: String,
      default: '#a3a7e4',
    },
    animation: {
      type: Object,
      default: () => ({
        type: 'shutter',
        duration: 300,
      }),
    },
    content: [String, Object],
    title: {
      type: String,
      default: '',
    },
    footer: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: 'confirm',
    },
    cancelText: {
      type: String,
      default: 'cancel',
    },
    className: {
      type: String,
      default: '',
    },
    comp: {
      type: Function,
      default: null,
    },
    closeBtn: {
      type: Boolean,
      default: true,
    },
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
    confirmOnEnter: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    maskStyle: {
      type: Object,
      default: () => {},
    },
    modalStyle: {
      type: Object,
      default: () => ({
        width: '360px',
        minHeight: '200px',
      }),
    },
  },
  data() {
    return {
      visible: false,
      $content: null,
      closeable: true,
    };
  },
  mounted() {
    if (this.$refs.content) {
      this.$content = this.$refs.content;
    }
  },
  watch: {
    visible(newValue) {
      if (newValue) {
        this.$nextTick(() => this.$el.focus());
      }
    },
  },
  computed: {
    confirmStyl() {
      return {
        background: `${this.theme}`,
        border: `1px solid ${this.theme}`,
      };
    },
    cancelStyl() {
      return {
        color: `${this.theme}`,
        border: `1px solid ${this.theme}`,
      };
    },
    style() {
      return {
        animationDuration: `${this.animation.duration}ms`,
      };
    },
    modalContainerStyl() {
      return Object.assign(
        {
          animationDuration: `${this.animation.duration}ms`,
        },
        this.modalStyle
      );
    },
  },
  methods: {
    setVisible(value) {
      this.visible = value;
    },
    emitCancel(data) {
      if (!this.closeable) return;
      this.$emit('cancelModal', data);
      this.visible = false;
    },
    emitConfirm(data) {
      if (!this.closeable) return;
      this.$emit('confirmModal', data);
      this.visible = false;
    },
    setCloseable(closeable) {
      this.closeable = closeable;
    },
    onModalSubmit(e) {
      let result = { type: 'confirm', trigger: !e ? 'enter' : 'confirm' };
      const $content = this.$refs.content;
      if ($content && $content.form) result.form = $content.form;
      this.emitConfirm(result);
    },
    onEnter() {
      if (this.confirmOnEnter) this.onModalSubmit();
    },
    onCancel() {
      if (this.visible) {
        this.emitCancel({
          type: 'cancel',
          trigger: 'cancel',
        });
      }
    },
    onClose() {
      if (this.visible) {
        this.emitCancel({
          type: 'cancel',
          trigger: 'close',
        });
      }
    },
    onEsc() {
      if (this.visible && this.closeOnEsc) {
        this.emitCancel({
          type: 'cancel',
          trigger: 'esc',
        });
      }
    },
    onClickMask() {
      if (this.maskClosable) {
        this.emitCancel({
          type: 'cancel',
          trigger: 'mask',
        });
      }
    },
  },
};
</script>
<style lang="scss">
@import './../styles/config.scss';
@import './../styles/mixins.scss';
@import './../styles/modal-anim.scss';

$darkPrimary: darken($primary-color, 5%);

.smv-modal,
.smv-modal-mask {
  top: 0;
  left: 0;
  z-index: $maskIdx;
  @include square(100%);
}
.smv-modal {
  position: fixed;
  font-size: 14px;
  color: #606266;
  line-height: 1.5;
  font-family: $font-family;
}
.smv-modal-mask {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
}

.smv-header {
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.smv-content {
  padding-bottom: 16px;
}

.smv-modal-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  margin: auto;
  z-index: $modalIdx;
  padding: 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.smv-footer {
  text-align: right;
  position: absolute;
  right: 16px;
  bottom: 16px;
  .btn {
    display: inline-block;
    border-radius: 4px;
    text-align: center;
    line-height: 1;
    padding: 6px 12px;
    cursor: pointer;
    transition: all ease 0.4s;
  }
  .smv-modal-confirm {
    color: white;
  }
  .smv-modal-cancel {
    background: white;
    margin-right: 16px;
  }
}

@include makeCloseIcon(smv-modal-close, 16px, #999, $darkPrimary);
/* 覆盖 close icon 位置 */
.smv-modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
}

/* only implement fade and shutter by default */
@include vmakeFade();
@include vmakeShutter();
</style>
