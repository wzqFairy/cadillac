<template>
    <div class="smart-content">
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
            ]
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
}
</script>

<style>

</style>
