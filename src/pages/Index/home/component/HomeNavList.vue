<template>
    <ul  class="home-nav" >
        <li v-for="item in homeNavData" :key="item.headImg">
            <a :href="item.action">
                <img :src="item.headImg" alt="">
                <span>{{item.roomTitle}}</span>
            </a>
        </li>
    </ul>
</template>
<script>

export default {
    props: ['data'],
    computed: {
        homeNavData(){
            return this.data;
        }
    }
    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.home-nav
    display flex
    flex-wrap wrap
    justify-content center
    align-items center
    background-color #fff
    padding .05rem 0 .1rem 0
    height 1.79rem
    li
        display flex
        align-items center
        justify-content  center
        width 25%
        height .82rem
        padding-top .1rem
        img 
            width .4rem
            height .4rem
            margin .05rem
        span 
            display block
            text-align center
            color #000
            font-size 12px
        
</style>
