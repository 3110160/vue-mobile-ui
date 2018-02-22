import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import comps from './plaugin'

Vue.use(comps);

Vue.config.productionTip = false; //关闭pro 环境提示
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
