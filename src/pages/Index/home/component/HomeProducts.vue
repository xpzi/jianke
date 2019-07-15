<template>
    <ul class="medicine-list">
        <li class="medicine-item" v-for="item in medicineDataPrat2" :key="item.productImageUrl">
            <img :src="item.productImageUrl" alt="">
            <p class="title">{{item.productName}}</p>
            <p class="desc">{{item.info}}</p>
            <p class="price">{{"￥"+(item.ourPrice/100).toFixed(2)}}</p>
        </li>
    </ul>
</template>
<script>

export default {
    props: ['data'],
    computed: {
        medicineDataPrat2(){
            return this.data;
        },
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.medicine-list
    display flex
    flex-wrap wrap
    padding 0 .1rem
    .medicine-item
        background-color #fff
        overflow hidden
        border-radius .05rem
        margin-top .05rem
        width 49.4%
        &:nth-child(2n+1)
            margin-right .6%
        &:nth-child(2n)
            margin-left .6%
        img 
            width 100%
        p
            padding 0 .1rem
            ellipsis(100%)
            &.title
                font-size .14rem
                height .21rem
            &.desc
                font-size .12rem
                color #999
                height .18rem
            &.price
                font-size .14rem
                color #ff5f57
                height .23rem
        
</style>
