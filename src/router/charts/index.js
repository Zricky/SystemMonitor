/*
* @author       :  zhaojx
* @date         :  2018/12/7 14:36
* @description  :
* @version      :  V_1.0
*/
import Layout from 'layout/Layout'
// import Charts from 'views/charts/index'
export default {
  path: '/charts',
  component: Layout,
  children: [{
    path: 'index',
    name: 'Charts',
    component: () => import('@/views/charts/index'),
    meta: { title: '图表', icon: 'form' }
  }]

}

