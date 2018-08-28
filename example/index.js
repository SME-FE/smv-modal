// for detail: https://github.com/babel/babel/issues/5085#issuecomment-277544677
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import logSome from 'sme-log';
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';

import Modal from '@/index';
import '@/styles/zoom.scss';
import '@/styles/slideDown.scss';
import '@/styles/slideUp.scss';
import '@/styles/slideLeft.scss';
import '@/styles/slideRight.scss';
// import Modal from '../index';
import App from './App.vue';
import routes from './routes';
import './normalize.css';
import './styles/markdown.scss';

window.ilog = logSome(process.env.NODE_ENV);
Vue.use(VueRouter);
Vue.use(Modal);

const router = new VueRouter({
  routes,
});

router.afterEach(route => {
  Vue.nextTick(Prism.highlightAll);
});

export default new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
