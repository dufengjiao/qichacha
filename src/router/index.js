import Vue from 'vue'
import VueRouter from 'vue-router'
import localRoutes from './routes';

Vue.use(VueRouter)
VueRouter.prototype.$open = (location = '') => {
  // console.log(router, this)
  let ref = router.resolve(location);
  window.open(ref.href, '_blank');
}

// router.beforeEach((to, from ,next) => {})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: localRoutes
})

export default router
