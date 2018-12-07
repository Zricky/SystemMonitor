<template>
  <p :id="id"></p>
</template>
<script>
import G2 from '@antv/g2'

export default {
  data () {
    return {chart: null}
  },
  props: {
    charData: {
      type: Array,
      default: function () {
        return {data: []}
      }
    },
    id: String,
    weight: Number,
    height: Number
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart: function () {
      this.chart && this.chart.destory()
      this.chart = new G2.Chart({container: this.id, weight: this.weight, height: this.height})
      this.chart.source(this.charData)
      this.chart.interval().position('year*value').color('year')
      // this.chart.scale('value', {min: 0})
      // this.chart.scale('year', {range: [0, 1]})
      // this.chart.tooltip({crosshairs: {type: 'line'}})
      this.chart.tooltip({
        triggerOn: 'mousemove' | 'click' | 'none', // tooltip 的触发方式，默认为 mousemove
        showTitle: true, // 是否展示 title，默认为 true
        crosshairs: {
          type: 'rect' || 'x' || 'y' || 'cross',
          style: {
            // 图形样式
          }
        }, // tooltip 辅助线配置
        offset: 0, // tooltip 距离鼠标的偏移量
        containerTpl: '<div class="g2-tooltip">' + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>' + '<ul class="g2-tooltip-list"></ul></div>', // tooltip 容器模板
        itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>', // tooltip 每项记录的默认模板
        inPlot: true, // 将 tooltip 展示在指定区域内
        follow: true, // tooltip 是否跟随鼠标移动
        shared: true || false, // 默认为 true, false 表示只展示单条 tooltip
        position: 'left' || 'right' || 'top' || 'bottom' // 固定位置展示 tooltip
      })
      // this.chart.line().position('year*value')
      // this.chart.point().position('year*value').size(4).shape('circle').style({stroke: '#fff', lineWidth: 1})
      this.chart.render()
    }
  }
}
</script>
<style scoped>
</style>
