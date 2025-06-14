import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/addpost',
      name: 'addpost',
      component: () => import('@/views/PostAdd.vue'),
    },
    {
      path: '/posts',
      name: 'allposts',
      component: () => import('@/views/PostAll.vue'),
    },
    {
      path: '/viewpost/:id',
      name: 'viewpost',
      component: () => import('@/views/PostSingle.vue'),
    },
    {
      path: '/edit-by-put/:id',
      name: 'editpostbyput',
      component: () => import('@/views/PostEditByPut.vue'),
    },
    {
      path: '/edit-by-patch/:id',
      name: 'editbypatch',
      component: () => import('@/views/PostEditByPatch.vue'),
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: () => import('@/views/UserPaging.vue'),
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: () => import('@/views/ProductPaging.vue'),
    },
  ],
})

export default router
