import Vue from 'vue'import template from './src/index.vue'const Tip = Vue.extend(template);const instance = new Tip({   el:document.createElement('div')});const hide = (delay)=>{    return new Promise((resolve)=>{        let timer = setTimeout(()=>{            instance.show = false;            clearTimeout(timer);            resolve('ok')        },delay||1500)    })};const show = (options={})=>{    let elem = instance.$el;    if(typeof options === 'string'){        options = {            msg:options        }    }    instance.msg = options.msg;    instance.type = options.type;    elem&&document.body.appendChild(elem);    instance.show = true;    hide(options.delay).then(()=>{        let timer = setTimeout(()=>{            let elem = instance.$el;            elem.parentNode&&document.body.removeChild(elem);            clearTimeout(timer);        },200)    })};export default {    show:show}