<template>
    <div class="one-img-item">
        <div class="txt-info">
            <h2 class="title">{{info.title}}</h2>
            <div class="info">
                <img class="author-icon" :src="info.healthimage" alt="">
                <span class="author">{{info.healthName}}</span>
                <b class="watchers-num">{{info.pv}}次浏览</b>
            </div>
        </div>
        <div class="one-pic" :style="{backgroundImage:'url('+info.cover[0]+')'}"></div>
    </div>
</template>
<script>
export default {
    props: ['info'],
}
</script>


<style lang="stylus" scoped>
    .one-img-item
        background-color #fff
        border 2px solid #f5f5f5
        padding 3.8% 5.5%
        display flex
        .txt-info
            flex 1
            .title
                font-size 16px
                color #222
             .info
                padding-top  .11rem
                font-size 12px
                color  #777
                .author-icon
                    width 4.5 vw
                    height 4.5 vw
                    border-radius 50%
                    margin-right .06rem
                .author
                    margin-right .08rem
        .one-pic
            margin-left  1.6 vw
            width 28.53 vw
            height 21.46 vw
            // background-image url('http://img2-cloud.itouchtv.cn/tvtouchtv/image/20181206/1544060657773685.jpg')  
            background-size cover
            background-position center center
            background-repeat no-repeat
</style>
