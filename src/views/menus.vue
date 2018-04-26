<template>
    <div>
        <ul class="menus" flex="main:center cross:center box:mean">
            <li :class="[{active: current === index}, 'menu-item']" v-for="(item, index) in menus" :key="index" @click="handleCheckMenu(item, index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'menus',
    data() {
        return {
            current: 0,
            menus: ['home', 'category', 'about']
        }
    },
    methods: {
        handleCheckMenu(item, index) {
            console.log(index)
            this.current = index;
            this.$router.push(`/${item}`);
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.menus {
    box-sizing: border-box;
    width: 300px;
    height: 100px;
    text-align: center;
    .menu-item {
        box-sizing: border-box;
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        &:hover {
            background-color: #f6f6f6;
        }
        &.active {
            border-bottom: 4px solid #50bfff;
        }
    }
}
</style>
