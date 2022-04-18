import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 字体
import '@/assets/style/index.css'
// // 通用
// import './scss/index.scss';

createApp(App).use(store).use(router).mount('#app')
