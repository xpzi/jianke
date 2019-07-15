<template>
    <div class="headeline-con">
        <div class="nav-wrap">
            <div class="nav">
                <div class="scoll-wrap">
                    <div class="scoll-item" v-for='(item,index) in programs' :key="item.id" @click="switchItem(index)">
                        <span  :class="curIndex == index?'active':'' ">{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrap">
            <div class="bscroll-wrap">
                 <div class="list-item" v-for="(item,index) in curData" :key = item.articleId>
                    <head-img-item v-if="isShowItem(1,index,item.coverType)" :info = "item"> </head-img-item>
                    <muti-img-item v-if="isShowItem(2,index,item.coverType)" :info = "item"> </muti-img-item>
                    <one-img-item v-if="isShowItem(3,index,item.coverType,item.video) " :info = "item"> </one-img-item>
                    <one-video-item v-if="isShowItem(4,index,item.coverType,item.video) " :info = "item"> </one-video-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '../../../utils/http'
import HeadImgItem from '@/components/HeadImgItem'
import MutiImgItem from '@/components/MutiImgItem'
import OneImgItem from '@/components/OneImgItem'
import OneVideoItem from '@/components/OneVideoItem'
import {Indicator,Toast} from 'mint-ui'
import BScroll from 'better-scroll'

export default {
    components:{
        HeadImgItem,
        MutiImgItem,
        OneImgItem,
        OneVideoItem,
    },
    async created(){
        this.page = 1
        this.maxPage = 5
        Indicator.open()
        let programs = await http.get({url:'/jktt-api/m/programs'})
        this.programs = [...this.programs,...programs.data]
        let res = await http.get(this.getParams(this.curIndex))
        this.curData = res.data && res.data.datalist || {}
        Indicator.close()
    },
    data(){
        return {
            programs : [
                {id:-2,name:'推荐',sort:0},
                {id:-1,name:'关注',sort:1},
            ],
            curIndex:0,
            curData:{},
        }
    },
    methods:{
        getParams(idx){
            let url = ''
            let params = {}
            switch(idx){
                case 0: 
                    url = '/jktt-api/m/recommends/articles'
                    params = {page:this.page,size:10}
                    break
                case 1:
                    url = this.page == 1?'/jktt-api/m/hotarticles':'/jktt-api/m/programs/3/articles'
                    params = this.page == 1?{page:this.page,size:10}:{page:this.page,size:10,id:3}
                    break
                default:
                    url = `/jktt-api/m/programs/${this.programs[idx].id}/articles`
                    params =  {page:this.page,size:10,id:this.programs[idx].id}
                    break
            }
            return {url,params}
        },
        isShowItem(type,index,coverType,video=false){
            // type [1:head-img-item;2:muti-img-item;3:one-img-item;4:one-video-item]
            if(type == 1){
                return (this.curIndex == 0 && index === 0 && coverType == 2)
            }else if(type == 2){
                if(this.curIndex == 0) return (index >0 && coverType == 2)
                return (coverType == 2)
                
            }else if(type == 3){
                if(this.curIndex == 0) return (index >0 && coverType == 1 && (!video))
                return (coverType == 1 && (!video))
            }else if(type == 4){
                if(this.curIndex == 0) return (index >0 && coverType == 1 && video)
                return (coverType == 1 && video)
            }else{
                return false
            }
        },
        async loadData(type){
            // type refresh 刷新;more 更多
            if(this.page >= this.maxPage){
                Toast({
                    message: '已经到最底部',
                    position: 'bottom',
                    duration: 500
                })
                return
            }

            Indicator.open()
            let res = await http.get(this.getParams(this.curIndex))
            let data = res.data && res.data.datalist || {}
            if(type == 'refresh'){
                this.curData = data
                this.maxPage = res.totalpage || 5
            }else if(type == 'more'){
                this.curData = [...this.curData,...data]
            }else{
                this.curData = data
            }
            Indicator.close()

        },

        async switchItem(idx){
            if(this.curIndex == idx) return

            this.page = 1
            this.curIndex = idx
            this.loadData('refresh')
        }
    },
    mounted(){
        let that = this
        console.log("11111")
        let bscroll = new BScroll('.content-wrap',{
            click:true,
            scrollY: true,
            pulldownUI:true,
            pullUpLoad:{
                 threshold: -30, // 当上拉距离超过30px时触发 pullingUp 事件
            },
            pullDownRefresh: {
                threshold: 30, // 下拉距离超过30px触发pullingDown事件
                stop: 40 // 回弹停留在距离顶部20px的位置
             }
        })
         console.log("2222")
        bscroll.on('pullingDown',async function(){
            that.page = 1
            that.loadData('refresh')
            that.$nextTick(()=>{
                this.refresh()
                this.finishPullDown()
            })
        })
        bscroll.on('pullingUp',async function(){
            that.page++
            that.loadData('more')
            that.$nextTick(()=>{
                this.refresh()
                this.finishPullUp()
            })

        })        
    }

    

}
</script>

<style lang="stylus" scoped>
    .headeline-con
        height 100%
        background-color #fff
        display flex
        flex-direction column
        .nav-wrap
            height .45rem
            border-bottom 1px solid #f5f5f5
            .nav
                height .44rem
                margin  0 5.4%
                overflow hidden
                overflow-x auto 
                .scoll-wrap
                    display flex
                    overflow hidden
                    flex-wrap nowrap
                    width max-content
                    .scoll-item
                        height 100%
                        flex-wrap nowrap
                        padding 0 11px
                        span 
                            display inline-block
                            white-space nowrap
                            position relative 
                            line-height .44rem
                            font-size .165rem
                            &.active 
                                font-weight 700
                            &.active::after
                                position absolute
                                content ''
                                display block
                                height .03rem
                                background-color #0bd68c
                                width 100%
                                position absolute 
                                bottom  1px
        .content-wrap
            flex 1
            overflow hidden
            overflow-y auto

</style>



