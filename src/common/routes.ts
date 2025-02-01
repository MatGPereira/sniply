import { createRouter, createWebHistory } from 'vue-router';

import { authRoutes } from '@/modules/auth/presentation/routes';
import { publicRoutes } from '@/modules/public/presentation/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...authRoutes],
});

export { router };
