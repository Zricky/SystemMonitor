<template>
  <g2-line
    v-if="isLoading"
    :id="'c1'"
    :weight="600"
    :height="400"
    :char_data="serverData"
  />
</template>

<script>
import G2Line from '@/components/G2Line'
import { getCharts } from 'api/charts'
export default {
  components: {
    G2Line
  },
  data() {
    return {
      serverData: null,
      isLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.isLoading = false
      getCharts().then(response => {
        console.log(response)
        this.serverData = response.data
        this.isLoading = true
      })
    }
  }
  // 此处省略从服务器获取数据并且赋值给this.serverData
  // 推荐使用axios请求接口
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
