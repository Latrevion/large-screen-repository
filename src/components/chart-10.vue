<template>
  <div class="chart10">
  </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var myChart = echarts.init(document.querySelector('.chart10'));
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
          data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
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
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLabel: {
            fontSize: px(12),
          },
          axisLine: {
            show: true,
            lineStyle: { color: '#083B70' }
          }
        },
        legend: { show: false },
        series: [{
          type: 'bar',
          data: [40, 22, 20, 18, 32],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0A97FB'
          }, {
            offset: 1,
            color: '#1E34FA'
          }]),
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../views/_helper.scss';

.chart10 {
  position: relative;
  display: flex;
  flex: 1;
}
</style>