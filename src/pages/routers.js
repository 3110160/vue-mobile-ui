import Vue from 'vue'
import Router from 'vue-router'

import index from './index/index.vue'
import icon from './icon/index.vue'
import font from './font/index.vue'
import color from './color/index.vue'

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
      }
  ]
})
