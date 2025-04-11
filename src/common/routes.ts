import { createRouter, createWebHistory } from 'vue-router';
import { publicRoutes } from '@/modules/public/presentation/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes],
});

export { router };
