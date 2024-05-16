import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CarrerView from '../views/CarrerView.vue';
import GalleryView from '../views/GalleryView.vue';
import ServicesView from '../views/ServicesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: GalleryView
    },
    {
      path: '/Carrer',
      name: 'Carrer',
      component: CarrerView
    },
    {
      path: '/Services',
      name: 'Services',
      component: ServicesView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; // Desplaza al inicio de la página
  }
})

export default router
