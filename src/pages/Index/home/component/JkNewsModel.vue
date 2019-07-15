<template>
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
</template>
<script>

export default {
    props: ['data'],
    computed: {
        newsSwiperData(){
            return this.data;
        }
    },
    mounted() {
        // 设置 news-list 滚动
        let newsListEl = document.querySelector(".news-list")
        let times = 0 
        setInterval(function(){
            times = times >=3?0:++times
            newsListEl.style.transition = times == 0?"":"all .5s"
            newsListEl.style.transform = `translate3d(0,-${times*36}px,0)`
        },1000)
    },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
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
          
</style>
