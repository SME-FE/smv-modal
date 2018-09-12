#### main.js
```js
//...
methods: {
  async showModal(animationType) {
        const modal = Modal({
      title: 'Custom Style',
      className: 'hallo-world',
      modalStyle: {
        width: '400px',
        height: '240px',
        background: `#fff url(/background.jpg) no-repeat 5% -100%`,
      },
      // prettier-ignore
      content: (
        <h3 style={{ marginLeft: '50%', color: '#a3a7e4' }}>
          ~~ sakura ~~
        </h3>
      )
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