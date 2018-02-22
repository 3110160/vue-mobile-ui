import Vue from 'vue'
import Router from 'vue-router'

import index from './index/index.vue'
import icon from './icon/index.vue'

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
      }
  ]
})
