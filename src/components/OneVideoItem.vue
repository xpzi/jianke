<template>
    <div class="one-video-item">
        <h2 class="title">{{info.title}}</h2>
        <div class="pic" :style="{backgroundImage:'url('+info.cover[0]+')'}">
            <b class="play-btn">
                <i class="iconfont icon-play">&#xe660;</i>
            </b>
        </div>
        <div class="info">
                <img class="author-icon" :src="info.healthimage" alt="">
                <span class="author">{{info.healthName}}</span>
                <b class="watchers-num">{{info.pv}}</b>
            </div>
    </div>
</template>
<script>
export default {
    props: ['info'],
}
</script>

<style lang="stylus" scoped>
    .one-video-item
        background-color #fff
        border 2px solid #f5f5f5
        padding 3.8% 5.5%
        .title
            font-size 16px
            color #222
            margin-bottom .165rem
        .pic  
            width 100%
            height 46.45 vw
            // background-image url('https://img5.jianke.com/mall/jktt/201905/5dffb7694dd048a4af3ef012b1ac4638.jpg')  
            background-size cover
            background-position center center
            background-repeat no-repeat
            position relative
            .play-btn
                position absolute
                width 16.16 vw
                height 16.16 vw
                border-radius 50%
                border 2px solid #fff
                background-color rgba(0,0,0,.5)
                left 50%
                top 50%
                transform translate(-50%,-50%)  
            .icon-play
                position absolute
                left  50%
                top 50%
                transform translate(-50%,-50%)
                color #fff

           
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
</style>
