#### main.js
```js
//...
methods: {
  async showModal(animationType) {
    const modal = Modal({
      title: 'Animation',
      animation: {
        type: animationType,
        duratino: 300
      },
      className: 'hallo-world',
      content: <h2 class="modal-content">{animationType} example</h2>,
    });

    :::imark
    const resp = await this.modal.show();
    :::
    ilog.info(resp.type, resp);

    modal.destroy(); // destroy it...
  }
}
//...
```