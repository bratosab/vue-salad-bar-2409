import { createRouter, createWebHistory } from 'vue-router'
import SaladView from '../views/SaladView.vue'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'salad',
          name: 'salad',
          component: SaladView
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.name === 'salad') {
    const name = localStorage.getItem('name')
    if (!name) {
      return {
        path: '/',
        name: 'home'
      }
    }
  }
})

export default router
