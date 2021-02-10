import { createRouter, createWebHistory } from 'vue-router'
import Rooms from '../views/Rooms.vue'
import RoomManager from '../components/RoomManager.vue'
import RoomDetails from '../views/RoomDetails.vue'
import NotFoundError from '../views/NotFoundError.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/rooms/:id',
    name: 'RoomDetails',
    component: RoomDetails,
    props: true
  },
  {
    path: '/rooms',
    redirect: '/',
  },
  {
    path: '/manage',
    name: 'RoomManager',
    component: RoomManager,
  },
  {
    path: '/:catchAll(.*)',
    name: '404Error',
    component: NotFoundError
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
