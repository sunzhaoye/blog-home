<template>
    <div class="about">
        <div class="about-content">
            <div class="about-author">
                <h3>关于作者</h3>
                <p>web前端开发，主要技能包javaScript、vue、node等</p>
            </div>
            <div class="about-blog">
                <h3>关于博客</h3>
                <p>本博客是一套系统，博客主页+CMS配置系统，使用技术栈相同，使用vue + express + mongose搭建，主要是记录和分享自己的学习过程，和广大技术爱好者们相互学习，共同进步!</p>
            </div>
            <div class="call">
                <h3>其他社区</h3>
                <p>github: &nbsp&nbsp<a href="https://github.com/sunzhaoye">https://github.com/sunzhaoye</a></p>
                <p>segmentfault: &nbsp&nbsp<a href="https://segmentfault.com/u/linghuxunhuan">https://segmentfault.com/u/linghuxunhuan</a></p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.about {
    height: 100%;
    overflow-y: auto;
    .about-content {
        h3 {
            display: inline;
            padding-bottom: 10px;
            border-bottom: 4px solid #50bfff;
        }
        p {
            margin: 0px;
            padding: 20px 0 0 10px;
            line-height: 30px;
        }
        a {
            color: #50bfff;
        }
        .about-blog, .call{
            margin-top: 30px;
        }
    }
}
</style>
