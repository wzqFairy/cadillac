<template>
    <div class="new-content">
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
</template>

<script>
export default {
    data(){
        return {
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
            ]
        }
    }
}
</script>

<style>

</style>
