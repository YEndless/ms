// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/http.js'
import {Settings} from "./assets/js/common";

import axios from  'axios'
import qs from 'qs';
Vue.prototype.$qs = qs;
// Vue.use(Settings)
Vue.prototype.$setting = Settings;  //其中$xx为新命的名。


Vue.prototype.$axios = axios
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
/* eslint-disable no-new */

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
