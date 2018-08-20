import Vue from 'vue';
import VueRouter from 'vue-router';
import logSome from 'sme-log';

import Modal from '@/index';
// import Modal from '../index';
import App from './components/App.vue';
import routes from './routes';

import './normalize.css';

window.ilog = logSome(process.env.NODE_ENV);
Vue.use(VueRouter);
Vue.use(Modal);

const router = new VueRouter({
  routes,
});

export default new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
