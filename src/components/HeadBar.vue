<template>
    <div class="header">
        <i v-if="back" class="iconfont icon-back" @click='goHome'>&#xe65f;</i> 
        <span>{{title}}</span>
        <i class="iconfont icon-more" v-html="more"></i>
    </div>
</template>

<script>
export default {
    props: {
        back: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: '全部分类'
        },
        more: {
            type: String,
            default: '&#xe65f;'
        }
    },
    methods:{
        goHome(){
            this.$router.back();
            // this.$router.push("/home") 
        }
    }
}
</script>


<style lang="stylus" scoped>
     .header 
        display flex
        align-items center
        justify-content center
        position relative
        height .45rem
        background-color #fff
        border-bottom .01rem solid #eee
        
        span 
            color #111
            font-size .17rem
        .icon-back
            position absolute 
            color #000
            font-size 16px
            left .1rem
        .icon-more
            position absolute
            right .1rem
            color #000
            font-size 16px
</style>

