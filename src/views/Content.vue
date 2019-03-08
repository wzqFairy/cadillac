<template>
    <div class="content">
        <!-- 智能推荐 -->
        <div class="smart-content" v-if="bool.com === 'smart'">
            <!-- 智能推荐 轮播 -->
            <div class="wrap">
                <swiper :options="swiperOption"  ref="mySwiper">
                    <swiper-slide class="banner-pic" v-for="(list,index) in navBanner" :key="index">
                        <img :src="list.image" alt="">
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-prev swiper-button-black swiper-btn"></div>
                <div class="swiper-button-next swiper-button-black swiper-btn"></div>
            </div>
            <!-- 其他推荐 -->
            <div class="other-footer">
                <div class="other-top">
                    <span>其他推荐</span>
                </div>
                <ul class="other-content">
                    <li v-for="(recommend,index) in recommendList" :key="index">
                        <img :src="recommend.img" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!-- 热门精品 -->
        <div class="hot-content" v-else-if="bool.com === 'hot'">
            <div class="hot-shop" v-for="(hotItem,index) in hotList" :key="index">
                <img :src="hotItem.img" alt="">
                <span class="hot-message">{{hotItem.message}}</span>
                <p class="hot-price"><span>{{hotItem.price}}</span>RMB</p>
            </div>
        </div>
        <!-- 全新精品 -->
        <div class="new-content" v-else>
            <div class="new-top">
                <span>CadillacX</span>
                <span>Cadillac Collection</span>
            </div>
            <div class="new-shop">
                <div class="new-title">
                    <div class="new-title-left">
                        <span></span>
                        <span>ETERNITY系列</span>
                        <span></span>
                    </div>
                    <div class="new-title-right">
                        <span>更多精品</span>
                    </div>
                </div>
                <div class="new-body">
                    <div class="hot-shop" v-for="(newItem,index) in newList" :key="index">
                        <img :src="newItem.img" alt="">
                        <span class="hot-message">{{newItem.message}}</span>
                        <p class="hot-price"><span>{{newItem.price}}</span>RMB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    components:{
        swiper,swiperSlide
    },
    data(){
        return {
            swiperOption:{
                notNextTick: true,
                loop:false,
                slidesPerView: 1,
                initialSlide:0,
                autoplay: 3000,
                direction : 'horizontal',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                onSlideChangeEnd: swiper => {}
            },
            navBanner:[
                {
                    'image':require('../../public/img/smart/smart_big.png'),
                },
                {
                    'image':require('../../public/img/smart/smart_big.png'),                    
                },
                {
                    'image':require('../../public/img/smart/smart_big.png'),
                }
            ],
            recommendList:[
                {
                    'img':require('../../public/img/smart/recommend_1.png')
                },
                {
                    'img':require('../../public/img/smart/recommend_2.png')
                },
                {
                    'img':require('../../public/img/smart/recommend_3.png')
                }
            ],
            hotList:[
                {
                    'img':require('../../public/img/hot/hot_1.jpg'),
                    'message':'【凯迪拉克】ETERNITY 小翅膀连帽卫衣',
                    'price':'1390'
                },
                {
                    'img':require('../../public/img/hot/hot_2.jpg'),
                    'message':'【凯迪拉克】ETERNITY 小翅膀连帽卫衣',
                    'price':'235'
                },
                {
                    'img':require('../../public/img/hot/hot_3.jpg'),
                    'message':'【凯迪拉克】ETERNITY 小翅膀连帽卫衣',
                    'price':'1390'
                },
                {
                    'img':require('../../public/img/hot/hot_4.jpg'),
                    'message':'【凯迪拉克】ETERNITY 小翅膀连帽卫衣',
                    'price':'1390'
                }
            ],
            newList:[
                {
                    'img':require('../../public/img/new/new_body_1.png'),
                    'message':'【凯迪拉克】ETERNITY 小翅膀连帽卫衣',
                    'price':'500'
                },
                {
                    'img':require('../../public/img/new/new_body_2.png'),
                    'message':'【凯迪拉克】ETERNITY 小翅膀连帽卫衣',
                    'price':'3280'
                }
            ],
            bool:{
                com:'smart'
            }
        }
    },
    computed:{
        swiper(){
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted(){
        this.swiper.slideTo(0,1000,false);
    },
    watch:{
        '$route' (to) {
            // console.log(to.params);
            if(to.params.id === 'hot'){
                this.bool.com = 'hot'
            }else if(to.params.id === 'news'){
                this.bool.com = 'new'
            }else{
                this.bool.com = 'smart'
            }
        },
        immediate:true
    }
}
</script>

<style>
/* smart-content */
    .content{
        height: 900px;
        overflow-y: auto;
    }
    .wrap{
        position: relative;
        background: #ffffff;
    }
    .banner-pic{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-btn{
        width: 145px;
        height: 210px;
        outline: none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    .other-footer{
        border-top: 2px solid #e0e0e0;
        background: #ffffff;
    }
    .other-top{
        height: 56px;
        line-height: 56px;
        border-bottom: 2px solid #e0e0e0;
        display: flex;
        justify-content: center;
    }
    .other-top span{
        letter-spacing: 4px;
        font-size: 20px;
    }
    .other-content{
        display: flex;
        justify-content: flex-start;
    }
/* hot-content */
    .hot-content,.new-body{
        display: flex;
        flex-wrap: wrap;
    }
    .hot-shop{
        width: 502px;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }
    .hot-shop:nth-child(2n+1){
        margin-left: 27px;
        margin-right: 18px;
    }
    .hot-shop:nth-child(2n) {
        margin-right: 27px;
    }
    .hot-message{
        font-size: 32px;
        letter-spacing: 3px;
        padding: 10px 20px;
        text-align: left;
        font-weight: 200;
    }
    .hot-price span{
        font-size: 32px;
        color: rgb(128,19,44);
        margin-left: 10px;
        margin-right: 10px;
        font-weight: 200;
    }
/* new-content */
    .new-top{
       height: 130px;
       background: rgb(128,19,44);
       display: flex;
       justify-content: space-around;
       align-items: center;
       font-size: 34px;
       color: #ffffff; 
    }
    .new-title{
        height: 110px;
        line-height: 110px;
        display: flex;
        justify-content: center;
        font-size: 34px;
        color: rgb(70,70,70);
    }
    .new-title-left{
        width: 650px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 80px;
    }
    .new-title-left span:nth-child(2n+1){
        width: 78px;
        height: 5px;
        background: rgb(105,105,105);
    }
    .new-title-right{
        color: #747474;
        margin-left: 50px;
        margin-top: 30px;
    }
</style>
