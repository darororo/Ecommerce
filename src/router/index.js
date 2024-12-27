import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UserForm from '../components/UserForm.vue'
import CarView from '../views/CarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },

    {
      path: '/login',
      component: UserForm,
      props: {
        isCreateForm: false
      }
    },

    {
      path: '/signup',
      component: UserForm,
      props: {
        isCreateForm: true,
      }
    },

    {
      path: '/car/:carId',
      component: CarView,
    }

  ],
})

export default router
