<template>
    <div class="header">
        <div class="header-logo">
            <img src="../../public/img/new/logo.png" alt="">
        </div>
        <div class="banner-wrap">
            <ul class="banner" >
                <li v-for="(list,index) in bannerList" :key="index" v-show="index === currentIndex">
                    <img :src="list.image" alt="">
                </li>
            </ul>
            <ul class="dot">
                <li v-for="(item,index) in bannerList" :key="index" :class="{'dot-color2':index===currentIndex}"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bannerList:[
                {
                    'image':require('../../public/img/new/banner.png'),
                },
                {
                    'image':require('../../public/img/new/banner.png'),                    
                },
                {
                    'image':require('../../public/img/new/banner.png'),
                }
            ],
            currentIndex:0,
            timmer:''
        }
    },
    methods:{
        bannerAuto(){
            this.currentIndex++;
            if(this.currentIndex == 3){
                this.currentIndex = 0;
            }
        }
    },
    
    created(){
        this.$nextTick(() => {
            this.timmer = setInterval(() => {
                this.bannerAuto();
                // console.log(this.currentIndex)
            }, 2000);
        })
        
    }
}
</script>

<style scoped>
.header{
    background: white;
}
.header-logo{
    border-bottom: 4px solid #e3e3e3;
    padding: 40px;
}
.banner-wrap{
    position: relative;
    background: white;
}
.dot{
    position: absolute;
    bottom: 30px;
    left: 490px;
}
.dot li{
    width: 10px;
    height: 10px;
    float: left;
    margin-left: 40px;
    background:#e0e0e0; 
}
.dot .dot-color2{
    background:#787878;
}
</style>
