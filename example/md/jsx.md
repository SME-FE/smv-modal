#### main.js
```js
//...
this.modal = Modal({
  title: 'JSX',
  className: 'hallo-world',
  content: <h2 class="modal-content">let's try jsx.</h2>,
});
//...
async showModal() {
  :::imark
  const resp = await this.modal.show();
  :::
  ilog.info(resp.type, resp);
},
```