<template>
  <div class="swiper-con">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in adSwiperData" :key="item.headImg">
            <a href="#"><img :src="item.headImg" alt=""></a>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"

export default {
    props:["adSwiperData"],
    watch: {
        adSwiperData(val){
            this.$nextTick(() => {
                this.initSwiper();
            })
        }
    },
    mounted() {
    },
    methods:{
        initSwiper(){
            var mySwiper = new Swiper(".swiper-container", {
                loop: true,
                autoplay:{
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    bulletClass : 'ad-bullet',
                    bulletActiveClass : "ad-bullet-active",
                }
            })
        }
    }, 
}
</script>

<style lang="stylus" scoped>
    .swiper-con
        height 0
        margin-bottom (34/75*100)%
    .swiper-con >>> .ad-bullet
        background #e6e6e6
    .swiper-con >>> .ad-bullet-active
        background #999

    .swiper-wrapper
        .swiper-slide 
            img
                width 100%
    .swiper-pagination >>> span 
        display inline-block
        width .06rem
        height .06rem
        border-radius 50%
        margin-left .06rem
</style>
