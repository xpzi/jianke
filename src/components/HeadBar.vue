<template>
    <div class="header">
        <i  class="iconfont icon-back" @click='goHome'>&#xe65f;</i> 
        <span>全部分类</span>
        <i class="iconfont icon-more">&#xe65f;</i>
    </div>
</template>

<script>
export default {
    methods:{
        goHome(){
            this.$router.push("/home") 
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
        span 
            color #111
            font-size.17rem
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

