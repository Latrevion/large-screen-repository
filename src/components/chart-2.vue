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
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
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
                    data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
                        '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
                    axisLabel: {
                        fontSize: px(12),
                        formatter(val) {
                            return val.replace('公安局', '\n公安局');
                        }
                    }},
                    series: [
                        {
                            name: '2011',
                            type: 'bar',
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                        },
                        {
                            name: '2022',
                            type: 'bar',
                            data: [2, 3, 4, 5, 6, 7, 8, 9, 10]
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


.破获排名{
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

        >.first,>.second {
            display: inline-block;
            width: px(18);
            height: px(12);
            background: red;
            margin: 0 px(10);
        }

        .first {}

        .second {}
    }

}
</style>
