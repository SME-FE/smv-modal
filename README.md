# smv modal

use modal with no tear 😂

![Travis branch](https://img.shields.io/travis/SME-FE/smv-modal/master.svg?style=flat-square)
![coverage](https://img.shields.io/coveralls/github/SME-FE/smv-modal/master.svg?style=flat-square)
![download](https://img.shields.io/npm/dm/smv-modal.svg?style=flat-square)
![version](https://img.shields.io/npm/v/smv-modal.svg?style=flat-square)
![license](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)

- [Demo](https://sme-fe.github.io/smv-modal/#/)
- [Documentation](https://sme-fe.github.io/website-vmodal/)
- [中文文档](https://sme-fe.github.io/website-vmodal/zh)

## Get Start

### Installation

```bash
npm i --save smv-modal
```

### Basic Usage

#### try it out

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rr66qjz3l4)

```js
import Modal from 'smv-modal';

const modal = Modal({
  title: 'Welcome',
  content: 'hallo world~'
});

async showModal() {
  try {
    const resp = await modal.show();
    console.log('resolve', resp);
  } catch(err) {
    console.log('reject', err);
  }
}

showModal();
```

Please see [Documentation](https://sme-fe.github.io/website-vmodal/) for more usage.
## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/6712767?s=460&v=4" width="100px;"/><br /><sub><b>hwencc</b></sub>](https://github.com/hwen)<br />[💻](https://github.com/hwen/smv-modal/commits?author=hwen "Code") [🤔](#ideas-hwen "Ideas, Planning, & Feedback") [💡](#example-hwen "Examples") [📖](https://github.com/hwen/smv-modal/commits?author=hwen "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!