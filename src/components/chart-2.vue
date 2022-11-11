<template>
    <div class="bordered  破获排名">
        <h2>案件破获排名</h2>
        <div class="chart2"></div>
        <div class="legend">
            <span class="first" /> 破案排名1
            <span class="second" /> 破案排名2
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
const px = (n) => { return n / 2420 * pageWidth }
export default {
    data() {
        return {
            newData:[],
            timer:'',
            data: [
                { name: '城关区公安局', 2021: 2, 2022: 3 },
                { name: '七里河区公安局', 2021: 2, 2022: 3 },
                { name: '西固区公安局', 2021: 2, 2022: 3 },
                { name: '安宁区公安局', 2021: 2, 2022: 3 },
                { name: '红古区公安局', 2021: 2, 2022: 3 },
                { name: '永登县公安局', 2021: 2, 2022: 3 },
                { name: '皋兰县公安局', 2021: 2, 2022: 3 },
                { name: '榆中县公安局', 2021: 2, 2022: 3 },
                { name: '新区公安局', 2021: 2, 2022: 3 },
            ],
        }
    },
    mounted() {
        this.initChart(this.data)
        this.timer = setInterval(() => {
            this.newData =   [
                { name: '城关区公安局', 2021: 2, 2022: Math.random() * 5 },
                { name: '七里河区公安局', 2021: 2, 2022: Math.random() * 5 },
                { name: '西固区公安局', 2021: 2, 2022: 3 },
                { name: '安宁区公安局', 2021: 2, 2022: 3 },
                { name: '红古区公安局', 2021: 2, 2022: Math.random() * 5 },
                { name: '永登县公安局', 2021: 2, 2022: Math.random() * 5 },
                { name: '皋兰县公安局', 2021: 2, 2022: 3 },
                { name: '榆中县公安局', 2021: 2, 2022: 3 },
                { name: '新区公安局', 2021: 2, 2022: 3 },
            ]
            this.data = this.newData
            this.initChart(this.data)
        }, 2000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {

        initChart(data) {
            var myChart = echarts.init(document.querySelector('.chart2'));
            // 绘制图表
            myChart.setOption({
                textStyle: {
                    fontSize: px(12),
                    color: '#79839e'
                },
                title: { show: false },
                legend: { show: false },
                grid: {
                    x: px(20),
                    y: px(20),
                    x2: px(20),
                    y2: px(20),
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    splitLine: { show: false },
                    axisLabel: { show: false },
                },
                yAxis: {
                    axisTick: { show: false },
                    type: 'category',
                    data: data.map(item => item.name),
                    axisLabel: {
                        fontSize: px(12),
                        formatter(val) {
                            return val.replace('公安局', '\n公安局');
                        }
                    }
                },
                series: [
                    {
                        name: '2021',
                        type: 'bar',
                        data: data.map(i => i[2021]),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        { offset: 0, color: '#2034f9' },
                                        { offset: 1, color: '#04a1ff' }
                                    ]
                                )
                            }
                        }
                    },
                    {
                        name: '2022',
                        type: 'bar',
                        data: data.map(i => i[2022]),
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        { offset: 0, color: '#b92ae8' },
                                        { offset: 1, color: '#6773e7' }
                                    ]
                                )
                            }
                        }
                    }
                ]

            });
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


.破获排名 {
    height: px(423);
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

    .chart2 {
        flex: 1;
        width: 100%;
    }

    .legend {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        padding: 0 px(20) px(10);

        >.first,
        >.second {
            display: inline-block;
            width: px(18);
            height: px(12);
            background: red;
            margin: 0 px(10);
        }

        .first {
            background: linear-gradient(to right, #2034f9, #04a1ff);
        }

        .second {
            background: linear-gradient(to right, #b92ae8, #6773e7);
        }
    }

}
</style>
