<template>
    <div class="home">
        <header class="header" :style="{ backgroundImage: `url(${imgUrl})` }"></header>
        <main class="main">
            <section class="section1"></section>
            <section class="section2"></section>
            <section class="section3"></section>
            <section class="section4"></section>
            <section class="section5"></section>
        </main>
    </div>
</template>
<script>
export default {
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

    >.header {
        background-size: cover;
        height: px(99);
    }

    >.main {
        flex: 1;
        display: grid;
        grid-template:
            "box1 box2 box4 box5" 755fr
            "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
        grid-column-gap: px(28);
        grid-row-gap: px(28);

        >.section1 {
            grid-area: box1;
            background: pink;
        }

        >.section2 {
            grid-area: box2;
            background: lightgray;
        }

        >.section3 {
            grid-area: box3;
            background: lightblue;
        }

        >.section4 {
            grid-area: box4;
            background: lightcyan;
        }

        >.section5 {
            grid-area: box5;
            background: lightyellow;
        }
    }
}
</style>
