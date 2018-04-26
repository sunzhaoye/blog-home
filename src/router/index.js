import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Home from '@/views/home'
import ArticleDetail from '@/views/articleDetail'
import Category from '@/views/category'
import About from '@/views/about'

Vue.use(Router)
export const routes = [{
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [{
        path: 'home',
        component: Home,
        name: '首页'
    }, {
        path: 'category',
        component: Category,
        name: '文章分类'
    }, {
        path: 'about',
        component: About,
        name: '关于博主'
    }]
}, {
    path: '/view/:articleId',
    component: ArticleDetail,
    name: '文章详情'
}]

const router = new Router({
    mode: 'history',
    routes: routes
})

export default router;