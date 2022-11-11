<template>
    <div class="年龄段-图1">
        <div class="main">
            <div class="chart7"></div>
            <div class="text">性别</div>
        </div>
        <div class="legend">
            <span class="male" />男
            <span class="female" />女
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
const px = (n) => { return n / 2420 * pageWidth }
export default {
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            var myChart = echarts.init(document.querySelector('.chart7'));
            // 绘制图表
            myChart.setOption({
                color: ['#8D70F8', '#33A4FA'],
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
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: { show: false },
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data: [
                        { value: 0.2, name: '女' },
                        { value: 0.8, name: '男' },
                    ]
                }]
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../views/helper.scss';

.年龄段-图1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #08397d;

    .legend {
        height: px(40);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        // padding-right: px(10);
        >span {
            display: inline-block;
            width: px(40);
            height: px(20);
            border-radius: px(4);
            margin: 0 px(10);
        }

        .male {
            background: #33a4fa;
        }

        .female {
            background: #8d70f8;
        }
    }

    .main {
        position: relative;
        display: flex;
        flex: 1;


        >.chart7 {
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
}
</style>