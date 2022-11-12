<template>
    <div class="bordered 籍贯">
        <h2>全国犯罪人员籍贯分布地</h2>
        <span class="time">{{time}}</span>
        <div class="wrapper">
            <div class="chart6" />
            <div class="legend bordered">
                <span class="icon" :style="{ background: colors['湖南省'] }" />长沙籍
                <span class="icon" :style="{ background: colors['四川省'] }" />边城籍
                <span class="icon" :style="{ background: colors['广东省'] }" />广州籍
            </div>
            <div class="notes">此地图仅显示了中国的部分区域</div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
import chinaGeo from '../geo/chinaGeo.json'
const px = (n) => { return n / 2420 * pageWidth }
const colors = {
    '湖南省': '#BB31F7',
    '四川省': '#15B8FD',
    '广东省': '#06E1EE',
}
export default {
    data() {
        return {
            colors,
            time:new Date().toLocaleString(),
        }
    },
    mounted() {
        this.initChart()
        this.timer = setInterval(() => {
            this.time = new Date().toLocaleString()
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        initChart() {
            var myChart = echarts.init(document.querySelector('.chart6'));
            echarts.registerMap('CN', chinaGeo);
            // 绘制图表
            myChart.setOption({
                backgroundColor: '#020310',
                textStyle: {
                    fontSize: px(12),
                    color: '#79839e'
                },
                title: { show: false },
                legend: { show: false },
                grid: {
                    x: px(20),
                    x2: px(20),
                    y: px(20),
                    y2: px(20),
                    containLabel: true
                },
                xAxis: { show: false },
                yAxis: { show: false },
                series: [
                    {
                        type: 'map',
                        mapType: 'CN', // 自定义扩展图表类型
                        data: [
                            { name: '湖南省', value: 10 },
                        ],
                        label: { show: false, color: 'white' },
                        itemStyle: {
                            areaColor: '#010D3D',
                            color: colors['湖南省'],
                            borderColor: '#9bb9dd',
                            emphasis: {
                                label: { color: 'white' },
                                areaColor: '#5470C6',
                            }
                        }
                    },
                    {
                        type: 'map',
                        mapType: 'CN', // 自定义扩展图表类型
                        data: [
                            { name: '四川省', value: 100 },
                        ],
                        itemStyle: {
                            areaColor: '#010D3D',
                            color: colors['四川省'],
                            borderColor: 'yellow',
                            emphasis: {
                                label: { color: 'white' },
                                areaColor: '#5470C6',
                            }
                        }
                    },
                    {
                        type: 'map',
                        mapType: 'CN', // 自定义扩展图表类型
                        data: [
                            { name: '广东省', value: 100 },
                        ],
                        itemStyle: {
                            areaColor: '#9bb9dd',
                            color: colors['广东省'],
                            borderColor: '#01A7F7',
                            emphasis: {
                                label: { color: 'white' },
                                areaColor: '#5470C6',
                            }
                        }
                    },
                ]
            }
            )
        }
    }
}

</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";

.bordered.籍贯 {
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

    .time{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 5px 10px;
        background-color: rgba(0,0,0,0.5);
        z-index: 1;
        color: #6e6ab1;
        font-size: px(22);
    }
}
 



.籍贯 {
    height: px(750);
    background: #020310;
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


    >.wrapper {
        position: relative;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #020310;

        .chart6 {
            flex: 1;
            width: 100%;
        }

        .legend {
            position: absolute;
            top: px(40);
            left: px(20);
            display: flex;
            align-items: center;
            font-size: px(22);
            padding: px(20) px(10) px(20) 0;
            border-radius: 0;

            &.bordered {
                background-color: #0f113a;
                border: 1px solid #0764bc;
                border-radius: 4px;
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

            .icon {
                margin: 0 px(10);
                display: inline-block;
                width: px(16);
                height: px(16);
                border-radius: 50%;
                background: #1cecd9;
            }
        }

        .notes {
            position: absolute;
            bottom: px(10);
            right: px(10);
        }
    }
}
</style>
   