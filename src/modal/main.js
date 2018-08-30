import Main from './main.vue';
import { CompFactory, VnodeFactory, getContentType, isSSR } from '../utils';

const Modal = opts => {
  const ModalConstructor = CompFactory(Main);
  let instance = null;
  if (opts.animation && !opts.animation.duration) opts.animation.duration = 300;
  const propsData = Object.assign({ content: '' }, opts);

  switch (getContentType(opts.content)) {
    case 'sfc':
      propsData.comp = CompFactory(opts.content);
      break;
    case 'vnode':
      propsData.comp = VnodeFactory(opts.content);
      break;
    case 'string':
      propsData.content = opts.content;
  }

  instance = new ModalConstructor({
    propsData,
  });

  instance.$mount();
  instance.show = () => {
    if (isSSR()) return;
    if (instance._isDestroyed) {
      throw new Error(`Can't show modal, because modal was destroyed.`);
    }
    instance.setVisible(true);
    instance.$off();
    return new Promise((resolve, reject) => {
      instance.$on('submitModal', data => {
        resolve(data);
      });
      instance.$on('hideModal', data => {
        reject(data);
      });
    });
  };
  instance.hide = () => {
    instance.setVisible(false);
  };
  instance.destroy = () => {
    console.log('duration', instance.animation.duration);
    setTimeout(() => {
      if (instance.$content) instance.$content.$destroy();
      instance.$destroy();
      document.body.removeChild(instance.$el);
    }, instance.animation.duration);
  };

  document.body.appendChild(instance.$el);
  return instance;
};

export default Modal;
