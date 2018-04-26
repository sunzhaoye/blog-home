<template>
    <div class="sub-category">
        <div class="category-name">{{subCategoryData.name}}</div>
        <ul class="article-container">
            <li class="article-item" flex="main:left cross:center box:first" v-for="(item, index) in subCategoryData.subCategoryList" :key="index">
                <span class="time">{{item.date | filterTime}}</span>
                <span class="title" @click="handleGoDetail(item)">{{item.article_title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { formatDateStr } from '@/filters'
export default {
    name: 'subCategory',
    props: {
        subCategoryData: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    filters: {
        filterTime: function(value) {
            // console.log(value)
            return formatDateStr(new Date(value));
        }
    },
    methods: {
        handleGoDetail(item) {
            this.$router.push(`/view/${item._id}`);
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
ul,
li {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

.sub-category {
    padding-bottom: 20px;
    .category-name {
        border-left: 5px solid #50bfff;
        padding-left: 20px;
    }
    .article-container {
        margin-top: 20px;
        .article-item {
            height: 60px;
            word-wrap: break-word;
            border-bottom: 1px solid #e6e6e6;
            .time {
                line-height: 60px;
                color: #999;
                margin: 0 30px 0 20px;
            }
            .title {
                cursor: pointer;
                width: 80%;
                color: #444;
                &:hover {
                    color: #50bfff;
                }
            }
        }
    }
}
</style>
