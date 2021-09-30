import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../components/category/categories'
import Post from '../components/posts/post'
const routes = [
  {
    path: '/',
    name: 'Post',
    component: Post
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
  // {
  //   path: '/categories',
  //   name: 'Categories',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
