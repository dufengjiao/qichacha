import Home from '../views/Home.vue'


const localRoutes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:key',
    name: 'detail',
    component: () => import('../views/detail/index.vue')
  },
  {
    path: '/deadbeat',
    name: 'deadbeat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Deadbeat.vue')
  },
  {
    path: '/overseas',
    name: 'overseas',
    component: () => import('../views/Overseas.vue')
  },{
    path: '/relation',
    name: 'relation',
    component: () => import('../views/Relation.vue')
  }
];
export default localRoutes;
