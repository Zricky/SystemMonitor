import Layout from 'layout/Layout'
export default {
  path: '/terminal',
  component: Layout,
  children: [{
    path: 'index',
    name: 'Terminal',
    component: () => import('@/views/terminal/WebSSH'),
    meta: { title: '终端', icon: 'form' }
  }]
}
