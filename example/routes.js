import Main from './modules/Main.vue';
import Scroll from './modules/Scroll.vue';
import Split from './modules/Split.vue';
import Test from './components/test/Index.vue';

export default [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/scroll',
    component: Scroll,
  },
  {
    path: '/split',
    component: Split,
  },
];
