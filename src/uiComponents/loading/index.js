import Vue from 'vue'import template from './src/index.vue'const Tip = Vue.extend(template);const instance = new Tip({    el:document.createElement('div')});var timer,time;const show = (options={})=>{    timer&&clearTimeout(timer);    let elem = instance.$el;    if(typeof options === 'string'){        options = {            msg:options        }    }    instance.msg = options.msg;    instance.type = options.type;    elem&&document.body.appendChild(elem);    time&&clearTimeout(time);    time = setTimeout(()=>{        instance.show = true;        clearTimeout(time);    },100);};const hide = ()=>{    instance.show = false;    timer&&clearTimeout(timer);    timer = setTimeout(()=>{        let elem = instance.$el;        elem.parentNode&&document.body.removeChild(elem);        clearTimeout(timer);    },200)};export default {    show:show,    hide:hide}