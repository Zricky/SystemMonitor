/*
* @author       :  zhaojx
* @date         :  2018/12/7 14:36
* @description  :
* @version      :  V_1.0
*/
import Layout from 'layout/Layout'
import Charts from 'views/charts/index'
export default {

  path: '/',
  component: Layout,
  redirect: '/charts',
  name: 'charts',
  hidden: true,
  children: [{
    path: 'charts',
    component: Charts
  }]

}

