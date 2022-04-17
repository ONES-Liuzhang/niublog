import { createRouter } from 'vue-router'

/**
 * TODO 这个type没用 为啥？
 * @type {import('vue-router').RouteRecordRaw }
 */
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('./views/home')
  }]

// 导出公共的创建router的方法，为保证客户端和服务器的路由一致性
export default function (history) {
  return createRouter({
    history,
    routes,
  })
}