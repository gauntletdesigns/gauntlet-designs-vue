import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {el: to.hash, behavior: 'smooth'};
    } else {
      window.scrollTo(0, 0);
    }
  },
  routes,
});

const DEFAULT_TITLE = 'Gauntlet Designs';
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta?.title || DEFAULT_TITLE;
  });
});

export default router;
