/*
* @author       :  zhaojx
* @date         :  2018/12/7 14:36
* @description  :
* @version      :  V_1.0
*/
import request from '@/utils/request'

export function getCharts(params) {
  console.log()
  return request({
    url: '/charts/getStatistics',
    method: 'get',
    params
  })
}
