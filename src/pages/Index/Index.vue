<template>
  <div class="index-con">
    <main>
      <router-view></router-view>
    </main>
    <nav>
        <ul>
            <router-link v-for="item in navitems" :key="item.id" tag ="li" :to ="item['to']" active-class='active' >
                <i class="iconfont" v-html="item.icon">{{item.icon}}</i>
                {{item.name}}
                </router-link>
        </ul>
    </nav>
  </div>
</template>

<script>

export default {
    data(){
        return {
            navitems:[
                {id:"1",to:"/home",name:"首页",icon:'&#xe661;'},
                {id:"2",to:"/category",name:"分类",icon:'&#xe660;'},
                {id:"3",to:"/headline",name:"头条",icon:'&#xe65f;'},
                {id:"4",to:"/carts",name:"购物车",icon:'&#xe65b;'},
                {id:"5",to:"/aboutme",name:"我",icon:'&#xe65c;'},
                ],
        }
    }
}
</script>




<style lang="stylus" scoped>
.index-con 
    display: flex;
    height: 100%;
    flex-direction: column;
    main
        flex: 1;
        overflow hidden;
        overflow-y auto;
        height 0.001rem;
    nav 
        background-color: #fff;
        height: 0.5rem;
        ul
            display flex
            height 100%
            li
                flex 1
                display flex
                flex-direction column
                justify-content center
                align-items center
                color #333
                i 
                    display block
                    font-size 18px
                    font-weight bold
                &.active
                    color #28b2f9
</style>

