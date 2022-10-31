<template>
    <div>
        <header class="x" :style="{backgroundImage:`url(${imgUrl})`}"></header>
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
}
</style>
