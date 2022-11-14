<template>
    <div class="bordered manageStatistics">
        <h2>案发派出所管辖统计</h2>
        <div class="chart"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
const px = (n) => { return n / 2420 * pageWidth }
export default {
    data() {
        return {
            newData: [],
            data: [
                { name: '广东省', value: 10, },
                { name: '广西省', value: 20, },
                { name: '浙江省', value: 36, },
                { name: '福建省', value: 41, },
                { name: '山东省', value: 15, },
                { name: '山西省', value: 26, },
                { name: '四川省', value: 37, },
                { name: '河南省', value: 18, },
                { name: '湖南省', value: 29 }
            ]
        }
    },
    mounted() {
        this.initChart(this.data),
            this.timer = setInterval(() => {
                this.newData = [
                    { name: '广东省', value: Math.random() * 30 + 10 },
                    { name: '广西省', value: Math.random() * 2 + 20 },
                    { name: '浙江省', value: Math.random() * 3 + 35 },
                    { name: '福建省', value: Math.random() * 5 + 41 },
                    { name: '山东省', value: Math.random() * 8 + 15 },
                    { name: '山西省', value: Math.random() * 5 + 26 },
                    { name: '四川省', value: Math.random() * 3 + 37 },
                    { name: '河南省', value: Math.random() * 10 + 18 },
                    { name: '湖南省', value: Math.random() * 3 + 29 }
                ],
                    this.initChart(this.newData)
            }, 3000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        initChart(data) {
            var myChart = echarts.init(document.querySelector('.chart'));
            // 绘制图表
            myChart.setOption({
                textStyle: {
                    fontSize: px(12),
                    color: '#79839e'
                },
                title: { show: false },
                legend: { show: false },
                xAxis: {
                    axisLabel: {
                        fontSize: px(12)
                    },
                    data: data.map(item => item.name),
                    axisTick: { show: false },
                    axisLabel: {
                        fontSize: px(12),
                        formatter(val) {
                            if (val.length > 2) {
                                return val.slice(0, 2) + '\n' + val.slice(2)
                            } else {

                                return val
                            }
                        }
                    },
                },
                grid: {
                    x: px(20),
                    y: px(20),
                    x2: px(20),
                    y2: px(20),
                    containLabel: true
                },
                yAxis: {
                    splitLine: { show: false },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#79839e'
                        }
                    },
                    axisLabel: {
                        fontSize: px(12),
                    }
                },
                series: [
                    {
                        name: '数量',
                        type: 'bar',
                        data: data.map(item => item.value),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        { offset: 1, color: '#2034f9' },
                                        { offset: 0, color: '#04a1ff' }
                                    ]
                                )
                            }
                        },
                    }
                ]
            });
        }
    },
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


.manageStatistics {
    height: px(315);
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

    .chart {
        flex: 1;
        width: 100%;
    }
}
</style>
