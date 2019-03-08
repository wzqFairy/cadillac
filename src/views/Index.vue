<template>
    <div>
        <head-top></head-top>
        <ul class="nav">
            <li class="nav-title">
                <router-link to="smart">智能推荐</router-link>
            </li>
            <li class="nav-title">
                <router-link to="hot">热门精品</router-link>
            </li>
            <li class="nav-title">
                <router-link to="news">全新精品</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import HeadTop from '../components/HeadTop'
export default {
    components:{
        HeadTop
    }
}
</script>

<style scoped>
.nav{
    height: 128px;
    background: #ffffff;
    border-bottom: 3px solid #831932;
    border-top: 2px solid #831932;
    display: flex;
    justify-content: space-around;
}
.nav li {
    font-size: 36px;
    line-height: 128px;
}
.nav li a{
    padding: 5px 0;
    /* color: #831932; */
    color: rgb(128,19,44);
}
.router-link-active{
    border-bottom: 4px solid rgb(128,19,44);    
}
</style>
