import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login"
import Home from "../components/Home"
import Goods from "../views/Goods"
import Register from "../views/Register"


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/register'
  },
  {
    path:'/login',
    name:"login",
    component:Login
  },
  {
    path:'/home',
    component:Goods
  },
  {
    path:'/register',
    component:Register
  }

]

const router = new VueRouter({
  routes
})

export default router
