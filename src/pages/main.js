import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import comps from './plaugin'

Vue.use(comps);

window.document.addEventListener('touchstart', function (event) {
    /* 解决 active兼容处理 即 伪类 :active 失效  */
}, false);

router.beforeResolve((to,from,next)=>{
    console.log('global beforeResolve',to.path,from.path)
    next()
});
router.beforeEach((to,from,next)=>{
    console.log('global beforeEach',to.path,from.path)
    next();
});


router.afterEach((to,from)=>{
    console.log('global afterEach')
});

Vue.config.productionTip = false; //关闭pro 环境提示
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
