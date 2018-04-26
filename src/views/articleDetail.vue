<template>
    <div class="article-detail" v-scroll="onScroll" ref="articleDetail">
        <div class="bar" :style="{ width: barWidth }"></div>
        <div class="container" ref="container">
            <div>
                <h1>
                    {{articleInfo.article_title}}
                </h1>
            </div>
            <p class="info" flex="main:center">
                <span>{{articleInfo.date}}</span>
                <span class="tag" v-show="articleInfo.category_name">{{articleInfo.category_name}}</span>
            </p>
            <div class="article-content" ref="articleContent">
            </div>
        </div>
    </div>
</template>

<script>
import { formatDateStr } from '@/filters'
import highlight from 'highlight';
import marked from 'marked'
let renderer = new marked.Renderer();
export default {
    name: 'articleDetail',
    data() {
        return {
            scrollTop: 0,
            barWidth: '0%',
            articleInfo: {
                article_title: '',
                article_content: ''
            }
        }
    },
    mounted() {
        marked.setOptions({
            renderer: renderer,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                return highlight.highlightAuto(code).value;
            }
        })
        this.$ajax({
            method: 'get',
            url: '/blog/articleContent',
            params: {
                article_id: this.$route.params.articleId
            }
        }).then(({ data }) => {
            var resData = data.articleDetailList;
            if (resData.length > 0) {
                this.articleInfo = resData[0];
                this.articleInfo.date = formatDateStr(new Date(this.articleInfo.date), 'yyyy-MM-dd hh:mm:ss');
                this.$refs.articleContent.innerHTML = this.articleInfo.article_content = marked(this.articleInfo.article_content, { renderer: renderer })
            }
        }).catch((err) => {
            console.log(err);
        });
    },
    methods: {
        onScroll(e) {
            let scollHeight = e.target.scrollTop;
            let maxScrollHeight = this.$refs.container.offsetHeight - this.$refs.articleDetail.offsetHeight;
            let scale = scollHeight / maxScrollHeight
            this.barWidth = scale * 100 + '%';
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.article-detail {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .bar {
        position: fixed;
        height: 0;
        border-bottom: 3px solid #50bfff;
    }
    .container {
        width: 50%;
        margin: 0 auto;
        h1 {
            text-align: center;
            font-size: 30px;
            color: #444;
            border: none;
        }

        .info {
            position: relative;
            text-align: center;
            color: #999;
            margin-top: 30px;
            .tag {
                margin-left: 50px;
                padding: 0 10px;
                height: 26px;
                line-height: 26px;
                border: 1px solid #CCC;
                border-radius: 4px;
            }
        }
        .article-content {
            margin-top: 40px;
            box-sizing: border-box;
        }
    }
}
</style>

