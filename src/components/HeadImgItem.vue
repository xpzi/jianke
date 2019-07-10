<template>
    <div class="head-img-item">
        <img :src="info.cover[0]" alt="">
        <h2 class="title">{{info.title}}</h2>
    </div>
</template>


<script>
export default {
    props: ['info']
}
</script>

<style lang="stylus" scoped>
    .head-img-item
        height 2.31rem
        position relative
        overflow hidden
        background-color #fff
        border 2px solid #f5f5f5
        img 
            width 100%
        h2
            position absolute
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            height  .3rem
            border-radius .16rem
            background-color rgba(0, 0, 0, 0.4)
            color #fff
            font-size 14px
            bottom .1rem
            line-height .3rem
            left 0
            right 0
            text-align center
            padding 0 5.5%
            
</style>
