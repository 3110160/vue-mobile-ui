import Vue from 'vue'
import Router from 'vue-router'

//异步加载组件
const index =()=>import('./index/index.vue');
const icon =()=>import('./icon/index.vue');
const font = ()=>import('./font/index.vue');
const color =()=>import('./color/index.vue');
const button =()=>import('./button/index.vue');
const mask =()=>import('./mask/index.vue');
const Tips =()=>import('./topTips/index.vue');
const popup =()=>import('./popup/index.vue');
const toast =()=>import('./toast/index.vue');
const confirm =()=>import('./confirm/index.vue');
const dialog =()=>import('./dialog/index.vue');
const loading =()=>import('./loading/index.vue');


Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
      {
          path:'/',
          name:'index',
          component:index
      },{
          path:'/icon',
          name:'icon',
          component:icon
      },{
          path:'/font',
          name:'font',
          component:font
      },{
          path:'/color',
          name:'color',
          component:color
      },{
          path:'/button',
          name:'button',
          component:button
      },{
          path:'/mask',
          name:'mask',
          component:mask
      },{
          path:'/tips',
          name:'tips',
          component:Tips
      },{
          path:'/popup',
          name:'popup',
          component:popup
      },{
          path:'/toast',
          name:'toast',
          component:toast
      },{
          path:'/confirm',
          name:'confirm',
          component:confirm
      },{
          path:'/dialog',
          name:'dialog',
          component:dialog
      },{
          path:'/loading',
          name:'loading',
          component:loading
      }
  ]
})
