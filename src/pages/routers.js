import Vue from 'vue'
import Router from 'vue-router'

import index from './index/index.vue'
import icon from './icon/index.vue'
import font from './font/index.vue'
import color from './color/index.vue'
import button from './button/index.vue'
import mask from './mask/index.vue'
import Tips from './topTips/index.vue'
import popup from './popup/index.vue'
import toast from './toast/index.vue'
import confirm from './confirm/index.vue'
import dialog from './dialog/index.vue'

Vue.use(Router);

export default new Router({
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
      }
  ]
})
