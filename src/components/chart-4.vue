<template>
    <div class="bordered timeOfCrime">
        <h2>案发时段分析</h2>
        <div class="chart4"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
const px = (n) => { return n / 2420 * pageWidth }
export default {
    data: function () {
        return {
            data: [
                { value: 0.15 },
                { value: 0.13 },
                { value: 0.11 },
                { value: 0.13 },
                { value: 0.14 },
                { value: 0.15 },
                { value: 0.16 },
                { value: 0.18 },
                { value: 0.21 },
                { value: 0.19 },
                { value: 0.17 },
                { value: 0.16 },
                { value: 0.15 }
            ]
        }
    },
    mounted() {
        this.initChart(this.data)
        this.timer = setInterval(( )=>{ 
            this.data = [
                { value: Math.random()*0.1 +0.15 },
                { value: Math.random()*0.1 +0.13 },
                { value: Math.random()*0.1 +0.11 },
                { value:Math.random()*0.1 + 0.13 },
                { value: Math.random()*0.1 +0.14 },
                { value: Math.random()*0.1 +0.15 },
                { value: 0.16 },
                { value: 0.18 },
                { value: 0.21 },
                { value: 0.19 },
                { value: 0.17 },
                { value:Math.random()*0.1 + 0.16 },
                { value: Math.random()*0.1 +0.15 }
            ]
            this.initChart(this.data)
        },3000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        initChart(data) {
            var myChart = echarts.init(document.querySelector('.chart4'));
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
                    type: 'category',
                    boundaryGap: false,
                    data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
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
                series: [{
                    type: 'line',
                    data: data.map(item => item.value),
                    symbol: 'circle',
                    symbolSize: px(12),
                    lineStyle: { width: px(2) },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }]),
                    }
                }]
            }
            )
        }
    }
}

</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";

.bordered {
    border: 1px solid #0764bc;
    border-radius: 4px;
    position: relative;
    box-shadow: 0 0 2px 0 #0f3361, inset 0 0 2px 0 #0f3361;
    background-color: #0c1139;

    &::before {
        pointer-events: none;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        border-radius: 4px;
        box-shadow:
            21px 0 0 -20px #0f3361,
            -21px 0 0 -20px #0f3361,
            0 21px 0 -20px #0f3361,
            0 -21px 0 -20px #0f3361,
            11px 0 0 -10px #0d4483,
            -11px 0 0 -10px #0d4483,
            0 11px 0 -10px #0d4483,
            0 -11px 0 -10px #0d4483,
        ;
    }
}


.timeOfCrime {
    height: px(363);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        flex-shrink: 0;
        border: 1px solid #0a5299;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size: px(22);
        line-height: px(24);
        padding: px(10) px(28);
        text-shadow: 0 0 px(3) white;
    }

    .chart4 {
        flex: 1;
        width: 100%;
    }
}
</style>
