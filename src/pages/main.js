import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import comps from './plaugin'

Vue.use(comps);

window.document.addEventListener('touchstart', function (event) {
    /* 解决 active兼容处理 即 伪类 :active 失效  */
}, false);

Vue.config.productionTip = false; //关闭pro 环境提示
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
