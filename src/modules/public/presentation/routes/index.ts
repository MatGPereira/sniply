import type { RouteRecordRaw } from 'vue-router';

const publicRoutes = <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/home/HomeView.vue'),
  },
];

export { publicRoutes };
