// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'

import  './assets/css/style.css'

import './assets/css/loginstyle.css'
import  './assets/css/style-responsive.css'


import  './assets/icon/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import {  Loading, Message } from 'element-ui';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$http=axios;
Vue.use(Loading.directive);
Vue.config.productionTip = false;

// 超时时间
axios.defaults.timeout = 5000
    // http请求拦截器
var loadinginstace;
axios.interceptors.request.use(config => {
        // element ui Loading方法
        loadinginstace = Loading.service({
            fullscreen: true,
            text: "拼命加载中",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.2)"
        })
        return config
    }, error => {
        loadinginstace.close()
        Message.error({
            message: '加载超时'
        })
        return Promise.reject(error)
    })
    // http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadinginstace.close()
    return data
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})
// Vue.use(Menu)
// Vue.use(Submenu)
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
