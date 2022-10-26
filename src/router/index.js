import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Config from '../components/Config.vue'

Vue.use(VueRouter)

const routes = [
{path: '/', component: Home},
{path: '/config', component: Config},
]

const router = new VueRouter({
  routes
})

export default router
