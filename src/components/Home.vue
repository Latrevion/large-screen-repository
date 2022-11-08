<template>
    <div class="home">
        <header class="header" :style="{ backgroundImage: `url(${imgUrl})` }"></header>
        <main class="main">
            <section class="section1">
                <div class="bordered 管辖统计">
                    <h2>案发派出所管辖统计</h2>
                    <div class="chart"></div>
                </div>
            </section>
            <section class="bordered section2"></section>
            <section class="bordered section3"></section>
            <section class="bordered section4"></section>
            <section class="bordered section5"></section>
        </main>
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
                    data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
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
                    x: px(40),
                    y: px(40),
                    x2: px(40),
                    y2: px(40)
                },
                yAxis: {
                
                    splitLine: { show: false },
                    axisLine:{
                        show: true,
                        lineStyle:{
                            color:'#79839e'
                        }
                    },
                    axisLabel: {
                        fontSize: px(12),
                    }
                },
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
                    }
                ]
            });
        }
    },


    name: 'Home',
    data() {
        return {
            imgUrl: require('../assets/images/headerBg.png')
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";

.home {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #010310;
    color: white;

    >.header {
        background-size: cover;
        height: px(99);
    }

    >.main {
        padding-top: 30px;
        flex: 1;
        display: grid;
        grid-template:
            "box1 box2 box4 box5" 755fr
            "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
        grid-column-gap: px(28);
        grid-row-gap: px(28);

        >section {
            text-align: center;
        }

        .bordered {
            border: 1px solid #0764bc;
            border-radius: 4px;
            position: relative;
            box-shadow: 0 0 2px 0 #0f3361, inset 0 0 2px 0 #0f3361;
            background-color: #0c1139;

            &::before {
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

        >.section1 {
            grid-area: box1;

        }

        >.section2 {
            grid-area: box2;

        }

        >.section3 {
            grid-area: box3;

        }

        >.section4 {
            grid-area: box4;

        }

        >.section5 {
            grid-area: box5;
        }

        .管辖统计 {
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
    }
}
</style>
