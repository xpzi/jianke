<template>
    <ul class="sorts-4-box">
        <li v-for="item in sortsDataPart2" :key="item.headImg">
            <a href="">
                <img :src="item.headImg" alt="">
            </a>
        </li>
    </ul>
</template>
<script>

export default {
    props: ['data'],
    computed: {
        sortsDataPart2(){
            return this.data;
        },
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.sorts-4-box
    flex-wrap wrap
    display flex
    li
        width 50%
        img 
            width 100%  
</style>
