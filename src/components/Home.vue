<template>
    <div class="home">
        <header class="header" :style="{ backgroundImage: `url(${imgUrl})` }"></header>
        <main class="main">
            <section class="section1">
                <Chart1 />
                <Chart2 />
            </section>
            <section class="bordered section2"></section>
            <section class="bordered section3"></section>
            <section class="bordered section4"></section>
            <section class="bordered section5"></section>
        </main>
        <footer>
            &copy; Latrevion 2019-{{year}}
        </footer>
    </div>
</template>
<script>
import Chart1 from './chart-1.vue'
import Chart2 from './chart-2.vue'
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
    components: { Chart1, Chart2 }
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
        margin: px(20) 0px 1px;
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
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
    }
}
</style>
