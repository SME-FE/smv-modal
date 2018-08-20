<template lang="pug">
.testt
  input(v-model='form.age' placeholder='age')
  input(v-model='form.count' placeholder='count')
  input(v-model='form.color' placeholder='color')
</template>

<script>
import Vue from 'vue';
export default {
  name: 'testt',
  data() {
    return {
      name: 'world',
      form: {
        age: '',
        count: '',
        color: '',
      },
    };
  },
  created() {
    this.name += '~~';
  },
  methods: {
    resetTest() {
      ilog('reset.....');
      Object.assign(this.form, {
        age: '',
        count: '',
        color: '',
      });
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.testt {
  // background: url('./../assets/xuxin.jpg');
  color: yellowgreen;
}
</style>

