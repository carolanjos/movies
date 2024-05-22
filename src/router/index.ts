import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ListMoviesComponent from '../components/list-movies/ListMovies.component.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: ListMoviesComponent //rota padrão
  },
  
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue') // rota do arquivo AboutView
  }
]

const router = new VueRouter({ // configuração do VueRouter
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router