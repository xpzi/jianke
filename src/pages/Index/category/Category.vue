<template>
    <div class="category-con">
        <div class="header">
            <i  class="iconfont icon-back" @click='goHome'>&#xe65f;</i> 
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
                     <li v-for="(item,index) in totalCategories" :key = "item.id" :class="index == curIdx?'active':''" @click="chgCurIdx(index)">
                         {{item.categoryName}}
                    </li>
                 </ul>
             </div>
             <div class="right-con">
                 <div class="con-ad">
                     <img :src="curCategory.adImage" alt="">
                 </div>
                 <ul class="item-list">
                     <li v-for="item in curCategory.list" :key = 'item.id'>
                         <img :src="item.categoryImage" alt="">
                         <span>{{item.categoryName}}</span>
                     </li>
                 </ul>
             </div>
        </div>
    </div>
</template>
<script>
import http from '@/utils/http'
import { Indicator } from 'mint-ui'
export default {
    data(){
        return {
            totalCategories:[],
            curCategory:{
                adImage:'',
                list: []
            },
            curIdx:0
        }
    },
    methods:{
        async getCurCategoryInfo(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
            let info = this.totalCategories[this.curIdx]
            let list = await http.get({url:'/wcgi/category/api/fullCategories',params:{pid:info.id,platform:1}})
            Indicator.close()
            this.curCategory.adImage = info.adImage
            this.curCategory.list = list
        },
        chgCurIdx(index){
            this.curIdx = index
            this.getCurCategoryInfo()
        },
        goHome(){
            this.$router.push("/home") 
        }

    },
    async mounted(){
        // 请求分类数据
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        let result = await http.get({url:'/wcgi/category/api/fullCategories',params:{platform:1}})
        Indicator.close()
        this.totalCategories = result

        // 请求第一个分类数据
        this.getCurCategoryInfo()
        /*
            let list = await http.get({url:'/wcgi/category/api/fullCategories',params:{pid:result[0].id,platform:1}})
            this.curCategory.adImage = result[0].adImage//this.$set( this.curCategory, 'list', list)
            this.curCategory.list = list
        */
    },    
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
