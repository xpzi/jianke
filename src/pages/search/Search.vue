<template>
    <div class="search-con">
        <head-bar> </head-bar>
        <search-bar> </search-bar>
        <div class="history-keyword" v-if="isShowHistory">
            <div class="top">
                <span>历史搜索</span>
                <span>清空</span>
            </div>
            <div class="con">
                <span class="kw-item" v-for="item in historyKeyWord" :key=item>{{item}}</span>
            </div>
        </div>
        <div class="hot-keyword">
            <div class="top">
                <span>热门搜索</span>
            </div>
            <div class="con">
                <span class="kw-item" v-for="item in hotKeyWord" :key="item.word+item.wordsGroup">{{item.word}}</span>
            </div>
        </div>
    </div>
</template>


<script>
import http from '@/utils/http'
import SearchBar from '@/components/SearchBar'
import HeadBar from '@/components/HeadBar'
export default {
    data(){
        return {
            historyKeyWord:[],
            hotKeyWord:[],
        }
    },
    created(){
        this.historyKeyWord = JSON.parse(localStorage.getItem('localHistorySearchs')) || []
    },
    methods:{
        async reqKeyWords(){
            let res = await http.get({url:'/mbp/mbm/mall/api/searchword/getWords'})
            this.hotKeyWord = res.data || []
        }
    },
    components:{
        SearchBar,
        HeadBar,
    },
    mounted(){
        this.reqKeyWords()
    }, 
    computed:{
        isShowHistory(){
            return this.historyKeyWord.length > 0 
        }
    }
    

}
</script>

<style lang="stylus" scoped>
    .kw-item
        padding 1.33vw 2.67vw 
        display inline-block
        border-radius .04rem
        border 1px solid rgb(221, 221, 221)
        white-space nowrap
        max-width 33.33vw
        text-overflow ellipsis
        overflow hidden
        color #333
        margin-top 2.67vw
        margin-left 1.83vw

    .history-keyword
        padding 4.27 vw
        font-size 14px
        background-color #fff
        .top
            display flex
            justify-content space-between
            color #999
    .hot-keyword
        margin-top 2.67vw 
        padding 4.27vw
        background-color #fff
        .top
            color #999
       

</style>
