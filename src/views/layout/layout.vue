<template>
    <div class="layout">
        <div class="logo-box" flex="main:center">
            <Logo></Logo>
        </div>
        <div class="menus-box">
            <Menus></Menus>
        </div>
        <div class="main-box">
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Logo, Menus, appMain } from '@/views/layout'
export default {
    name: 'layout',
    components: {
        Logo,
        Menus,
        appMain
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.layout {
    height: 100%;
    position: relative;
    overflow-y: auto;
    .logo-box {
        width: 25%;
        position: fixed;
        left: 0px;
        top: 0px;
    }
    .menus-box {
        position: fixed;
        right: 30px;
        top: 0px;
    }
    .main-box {
        width: 50%;
        margin: 0 auto;
        margin-top: 140px;
    }
}
</style>
