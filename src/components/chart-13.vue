<template>
  <div class="chart13">
  </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
const data = [
  { value: 0.08, name: '天水路' },
  { value: 0.06, name: '段家滩' },
  { value: 0.11, name: '雁北' },
  { value: 0.09, name: '五泉山' },
  { value: 0.12, name: '中山路' },
  { value: 0.06, name: '庆阳路' },
  { value: 0.08, name: '武都路' },
  { value: 0.08, name: '酒泉路' },
  { value: 0.08, name: '东岗路' },
];
export default {
  data() {
    return {
      data
    }
  },
  mounted() {
    this.initChart(this.data)
    this.timer = setInterval(() => {
      this.data = [
        { value: Math.random() * 0.05 + 0.08, name: '天水路' },
        { value: 0.06, name: '段家滩' },
        { value: Math.random() * 0.05 + 0.11, name: '雁北' },
        { value: Math.random() * 0.05 +0.09, name: '五泉山' },
        { value: Math.random() * 0.05 +0.12, name: '中山路' },
        { value: Math.random() * 0.05 + 0.06, name: '庆阳路' },
        { value: 0.08, name: '武都路' },
        { value: Math.random() * 0.05 + 0.08, name: '酒泉路' },
        { value: 0.08, name: '东岗路' },
      ]
      this.initChart(this.data)
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    initChart(data) {
      var myChart = echarts.init(document.querySelector('.chart13'));
      // 绘制图表
      myChart.setOption({
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
          boundaryGap: ['5%', '5%'],
          data: data.map(i => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: '#083B70' }
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 2) {
                const array = val.split('');
                array.splice(2, 0, '\n');
                return array.join('');
              } else {
                return val;
              }
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#083B70' }
          },
          axisLabel: {
            fontSize: px(12),
            formatter(value) {
              return (value * 100).toFixed(0) + '%';
            }
          }
        },
        legend: { show: false },
        series: [{
          type: 'bar',
          data: data.map(i => i.value),
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              { offset: 1, color: '#2034f9' },
              { offset: 0, color: '#04a1ff' }
            ]
          )
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../views/_helper.scss';

.chart13 {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>