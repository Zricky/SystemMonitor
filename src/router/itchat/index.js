import Layout from 'layout/Layout'
export default {
  path: '/itchat',
  component: Layout,
  children: [{
    path: 'index',
    name: 'ItChat',
    component: () => import('@/views/itchat/itchat'),
    meta: { title: '微信数据', icon: 'form' }
  }]
}
