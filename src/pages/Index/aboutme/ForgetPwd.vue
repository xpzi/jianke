<template>
    <div class="forget-con">
        <div class="header">
            <i class="iconfont icon-back" @click="clickGoBack">&#xe661;</i>
            <span class="title">忘记密码</span>
            <i class="iconfont icon-more">&#xe661;</i>
        </div>
        <div class="forget-pwd-wrap">
            <div class="login-box">
                <div class="tel-item ipt-wrap">
                    <input type="text" placeholder="请输入您的手机号">   
                </div>
                <div class="code-item ipt-wrap">
                    <input type="text" placeholder="验证码">
                    <div class="code-btn">获取验证码</div>
                    <!-- <div class="code-btn computing">重新发送(0秒)</div> -->
                </div>
                <div class="next-bar">下一步</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {  
    methods:{
        clickGoBack(){
            this.$router.back()
        }
    },      
}
</script>


<style lang="stylus" scoped>
    .forget-con
        height 100% 
        background-color #fff !important 
    .header
        height .47rem
        display flex
        padding 0 .1rem
        border-bottom 1px solid #e5e5e5;
        align-items center
        .icon-back
            font-size 16px
        span 
            color #111
            font-size 17px
            flex 1
            text-align center
        .icon-more
            font-size 16px
    .forget-pwd-wrap
        padding 0 5.5%
        .ipt-wrap
                border-bottom 1px solid #efefef
                &.code-item
                        position  relative
                        display flex
                        align-items center
                        .code-btn
                            display inline-block
                            position absolute
                            right 5.73%
                            border 1px solid #2ca3ff
                            color #2ca3ff
                            text-align center
                            height .26rem
                            min-width .82rem
                            line-height .26rem
                &.pwd-item
                    position relative
                    display flex
                    align-items center
                    .eye-switch
                        width 5.73vw
                        height 5.73vw
                        position absolute
                        right 0 
                        img 
                            width 100%
                input 
                    border none 
                    outline  none
                    height .55rem
                    font-size 14px
                    width 100%
            .next-bar
                margin-top .28rem
                height .37rem
                background-color #95d1ff
                color #e3f2ff   
                border-radius 2px
                font-size 14px
                text-align center
                line-height .37rem

</style>

