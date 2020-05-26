import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

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
