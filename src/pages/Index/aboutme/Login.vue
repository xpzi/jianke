<template>
    <div class="login-con">
        <div class="header">
            <i class="iconfont icon-back" @click="clickGoBack">&#xe661;</i>
            <span class="title">用户登录</span>
            <i class="iconfont icon-more">&#xe661;</i>
        </div>
        <div class="login-wrap">
            <div class="login-tap">
                <div :class="isTelLogin?'login-tel-btn login-btn active':'login-tel-btn login-btn'" @click="loginSwitch(0)">手机号快捷登录</div>
                <div :class="(!isTelLogin)?'login-account-btn login-btn active':'login-account-btn login-btn'" @click="loginSwitch(1)">账号密码登录</div>
            </div>
            <div class="login-box">
                <div class="mobile-login-box" v-if="isTelLogin">
                    <div class="tel-item ipt-wrap">
                        <input type="text" placeholder="请输入您的手机号">   
                    </div>
                    <div class="code-item ipt-wrap">
                        <input type="text" placeholder="验证码">
                        <div class="code-btn">获取验证码</div>
                        <!-- <div class="code-btn computing">重新发送(0秒)</div> -->
                    </div>
                </div>
                <div class="account-login-box" v-else>
                    <div class="account-item ipt-wrap">
                        <input type="text" placeholder="请输入手机号/邮箱">
                    </div>
                    <div class="pwd-item ipt-wrap">
                        <input type="password" placeholder="请输入您的密码">
                        <div class="eye-switch" @click="eyeSwitch">
                            <img :src="eyeImg" alt="">
                        </div>
                    </div>
                </div>
                <div class="login-bar">登录</div>
                <p class="notice">  
                   温馨提示：未注册过健客的手机号，登录时会自动注册健客账号，且代表您已同意《健客服务条款》 
                </p>
                <div class="other-link" v-if="!isTelLogin">
                    <a href="#/aboutme/forgetpwd" class="forget-password">忘记密码</a>
                    <a href="#/aboutme/register" class="register">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    beforeCreate(){
        this.eyesImg = {
            close:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfElEQVRYR+2V0VECQRBEezIwAyECIYQmATEDiEAyECMAIxAz0ARojEDMwAwkg7GGWqgrvIMFqcKPnd+9ne5607NnuHDZhfVRDBQChUAhUAgUAv+PgKQRgBuSw3P/KSWNAbRIDja9fxGQ1HL3pZn1SS7OZUJSB8AHgC7JZaOBOJA0cPepmXVIfv3VhKSraAvgjWRQ2FZjBiTNYhQASHJ1qomK+GcV/V4Cm8Nk4jaZ2GLLNZOwPwOoFY8+e7cgBXKSBAPdUy6NdPcBQOAfk3ysM15rIDmfuHvbzNaJdfexmcVIpgBe6rIRAQYQxEbubunuKuXpGsBwN9hNBtZB2Q2MpD6AMBQiEc5qQEM8NujdzGYkI0PbSkRiBWPND4ewac4pVN8A7gDEam0qVjaS3j5mc45+CYNCjKPX61XF1yYkvQJYkIwxZdUpBgLtsk4k3g8A9yS7WeqHtqCuyXw+XzU9UJXxZI/hFAKjfYgThRhD1gt6tIFctLnfFQMXJ/AD1gGdISqQy3gAAAAASUVORK5CYII=",
            open:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByklEQVRYR+2U4U3DUAyEzxvABjABMAF1FqBMAExAmQA2oEwAI8ACcZkAmAA2ACY4dJGDShqSpn8QUp5UtVL97LvP9jP88bE/ro9RwEhgJPC/CUTEFYA3d7/b9D3pJRAR+wC23H3RLFKW5cLMFu4uIStHd939uUvcOgJmAM7dfXeIgIg4JTkrikIGfj3rCNgB8ArgQG4iYovknpkpscS9AViQFI0Xd/9QtbIsn5OOYjYXkMmUnGoFgE5HAIT8HoDasuvuEtgvIHst1Gd1tNwKfzrV7we51afZ27w/ITk1s0MAInHl7jfL1SOiIuLuc31/tyAiatQX+jMipgBuSZqZKXhe4+2b+MwlAifZouNsn+g9ATirN+fHDORaybFcSoAcn65buClMQkjeJZEZyWPFFEUxqWObAoT5neSnmamwetl60uVR/vnQ1es0dpmx1TCvCMh+B8ltM5t27W9EyEE0lHnbW7E0T9OkoRaoJdW2LM/AnOTEzCZ9yCNCZGr3VQ2Sj8to27BpUHNdNZytQ6jp7FwbJd5UQN7VsH+sEOib7JZVum7cqbZnSJ4fLRh6MSJUTBujc+PunS/eb/l7n+KhwobGjwJGAiOBkcAXNRLhITZr+/wAAAAASUVORK5CYII=",
        }
    },
    
    data(){
        return {
            curType:0, //手机登录（0） 账号密码登录（1）
            isShowPwd:false,//密码是否显示
        }
    },
    methods:{
        loginSwitch(idx){
            this.curType=idx
        },
        eyeSwitch(){
            this.isShowPwd = !this.isShowPwd
        },
        clickGoBack(){
            this.$router.back()
        }
    },
    computed:{
        isTelLogin(){
            return this.curType === 0
        },
        eyeImg(){            
            return this.isShowPwd?this.eyesImg.open:this.eyesImg.close
        }
    }
    
}
</script>


<style lang="stylus" scoped>
    .login-con
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
    .login-wrap
        .login-tap
            height .4rem
            display flex
            padding 0 5.5%
            border-bottom 1px solid #e5e5e5;
            .login-btn
                position relative
                color #666
                font-size 14px
                flex 1
                line-height .4rem
                text-align center
                &.active
                    color #000
                &.active::after
                    content ''
                    display block
                    width 100%
                    height .02rem
                    background-color #2ca3ff
                    bottom -0.01rem
                    position absolute
        .login-box
            padding 0 5.73%
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
            .login-bar
                margin-top .28rem
                height .37rem
                background-color #95d1ff
                color #e3f2ff   
                border-radius 2px
                font-size 14px
                text-align center
                line-height .37rem
            .notice
                margin-top .14rem
                color #999
                font-size .12rem
                line-height .14rem
            .other-link
                display flex
                justify-content space-between
                margin-top .14rem
                a
                    color #2ca3ff
                    font-size 14px
</style>

