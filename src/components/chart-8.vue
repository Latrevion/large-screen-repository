<template>
  <div class="ageGroup-img2">
    <div class="main">
      <div class="chart8" />
      <div class="text">年龄段</div>
    </div>
    <div class="legend">
      <span :style="{ background: colors[0] }" />10-20
      <span :style="{ background: colors[1] }" />20-30
      <span :style="{ background: colors[2] }" />30-40
      <span :style='{ background: colors[3] }' />40-50
      <span :style="{ background: colors[4] }" />50-60
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
export default {
  data() {
    return {
      colors
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var myChart = echarts.init(document.querySelector('.chart8'));
      // 绘制图表
      myChart.setOption({
        color: colors,
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
          show: false,
        },
        yAxis: {
          show: false,
        },
        legend: { show: false },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(20) },
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: { show: false },
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            { value: 0.07, name: '10-20' },
            { value: 0.10, name: '20-30' },
            { value: 0.23, name: '30-40' },
            { value: 0.28, name: '40-50' },
            { value: 0.32, name: '50-60' },
          ]
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../views/_helper.scss';

.ageGroup-img2 {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: px(290);
  flex-shrink: 0;

  .main {
    position: relative;
    display: flex;
    flex: 1;

    >.chart8 {
      flex: 1;
      width: 100%;
    }

    >.text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #33a4fa;
      font-size: px(40);
      text-shadow: 0 0 px(20) #33a4fa;
      font-weight: bold;
    }
  }

  .legend {
    height: px(40);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    >span {
      display: inline-block;
      width: px(16);
      height: px(10);
      border-radius: px(2);
      margin: 0 px(10);
    }
  }

}
</style>