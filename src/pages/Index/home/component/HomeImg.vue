<template>
    <a class="title-box" :href="data[0].action" >
        <img :src="data[0].headImg">
    </a>
</template>
<script>

export default {
    props: ['data'],
    computed: {
        homeNavData(){
            return this.data;
        }
    }

    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.title-box
    img
        width 100%    
</style>
