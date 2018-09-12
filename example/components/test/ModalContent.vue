<template>
<h2 class="modal-content" :style="styl">hallo {{name}}</h2>
</template>
<script>
export default {
  data() {
    return { name: 'world', styl: { color: 'yellowgreen' } };
  },
  created() {
    setTimeout(() => {
      this.$emit('confirmModal', { a: '111111111' });
    }, 3 * 1000);
  },
};
</script>
