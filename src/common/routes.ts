import { createRouter, createWebHistory } from 'vue-router';

import { authRoutes } from '@/modules/auth/presentation/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes],
});

export { router };
