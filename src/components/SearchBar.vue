<template>
     <div class="search">
         <div class="search-bar">
            <div class="search-content">
                <i class="iconfont icon-magnifier">&#xe65f;</i>
                <input 
                        type="text" 
                        :placeholder="placeholder" 
                         v-model="iptValue"
                        >
                <i class="iconfont icon-close" v-show="showClose" @click="handlerCloseClick">&#xe65f;</i>
            </div>
            <div class="search-btn">搜索</div>
        </div>
        <div class="search-list">
            <div class="search-item" v-for="item in searchList" :key=item.productCode @click="clickResultItem">{{item.productName}}</div>
        </div>
    </div>  
</template>

<script>
import http from '@/utils/http'
import _ from 'lodash'
export default {
    data(){
        return {
            placeholder:'纷乐 满339减20',
            iptValue:'',
            searchList:[],
        }
    },

    created:function(){
        this.debouncedGetSearchRet = _.debounce(this.getSearchRet, 500)
    },

    methods:{
        handlerCloseClick(){
            this.iptValue = ''
            this.searchList = []
        },
        async getSearchRet(){
           if( this.iptValue.trim().length == 0) {
                this.searchList = []
                return
            }
            let data = await http.get({url:"fe-wcgi/v1/searchs",params:{keyword:this.iptValue,pn:1,ps:5}})
            this.searchList = data && data.products && data.products.results || [] 
        },
        clickResultItem(){

        }
    },
    watch:{
        iptValue:function(newKW,oldKW){
            this.iptValue = newKW
            this.debouncedGetSearchRet()
        }
    },
    computed:{
        showClose(){
            return this.iptValue.length > 0
        },
    },
}
</script>


<style lang="stylus">
    .search
        position relative
    .search-bar
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
            padding-left 12.6%
            display  flex
            align-items center
            position relative
            .icon-magnifier
                font-size .14rem
                color #999
            .icon-close
                font-size .14rem
                color #999
                position absolute
                right  .1rem
            input 
                outline none 
                border none
                width 80% 
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
    .search-list
        position absolute
        top 0
        transform translateY(.45rem)
        .search-item
            background-color #fff
            width 100vw
            height 10.67vw
            padding 0 4vw
            font-size  14px
            line-height 10.67vw
            position relative
            &::after
                content ''
                height 1px
                background-color #ddd
                position absolute
                left 4vw
                bottom 0px
                width 100%
                

</style>

