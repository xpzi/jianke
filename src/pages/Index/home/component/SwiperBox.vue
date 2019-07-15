<template>
    <div class="swiper-box">
        <ad-swiper :adSwiperData="adSwiperData"></ad-swiper>
    </div>
</template>
<script>
import AdSwiper from '../../../../components/AdSwiper'
export default {
    props: ['data'],
    components: {AdSwiper},
    computed: {
        adSwiperData(){
            return this.data;
        }
    }
    
}
</script>