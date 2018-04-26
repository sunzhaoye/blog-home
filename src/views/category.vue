<template>
    <div class="category">
        <!--<div class="logo-box" flex="main:center">
            <Logo></Logo>
        </div>
        <div class="menus-box">
            <Menus></Menus>
        </div>-->
        <div class="content">
            <template v-for="(item, index) in categoryList">
                <sub-category :subCategoryData="item" :key="index"></sub-category>
            </template>
        </div>
    </div>
</template>

<script>
// import Logo from './Logo'
// import Menus from './Menus'
import SubCategory from './SubCategory'
import { propsFilter } from '@/filters'
function formartArticleList(articleList) {
    let json = {};
    articleList.forEach((v) => {
        json[v.category_name] = 'abc';
    });
    var categoryList = [];
    for (var name in json) {
        let subCategoryList = propsFilter(articleList, {
            category_name: name
        })
        categoryList.push({
            name: name,
            subCategoryList: subCategoryList
        });
    }
    return categoryList
}
export default {
    name: 'category',
    data() {
        return {
            categoryList: []
        }
    },
    components: {
        // Logo,
        // Menus,
        SubCategory
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            this.$ajax({
                method: 'get',
                url: '/blog/article'
            }).then(({ data }) => {
                this.categoryList = formartArticleList(data.article_list);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.category {
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
        right: 0px;
        top: 0px;
    }
    .content {
        margin: 0 auto;
    }
}
</style>



