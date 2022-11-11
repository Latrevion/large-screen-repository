<template>
  <div class="案发街道统计-图1">
    <div class="main">
      <div class="chart12"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
const data = [
  { value: 0.08, name: '东岗路' },
  { value: 0.06, name: '段家滩' },
  { value: 0.11, name: '雁北' },
  { value: 0.09, name: '五泉山' },
  { value: 0.12, name: '中山路' },
  { value: 0.06, name: '庆阳路' },
  { value: 0.08, name: '武都路' },
  { value: 0.08, name: '酒泉路' },
  { value: 0.08, name: '天水路' },
];
export default {
  data() {
    return {
      data
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var myChart = echarts.init(document.querySelector('.chart12'));
      // 绘制图表
      myChart.setOption({
        textStyle: {
          fontSize: px(12),
          color: '#79839e'
        },
        title: { show: false },
        grid: {
          x: px(0),
          x2: px(0),
          y: px(0),
          y2: px(0),
          containLabel: true
        },
        xAxis: { show: false },
        yAxis: {
          show: false,
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'center',
          textStyle: { color: 'white' },
          itemWidth: px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find(i => i.name === name)?.value * 100 + '%';
            return name + ' ' + value;
          }
        },
        series: [
          {
            center: ['60%', '50%'],
            type: 'pie',
            radius: '80%',
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../views/_helper.scss';

.案发街道统计-图1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  // border: 1px solid #08397d;

  .main {
    position: relative;
    display: flex;
    flex: 1;

    >.chart12 {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>