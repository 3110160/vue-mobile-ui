import Layout from '@/uiComponents/layout/index.vue'import Icon from '@/uiComponents/icon/index.vue'import Navbar from '@/uiComponents/navbar/index.vue'import Button from '@/uiComponents/button/index.vue'import Example from '@/uiComponents/example/index.vue'import Mask from '@/uiComponents/mask/index.vue'const install = (Vue)=>{    "use strict";    //注册全局组件    Vue.component(Layout.name, Layout);    Vue.component(Icon.name, Icon);    Vue.component(Navbar.name, Navbar);    Vue.component(Button.name, Button);    Vue.component(Example.name, Example);    Vue.component(Mask.name, Mask);};//自动安装插件if (typeof window !== 'undefined' && window.Vue) {    install(window.Vue);}export default {install};