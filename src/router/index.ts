import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: defineAsyncComponent(() => import('@/pages/home/index.vue')),
    // 在 vue3.0 里，通过 defineAsyncComponent 来定义异步组件。如果需要对异步组件进行配置，
    // 可以传递一个对象进去，在 vue2.0 中的 component 被重命名为了 loader，而且需要注意的是，
    // loader 函数本身不再接受 resolve 和 reject，且必须返回一个 Promise，保证异步加载始终按照预期工作
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
