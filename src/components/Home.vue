<template>
    <div>
        <div class="x" :style="{backgroundImage:`url(${imgUrl})`}"></div>
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
<style lang="scss">
@import "../views/_helper.scss";

.x {
    background-size: cover;
    height: px(99);
    // border: 1px solid gold;
}
</style>
