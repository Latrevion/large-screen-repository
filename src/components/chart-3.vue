<template>
    <div class="bordered 发案趋势">
        <h2>发案趋势分析</h2>
        <div class="chart3"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
const px = (n) => { return n / 2420 * pageWidth }
export default {
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            var myChart = echarts.init(document.querySelector('.chart3'));
            // 绘制图表
            myChart.setOption({
                textStyle: {
                    fontSize: px(12),
                    color: '#79839e'
                },
                title: { show: false },
                legend: {
                    bottom: px(10),
                    textStyle: { color: 'white' },
                    itemWidth: px(30),
                    itemHeight: px(16)
                },
                grid: {
                    x: px(20),
                    x2: px(20),
                    y: px(20),
                    y2: px(70),
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
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
                series: [
                    {
                        name: '抢劫',
                        type: 'line',
                        data: [0.04, 0.05, 0.03, 0.04, 0.07, 0.06, 0.07, 0.08, 0.09].reverse(),
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: { width: px(2) }
                    },
                    {
                        name: '醉驾',
                        type: 'line',
                        data: [0.03, 0.03, 0.04, 0.05, 0.06, 0.07, 0.05, 0.09, 0.10].reverse(),
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: { width: px(2) }
                    },
                    {
                        name: '盗窃',
                        type: 'line',
                        data: [0.05, 0.04, 0.05, 0.06, 0.08, 0.07, 0.06, 0.10, 0.10].reverse(),
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: { width: px(2) }
                    },
                    {
                        name: '故意杀人',
                        type: 'line',
                        data: [0.04, 0.05, 0.08, 0.07, 0.08, 0.10, 0.08, 0.11, 0.12].reverse(),
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: { width: px(2) }
                    },
                    {
                        name: '故意伤人',
                        type: 'line',
                        data: [0.05, 0.06, 0.07, 0.08, 0.08, 0.07, 0.11, 0.12, 0.12].reverse(),
                        symbol: 'circle',
                        symbolSize: px(12),
                        lineStyle: { width: px(2) }
                    }
                ]
            }
            );
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


.发案趋势 {
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

    .chart3 {
        flex: 1;
        width: 100%;
    }
}
</style>
