import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'
import './assets/styles/base.scss'
import './assets/iconfont/iconfont.css'
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import 'flex.css'
import 'markdown.css/markdown.css';
import axios from 'axios';
import VueSimplemde from 'vue-simplemde'
import vueScroll from 'vue-scroll'

Vue.use(VueSimplemde)
Vue.use(vueScroll)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})