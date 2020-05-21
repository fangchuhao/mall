import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home=() => import('views/home/Home')
const Category=() => import('views/category/Category')
const Cart=() => import('views/cart/Cart')
const Profile=() => import('views/profile/Profile')

const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router=new Router({
  routes,
  mode: 'history'
})

export default router
