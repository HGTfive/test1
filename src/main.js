import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'
Vue.prototype.$qs=qs


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',//加载失败后图片的地址
  // loading: 'dist/loading.gif',//加载时图片的地址
  attempt: 1,
  addEventListener:"scroll"
})
//在需要的时候写 加载时图片的样式 不是必须 需要时添加
// img[lazy="loading"]{
//   display:block;
//   width:50px !important;
//   height:50px !important;
//   margin:0 auto;
//   }

new Vue({
  router,
  store,
  qs,
  render: h => h(App)
}).$mount('#app')
