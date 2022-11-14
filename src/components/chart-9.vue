<template>
  <div class="ageGroup-img3">
    <h3>犯罪年龄趋势图</h3>
    <div class="chart9">
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
export default {
  data() {
    return {
      newData: [],
      data: [
        { value: 0.15 },
        { value: 0.18 },
        { value: 0.26 },
        { value: 0.32 },
        { value: 0.26 },
        { value: 0.23 },
        { value: 0.23 },
        { value: 0.20 }
      ]
    }
  },
  mounted() {
    this.initChart(this.data)
    this.timer = setInterval(() => {
      this.newData = [
        { value: Math.random() * 0.03.toFixed(2) + 0.15 },
        { value: Math.random() * 0.03.toFixed(2)+ 0.18 },
        { value: Math.random() * 0.03.toFixed(2) + 0.26 },
        { value: Math.random() * 0.03.toFixed(2) + 0.32 },
        { value: Math.random() * 0.03.toFixed(2) + 0.26},
        { value: Math.random() * 0.03.toFixed(2) + 0.26 },
        { value: Math.random() * 0.03.toFixed(2)+ 0.23 },
        { value: Math.random() * 0.03.toFixed(2)+ 0.20 }
      ]
      this.data = this.newData
      this.initChart(this.data)
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    initChart(data) {
      var myChart = echarts.init(document.querySelector('.chart9'));
      // 绘制图表
      myChart.setOption({
        color: '#F7A110',
        textStyle: {
          fontSize: px(12),
          color: '#79839e'
        },
        title: { show: false },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(20),
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 18, 28, 38, 48, 58, 68, 78],
          splitLine: { show: true, lineStyle: { color: '#073E78' } },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            fontSize: px(12),
          }
        },
        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { color: '#073E78' } },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              return val * 100 + '%';
            }
          }
        },
        legend: { show: false },
        series: [{
          color: '#92ee8c',
          type: 'line',
          data:  data.map(i => i.value),
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#b7de83',
            }, {
              offset: 1,
              color: '#75b17f',
              color: 'rgba(183,222,131,0.5)'
            }]),
          }
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../views/_helper.scss';

.ageGroup-img3 {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #08397d;

  h3 {
    font-size: px(20);
    color: #7ab6db;
    margin-top: px(6);
  }

  .chart9 {
    position: relative;
    display: flex;
    flex: 1;
  }
}
</style>