<template>
    <div class="category-con">
        <div class="header">
            <i  class="iconfont icon-back">&#xe65f;</i> 
            <span>全部分类</span>
            <i class="iconfont icon-more">&#xe65f;</i>
        </div>
        <div class="search">
            <div class="search-content">
                <i class="iconfont icon-magnifier">&#xe65f;</i>
                <input type="text" placeholder="纷乐 满339减20">
            </div>
            <div class="search-btn">搜索</div>
        </div>  
        <div class="content">
             <div class="left-nav">
                 <ul>
                     <li class="active">男科用药</li>
                 </ul>
             </div>
             <div class="right-con">
                 <div class="con-ad">
                     <img src="https://img.jianke.com/mall/common/201811/4276f3cf28294e77bdf240e0c7edd023.jpg" alt="">
                 </div>
                 <ul class="item-list">
                     <li>
                         <img src="https://img.jianke.com/mall/common/201805/9ecfd485765a4f37a9dde994d45e1d2a.jpg" alt="">
                         <span>高血压</span>
                     </li>
                 </ul>
             </div>
        </div>
    </div>
</template>
<script>
import http from '@/utils/http'
export default {
    data(){
        return {
            totalCategories:[],
            curIdx:0
        }
    },
    async mounted(){
        // 请求分类数据
        console.log("http>>",http)
       let result = await http.get({url:'/jianke/category/api/fullCategories',params:{platform:1}})
       console.log("result>>",result)
    }
    
}
</script>


<style lang="stylus" scoped>
    .category-con
        display flex
        flex-direction column
        height 100%
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
        .search
            height .45rem
            background-color #f0f0f0
            display flex
            align-items center
            justify-content center
            .search-content
                width 77.6%
                height 66.6%
                background-color #fff
                margin-right .1rem
                border-radius (1.5*.45*0.666)rem
                padding-left 18.6%
                display  flex
                align-items center
                .icon-magnifier
                    font-size .14rem
                    color #999
                input 
                    outline none 
                    border none 
                    padding 0 .05rem
                    font-size .14rem
            .search-btn
                width 13.33%
                height 66.6%
                background  #28b2f9
                color #fff
                font-size .14rem
                border-radius 5px
                text-align center
                line-height (0.666*0.45)rem

                    
            

        .content
            flex 1
            display flex
            background-color orange
            overflow hidden
            .left-nav
                overflow-y auto 
                width 21.33%
                background-color rgb(240, 240, 240)
                li
                    color #000
                    border-bottom  1px solid rgb(230, 230, 230)
                    height (0.13*100)vw
                    line-height (0.13*100)vw
                    text-align center
                    &.active
                        color #1b8ffa
                        background-color #fff                    
            .right-con
                overflow-y auto 
                flex 1
                background-color #fff
                padding 5% 2% 0 2%
                .con-ad
                    img 
                        width 100%
                .item-list
                    // overflow-y auto 
                    display flex
                    flex-wrap wrap
                    li
                        width 31.33%
                        margin 1%
                        text-align center
                        img 
                            width 100%
                        span 
                            color #666
                            font-size .13rem



                
                 
</style>
