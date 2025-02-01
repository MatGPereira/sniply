import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../pages/home/HomeView.vue';

const publicRoutes = <RouteRecordRaw[]>[
  {
    path: '/',
    component: HomeView,
  },
];

export { publicRoutes };
