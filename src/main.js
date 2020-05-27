import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "./components/common/toast"
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)
FastClick.attach(document.body)
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})
