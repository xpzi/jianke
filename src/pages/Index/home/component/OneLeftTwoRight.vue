<template>
    <div class="choosen-floor">
        <section class="ads-1-2-box">
            <article class="ads-left"> 
                <img :src="choosenDataPart2Left.headImg" alt="">
            </article>
            <article class="ads-right">
                <img v-for="item in chooseDataPart2Right" :key="item.headImg" :src="item.headImg" alt="">
            </article>
        </section>
        <!-- <div class="ads-4-box" >
            <img v-for="item in choosenDataPart3" :key="item.headImg" :src="item.headImg" alt="">
        </div>
        <div class="ads-1-box">
            <img v-for="item in choosenDataPart4" :key="item.headImg" :src="item.headImg" alt="">
        </div> -->
    </div>
</template>
<script>

export default {
    props: ['data'],
    computed: {
        choosenDataPart2Left(){
            return this.data[0] || {};
        },
        chooseDataPart2Right(){
            return this.data.slice(1,3);
        },
        // choosenDataPart3(){
        //     return this.data;
        // },
        // choosenDataPart4(){
        //     return this.data;
        // },
    }

    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.choosen-floor
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
</style>
