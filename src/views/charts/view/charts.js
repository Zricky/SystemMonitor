/*
* @author       :  zhaojx
* @date         :  2018/12/7 14:36
* @description  :
* @version      :  V_1.0
*/
// import charts from 'charts'
import G2Line from '../components/G2Line.vue'
export default {
  name: 'charts',
  components: {

    G2Line

  },
  data() {
    return {
      serverData: ''
    }
  },
  created: function() {
    this.serverData =
      [{

        year: '2010',

        value: 3

      }, {

        year: '2011',

        value: 4

      }, {

        year: '2012',

        value: 3.5

      }, {

        year: '2013',

        value: 5

      }, {

        year: '2014',

        value: 4.9

      }, {

        year: '2015',

        value: 6

      }, {

        year: '2016',

        value: 7

      }, {

        year: '2017',

        value: 9

      }, {

        year: '2018',

        value: 13

      }]
  }
}
