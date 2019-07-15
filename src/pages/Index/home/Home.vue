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
            <div class="search-box">
                <i class="minor-icon iconfont">&#xe660;</i>
                
                <input type="text" placeholder="纷乐 满399减20">
            </div>
            <span class="login-btn">登录</span>
        </div>
        <!-- 搜索框 end -->

        <template v-for="(floor, index) in floorData">
            <component v-if="component[floor.floorTemplateName]" v-bind:is="component[floor.floorTemplateName]" :key="index" :data="floor.rooms"></component>
        </template>

        <!-- 首页导航 start -->
        <!-- <ul  class="home-nav" >
            <li v-for="item in homeNavData" :key="item.headImg">
                <a :href="item.action">
                    <img :src="item.headImg" alt="">
                    <span>{{item.roomTitle}}</span>
                </a>
            </li>
        </ul> -->
        <!-- 首页导航 end -->

        <!-- 头条轮播 start -->
        <div class="newsSwiper">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAABxVBMVEUAAABERERERERERERERERCQkJBQUFBQUFERERCQkJERERERERDQ0NERERERERBQUFBQUE8PDxERERERERERERERERERERERERERERERERERERERERERERERERERERDQ0NERERERERDQ0NBQUFBQUFAQEAzMzMnzo5EREQs25tEREREREREREREREQ6Ojot3JxEREQ8PDw0NDRERERBQUFERERERERCQkIs2pojyIdEREQlyokt3JxAQEA1NTUjxYQp1JREREQzMzMt3Jw1NTVEREREREQr15cxMTFBQUElzIs0NDQs2pogwX8t3Jw/Pz80NDQr2JgkyYgkx4c3Nzcp05MiwYE0NDQ0NDQt3Jw3Nzct3JwiwoEhwYE6Ojot3JwwMDA9PT0rKysgv34wMDAgvn06Ojot3JwwMDA9PT0t3JwoKCg7Ozso0pMt3JwhwoEmzItBQUEr1ZYwMDAt3Jwt3JwiIiIt25tEREQ3NzczMzMt3Jw8PDw5OTkwMDA2NjYiIiJAQEBBQUEsLCwoKCgbGxss25sr2Zkn0I8q15cp1pUp1JMo0pImzIsjx4Y4ODgtLS0lJSUrKyseHh4xMTESEhIRERGS+MmmAAAAeHRSTlMA9/O3FiQHA/kt7+rQvo8/FAv+7NzJr6qAeRuZlIhrX09LPDAoHw749ezm4cbBv6miloBvZVdENiATE/j06+ja2dXQwL2xp56QdHFrUTQZ9/Hv7+7u7ePi4N/QzMW5tbOwq6ikn5GOiYeGenFpZmRiW1RMSzw2MCpVM/xQAAAEBklEQVRYw82XZ2PTMBCGL2SHtKQrDV20hRY6aAttKWXvvffee28cZS+6oBP4vegUK7KNrLTkC+8HSec7P5FOJzsGiTQUN1R+Yfet9WLHBJpJdaMsxlarnG7d3SpFoFarEKj9ujsgR6C8CgRfEcnnSZb269O/03NBoIqijGvWfi79WgIu7hfKzc/n5mh/LJ1OJ4eliNRSoVBQIFJUCQDvHuxdIuMGRDK/sJAGsF1InCoD0I5mGEC61p/J+XkFQu/D2LXLEfFEIpoqiwj5cAc9coSWzWTiklwQVAkxjG01gHxHUGURQWzXqxGaXNzPzdIdFSCMzsoRK8wFuHKFQm53RYg1aapD0gJWL0T4TyapjlWE2BKnGvk7bAWIKuzGVAiUcparsaupBBHCtg+WkQuLKfxrsHVWhGhjx0ySseUjWrAdUSOgO58nu0vmWVqMNSD8bEM65QgP9g46+EhLZwBNdn0PrcUvAlHckJA8F03o66WDAVo6z9FkiAMU+EggGLnWK0dsQ2cVNLUWnyltxmK87wfTSX3ZDTJF0Le2GHJYv2EVQKelOldhm88nU/HsX7kIYr+BBdaH9BsaAaDajDiCLZEiWMlsZoFOl35DEAfQ4XQYEDsa6TyyKZLImAn89KyBksKN1e1e+P+F/zu6VvTPRxrslFyVqrcThMYHd938xIMdEoRc+0HoYCwW2/WVBy8LYYn8HKP6dtQW0ZAli8lXYNSzRZLVqoR9CgkT+2wRHWQhRxLrQGgLyS0Qh19c2I6Eqcv2uX9ACZnatdz0DGUSJLdIbaHBbxPTMxvtEd0HWOE63cxyN2gaZdzj3jd3Dz49c+b89MykAgGuIPP4mtdDU4SdysydGt33AjPZc+rD98kfFxQIqGmmjng0yo9RbauXu65jJqemX5/4MbtXXYedAxTAT3LVmHD0YCanv0++OzF7S47QJKLTmcvw2MHYxNQMXcXO028fLgsh1sNjt/cwwuzslfHxcoi64JFht//JjUu4Ho5AxtF9G3de3Hv78WkQiAokR6j92/p9ik8WVn7r6uwjHBEAhZsf+9VlIjS1EFEuonKERe4oUzfYivnBXp5DRcTJf0Z4GjWm7Dm/bC8dpk3dxL/+jGrq14pKkWtdlmPKvzgFoh4HLjBpNKDPIUoIuWqeB3uxNpgQm3HQAQZtcOqPgeNbCVUiIF6j/C0+ZEI046BFhHQ1+/R6HAWgjDlN840Y+Owx1cZWxBFtLD1uYHK1h3mR17P5b00ww9mxQz8Efcym4d5ICbGheMOYpXAO6/e08gt8O3gqakXZYzJQJkRAvCciEsT70qi+WIZ1VoSvJQRC6zZZEWEBqwYmf68RsanhuGWLu4YCRkSgxVNC9PPfcmEp/gEhDEYIZUGHjQAAAABJRU5ErkJggg==" alt="">
            <div class="news-list-wrap">
                <ul class="news-list">
                    <li v-for="item in newsSwiperData" :key="item.articleId">
                    <span>文章</span> {{item.roomTitle}}
                    </li>
                </ul>
            </div> 
        </div>
        <!-- 头条轮播 end -->

        <!-- 药精选 start -->
        <div class="choosen-floor">
            <div class="title-box" >
                <img v-for="item in choosenDataPart1" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <section class="ads-1-2-box">
                <article class="ads-left"> 
                    <img :src="choosenDataPart2Left.headImg" alt="">
                </article>
                <article class="ads-right">
                    <img v-for="item in chooseDataPart2Right" :key="item.headImg" :src="item.headImg" alt="">
                </article>
            </section>
            <div class="ads-4-box" >
                <img v-for="item in choosenDataPart3" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <div class="ads-1-box">
                <img v-for="item in choosenDataPart4" :key="item.headImg" :src="item.headImg" alt="">
            </div>
        </div>
        <!-- 药精选 end -->

        <!-- 频道分类 start -->
        <div class="sorts-floor">
            <div class="title-box">
                 <img v-for="item in sortsDataPart1" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <ul class="sorts-4-box">
                <li v-for="item in sortsDataPart2" :key="item.headImg">
                    <a href="">
                        <img :src="item.headImg" alt="">
                    </a>
                </li>
            </ul>
            <ul class="sorts-12-box">
                <li v-for="item in sortsDataPart3" :key="item.headImg">
                    <a href="">
                        <img :src="item.headImg" alt="">
                    </a>
                </li>
            </ul>

        </div>
        <!-- 频道分类 end -->

        <!-- 健康服务 start -->
        <div class="helth-floor">
            <div class="title-box">
                <img v-for="item in helthDataPart1" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <div class="helth-2-box">
                <img v-for="item in helthDataPart2" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <div class="helth-4-box">
                <img v-for="item in helthDataPart3" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <div class="helth-ad">
                <img v-for="item in helthDataPart4" :key="item.headImg" :src="item.headImg" alt="">
            </div>
        </div>
        <!-- 健康服务 end -->
        
        <!-- 好药推荐 start -->
        <div class="medicine-floor">
            <div class="title-box">
                <img  v-for="item in medicineDataPrat1" :key="item.headImg" :src="item.headImg" alt="">
            </div>
            <ul class="medicine-list">
                <li class="medicine-item" v-for="item in medicineDataPrat2" :key="item.productImageUrl">
                    <img :src="item.productImageUrl" alt="">
                    <p class="title">{{item.productName}}</p>
                    <p class="desc">{{item.info}}</p>
                    <p class="price">{{"￥"+(item.ourPrice/100).toFixed(2)}}</p>
                </li>
            </ul>
        </div>
        <!-- 好药推荐 end -->
        <!-- 许可证 start -->
        <div class="license-box">
            <img v-for="item in licenseDataPart" :key=item.headImg :src="item.headImg" alt="">
        </div>
        <!-- 许可证 end -->
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
        // 设置 news-list 滚动
        let newsListEl = document.querySelector(".news-list")
        let times = 0 
        setInterval(function(){
            times = times >=3?0:++times
            newsListEl.style.transition = times == 0?"":"all .5s"
            newsListEl.style.transform = `translate3d(0,-${times*36}px,0)`
        },1000)

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
           } 
    },
    computed:{
        adSwiperData(){
            return this.floorData[0] && this.floorData[0].rooms||{}
        },
        homeNavData(){
            return this.floorData[1] && this.floorData[1].rooms||{}
        },
        newsSwiperData(){
            return this.floorData[2] && this.floorData[2].rooms||{}
        },
        choosenDataPart1(){
            return this.floorData[3] && this.floorData[3].rooms||{}
        },
        choosenDataPart2Left(){
            if(this.floorData[4] && this.floorData[4].rooms){
                return this.floorData[4].rooms[0]
            }else{
                return {}
            }
        },
        chooseDataPart2Right(){
            if(this.floorData[4] && this.floorData[4].rooms){
                return this.floorData[4].rooms.slice(1,2)
            }else{
                return []
            }
        },
        choosenDataPart3(){
            return this.floorData[5] && this.floorData[5].rooms||{}
        },
        choosenDataPart4(){
            return this.floorData[6] && this.floorData[6].rooms||{}
        },
        sortsDataPart1(){
            return this.floorData[7] && this.floorData[7].rooms||{}
        },
        sortsDataPart2(){
            if(!this.floorData[8]|| !this.floorData[9]){
                return []
            }
            return [...this.floorData[8].rooms,...this.floorData[9].rooms]
            
        },
        sortsDataPart3(){
            if (!this.floorData[10]||!this.floorData[11]||!this.floorData[12]){
                return []
            }
            return [...this.floorData[10].rooms,...this.floorData[11].rooms,...this.floorData[12].rooms]
        },
        helthDataPart1(){
            return this.floorData[13] && this.floorData[13].rooms||{}
        },
        helthDataPart2(){
            return this.floorData[14] && this.floorData[14].rooms||{}
        },
        helthDataPart3(){
            return this.floorData[15] && this.floorData[15].rooms||{}
        },
        helthDataPart4(){
            return this.floorData[1] && this.floorData[16].rooms||{}
        },
        medicineDataPrat1(){
             return this.floorData[17] && this.floorData[17].rooms||{}
        },
        medicineDataPrat2(){
             return this.floorData[18] && this.floorData[18].rooms||{}
        },
        licenseDataPart(){
            return this.floorData[19] && this.floorData[19].rooms||{}
        }            
    },
    components:{
        AdSwiper,
        // SwiperBox
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
        .newsSwiper
            display flex
            padding .05rem .15rem
            height .46rem
            overflow hidden
            background-color #fff
            img 
                width .3rem
                height .3rem
            .news-list-wrap
                overflow hidden
                height .36rem
                hidden
                .news-list
                    padding 0 .04rem
                    height .36rem
                    li
                        flex 1
                        ellipsis(100%)
                        height .22rem
                        span 
                            height .17rem
                            line-height .17rem
                            width .3rem
                            padding .01rem .02rem
                            display inline-block
                            font-size .016rem
                            border 1px solid #f34242
                            color #f34242
                            border-radius 2px
        .choosen-floor
            .title-box
                img
                    width 100%
            .ads-1-2-box
                display flex
                .ads-left
                    width 50%
                    img 
                        width 100%
                .ads-right
                    width 50%
                    img 
                        width 100%
            .ads-4-box
                display flex
                margin-bottom .1rem
                img
                    width 25%
            .ads-1-box
                img 
                    width 100%       
        .sorts-floor
            .title-box
                img 
                    width 100%
            .sorts-4-box
                flex-wrap wrap
                display flex
                li
                    width 50%
                    img 
                        width 100%
            .sorts-12-box
                flex-wrap wrap
                display flex
                li
                    width 25%
                    img
                        width 100%
        .helth-floor
            .title-box
                img
                    width 100%
            .helth-2-box
                display flex
                width 50%
                img
                    width 100%
            .helth-4-box
                display flex
                width 25%
                img
                    width 100%
            .helth-ad
                img
                    width 100%
        .medicine-floor
            .title-box
                img
                    width 100%
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
        .license-box
            img
                width 100%
            



</style>
