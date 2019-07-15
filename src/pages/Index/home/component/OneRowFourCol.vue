<template>
    <div class="ads-4-box" >
        <div v-for="item in choosenDataPart3" :key="item.headImg">
            <img  :src="item.headImg" alt="">
        </div>
    </div>
</template>
<script>

export default {
    props: ['data'],
    computed: {
        choosenDataPart3(){
            return this.data;
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.ads-4-box
    display flex
    margin-bottom .1rem
    div
        border-radius .1rem        
    img
        width 100%
</style>