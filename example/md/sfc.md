#### main.js
```js
import ModalContent from './ModalContent.vue';
//...
this.modal = Modal({
  title: 'SFC',
  className: 'hallo-world',
  content: ModalContent,
});
//...
async showModal() {
  try {
    :::imark
    const resp = await this.modal.show();
    :::
    ilog.info('resolve', resp);
  } catch (err) {
    ilog.warn('reject', err);
  }
},
```
#### ModalContent.vue
```html
<template>
<h2 class="modal-content" :style="styl">hallo {{name}}</h2>
</template>
<script>
export default {
  data() {
    return { name: 'world', styl: { color: 'yellowgreen' } };
  },
};
</script>
```
