<template>
    <div class="home">
        <header class="header" :style="{ backgroundImage: `url(${imgUrl})` }"></header>
        <main class="main">
            <section class="section1">
                <Chart1 />
                <Chart2 />
            </section>
            <section class="section2">
                <Chart3 />
                <Chart4 />
            </section>
            <section class=" section3">
                <Chart5 />
            </section>
            <section class="section4">
                <Chart6 />
                <div class="bordered ageGroup">
                    <h2>犯罪人员年龄段分布</h2>
                    <div class="charts">
                        <Chart7 />
                        <Chart8 />
                        <Chart9 />
                    </div>
                </div>
            </section>
            <section class=" section5">
                <div class="bordered row1 typeOfIncident">
                    <h2>案发类型统计</h2>
                    <div class="charts">
                        <Chart11 />
                        <Chart10 />
                    </div>
                </div>
                <div class="bordered row2 streetOfCrime">
                    <h2>案发街道统计</h2>
                    <div class="charts12To13">
                        <Chart12 />
                        <Chart13 />
                    </div>
                </div>
                <div class="bordered row3 MeansOfCrime">
                    <h2>作案手段分析</h2>
                    <Chart14 />
                </div>
            </section>
        </main>
        <footer>
            &copy; Latrevion 2019-{{ year }}
        </footer>
    </div>
</template>
<script>
import Chart1 from './chart-1.vue'
import Chart2 from './chart-2.vue'
import Chart3 from './chart-3.vue'
import Chart4 from './chart-4.vue'
import Chart5 from './chart-5.vue'
import Chart6 from './chart-6.vue'
import Chart7 from './chart-7.vue'
import Chart8 from './chart-8.vue'
import Chart9 from './chart-9.vue'
import Chart10 from './chart-10.vue'
import Chart11 from './chart-11.vue'
import Chart12 from './chart-12.vue'
import Chart13 from './chart-13.vue'
import Chart14 from './chart-14.vue'
export default {
    computed: {
        year() {
            return new Date().getFullYear()
        }
    },
    name: "Home",
    data() {
        return {
            imgUrl: require("../assets/images/headerBg.png")
        };
    },
    components: {
        Chart1, Chart2, Chart3, Chart4, Chart5,
        Chart6, Chart7, Chart8, Chart9, Chart10, Chart11, Chart12, Chart13, Chart14
    }
}
</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";

.home {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #010310;
    color: white;
    font-size: px(16);

    >.header {
        background-size: cover;
        height: px(99);
        width: px(2420);
        margin: 0 auto;
    }

    >footer {
        height: px(68);
        border: 1px solid #0d2d59;
        margin: px(20) 0 px(1);
        border-radius: 4px;
        background: #0c0d2b;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    >.main {
        width: px(2420);
        margin: 0 auto;
        padding-top: px(30);
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
            background-color: #0f113a;

            &.native-place {
                background-color: #030310;
            }

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

        >.section1 {
            grid-area: box1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        >.section2 {
            grid-area: box2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        >.section3 {
            grid-area: box3;

        }

        >.section4 {
            grid-area: box4;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        >.section5 {
            grid-area: box5;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            >.row1 {
                height: px(317);
            }

            >.row2 {
                height: px(317);
            }

            >.row3 {
                height: px(455);

                &.MeansOfCrime {
                    padding: 0 px(24);

                }
            }
        }

        .ageGroup,
        .typeOfIncident,
        .streetOfCrime,
        .MeansOfCrime {
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

            >.charts {
                width: 100%;
                flex: 1;
                display: flex;
                padding: px(30);
            }

            >.charts12To13 {
                width: 100%;
                flex: 1;
                display: flex;
            }
        }
    }
}
</style>
