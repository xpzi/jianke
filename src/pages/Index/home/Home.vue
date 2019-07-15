<template>
    <div class="home-con">
        <!-- 头部广告 start -->
        <header class="headAd" v-if="isShowAd">
            <div class="btn-close" @click="closeAd"></div>
        </header>
        <!-- 头部广告 end -->

        <!-- 搜索框 start -->
        <div class="search-bar">
            <div class="logo-wrap">
                <i class="logo-icon iconfont" >&#xe65f;&#xe65f;</i>
            </div>
            <div class="search-box" @click="jumpSearch">
                <i class="minor-icon iconfont">&#xe660;</i>
                
                <input type="text" placeholder="纷乐 满399减20">
            </div>
            <span class="login-btn">登录</span>
        </div>
        <!-- 搜索框 end -->

        <!-- 首页内容 start -->
        <template v-for="(floor, index) in floorData">
            <component v-if="component[floor.floorTemplateName]" v-bind:is="component[floor.floorTemplateName]" :key="index" :data="floor.rooms"></component>
        </template>
        <!-- 首页内容 end -->

    </div>
</template>

<script>
import AdSwiper from '../../../components/AdSwiper'
import http from '../../../utils/http'
import {Indicator} from 'mint-ui'
import SwiperBox from './component/SwiperBox'
import * as component from './component/index.js'
export default {
    data(){
        return {
            component,
            isShowAd:true,
            floorData:[],
        }
    },
    async created(){
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
        let ret = await http.get({
            url:"/fe-wcgi/v1/homepage",
            params:{type:"home",platform:"mobile"}
            })
        Indicator.close()
        this.floorData = ret
    },
    mounted(){
        // 设置search-bar监听
        let mainConEl = document.querySelector("main")
        let searchBarEl = document.querySelector(".search-bar")

        mainConEl.addEventListener("scroll",function(){
            searchBarEl.className = mainConEl.scrollTop == 0 ?"search-bar":"search-bar active"
        })
    },
    methods:{
           closeAd(){
              this.isShowAd = false 
           },
           jumpSearch(){
               this.$router.push({ name: 'search', params: { keywords: '纷乐' }})
           }

    },
    computed:{

    },
    components:{
        AdSwiper
    },
}
</script>



<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
    .home-con
        overflow-y auto 
        header
            height .5rem
            background url('https://img5.jianke.com/mall/common/201906/fec1c3ec8b5c4a5d8c124783e4417447.png') center center
            background-size 100% 100%
            position relative
            .btn-close
                width .15rem
                height .15rem
                position absolute
                right 0
                top 0
        .search-bar
            height .43rem
            width 100%
            background-color rgba(255,255,255,0)
            position  absolute
            top .5rem
            z-index 10
            display flex
            justify-content center
            align-items center
            &.active
                background-color rgba(0, 130, 240,0.75);
                position fixed 
                top 0
            .logo-wrap
                width .55rem
                height .23rem
                padding-left .05rem
                .logo-icon
                    font-size 20px
                    color #fff
                    line-height 23px
                    text-size-adjust 100%
            .search-box
                width 2.31rem
                height .28rem
                padding 0 .12rem
                border 1px solid #fff
                border-radius .16rem
                display flex
                overflow hidden
                background-color #fff
                padding 0 .12rem
                input 
                    flex 1
                    outline none
                    border none
                    padding-left .05rem
            .login-btn
                font-size 13px
                color #fff 
                display inline
                width .35rem
                height .14rem
                text-align center
</style>
