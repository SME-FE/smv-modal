#### main.js
```js
import ModalContent from './ModalContent.vue';
//...
this.modal = Modal`${'SFC'} ${ModalContent}`;
//...
async showModal() {
  :::imark
  const resp = await this.modal.show();
  :::
  ilog.info(resp.type, resp);
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
