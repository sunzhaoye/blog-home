<template>
    <div class="home">
        <div class="article">
            <ul class="article-container">
                <li class="article-item" flex="main:left cross:center box:first" v-for="(item, index) in articleList" :key="index">
                    <span class="time">{{item.time}}</span>
                    <span class="title" @click="handleGoDetail(item)">{{item.article_title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { formatDateStr } from '@/filters'
export default {
    name: 'home',
    data() {
        return {
            menus: ['home', 'category', 'about'],
            articleList: []
        }
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
                this.articleList = data.article_list.map((v) => {
                    return {
                        article_title: v.article_title,
                        time: formatDateStr(new Date(v.date)),
                        id: v._id
                    }
                });
            }).catch((err) => {
                console.log(err);
            })
        },
        handleGoDetail(item) {
            this.$router.push(`/view/${item.id}`);
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
ul,
li {
    list-style: none;
}

.home {
    height: 100%;
    margin-top: -34px;
    overflow-y: auto;
    .article {
        .article-container {
            margin: 0 auto;
            .article-item {
                height: 100px;
                word-wrap: break-word;
                border-bottom: 1px solid #e6e6e6;
                .time {
                    line-height: 100px;
                    color: #999;
                    margin: 0 20px;
                }
                .title {
                    cursor: pointer;
                    width: 80%;
                    font-size: 20px;
                    color: #444;
                    &:hover {
                        color: #50bfff;
                    }
                }
            }
        }
    }
}
</style>


