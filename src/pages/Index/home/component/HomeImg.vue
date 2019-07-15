<template>
    <a href="data[0].action" class="home-img" >
        <img src="data[0].headImg">
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
.home-img
    height 44px

    img
        height 44px
        
</style>
