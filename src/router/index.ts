import { createRouter, createWebHistory } from 'vue-router'
import SaladView from '../views/SaladView.vue'
import SaladViewV2 from '../views/SaladViewV2.vue'
import HomeView from '../views/HomeView.vue'
import HomeViewV2 from '../views/HomeViewV2.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useOrderStore } from '../stores/order'
import { storeToRefs } from 'pinia'

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
    },
    {
      path: '/v2',
      name: 'default2',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home2',
          component: HomeViewV2
        },
        {
          path: 'salad/:id',
          name: 'salad2',
          component: SaladViewV2,
          beforeEnter: () => {
            const orderStore = useOrderStore()
            const { name: orderName } = storeToRefs(orderStore)

            if (!orderName.value) {
              return {
                path: '/',
                name: 'home2'
              }
            }
          }
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
