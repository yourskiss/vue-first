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
      path: '/add-post',
      name: 'add-post',
      component: () => import('@/views/PostAdd.vue'),
    },
    {
      path: '/posts',
      name: 'all-posts',
      component: () => import('@/views/PostAll.vue'),
    },
    {
      path: '/single-post/:id',
      name: 'single-post',
      component: () => import('@/views/PostSingle.vue'),
    },
    {
      path: '/edit-post-by-put/:id',
      name: 'edit-post-by-put',
      component: () => import('@/views/PostEditByPut.vue'),
    },
    {
      path: '/edit-post-by-patch/:id',
      name: 'edit-post-by-patch',
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
