<template>
  <div class="streetOfCrime-img2">
    <div class="main">
      <div class="chart11" />
    </div>
    <div class="legend">
      <span :style="{ background: colors[0] }" />刑事
      <span :style="{ background: colors[1] }" />民事
      <span :style="{ background: colors[2] }" />经济
      <span :style="{ background: colors[3] }" />其他
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
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
      var myChart = echarts.init(document.querySelector('.chart11'));
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
        xAxis: {show: false},
        yAxis: {
          show: false,
        },
        legend: { show: false },
        series: [
          {

            startAngle: -20,
            type: 'pie',
            radius: ['25%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'outside', textStyle: { color: 'white', fontSize: px(20) },
              distanceToLabelLine: 0,
              formatter(options) {
                return options.value * 100 + '%';
              }
            },
            labelLine: { show: true, length: 0 },
            roseType: 'area',
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            data: [
              { value: 0.31, name: '刑事案件' },
              { value: 0.23, name: '民事案件' },
              { value: 0.19, name: '经济案件' },
              { value: 0.27, name: '其他案件' },
            ]
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../views/_helper.scss';

.streetOfCrime-img2 {
  flex: 1;
  display: flex;
  flex-direction: column;
  // border: 1px solid #08397d;

  .legend {
    height: px(40);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: px(12);
    >span {
      display: inline-block;
      width: px(16);
      height: px(10);
      border-radius: px(2);
      margin: 0 px(10);
      
    }
  }

  .main {
    position: relative;
    display: flex;
    flex: 1;

    >.chart11 {
      flex: 1;
      width: 100%;
    }
  }
}
</style>