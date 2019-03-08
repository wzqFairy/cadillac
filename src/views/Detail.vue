<template>
    <div>
        <div class="top-logo">
            <img src="../../public/img/detail/detail_logo.jpg" alt="">
        </div>
        <div class="detail-body">
            <div class="detail-body-left">
                <img src="../../public/img/detail/detail_show.jpg" alt="">
            </div>
            <div class="detail-body-right">
                <p class="detail-title">凯迪拉克</p>
                <div class="detail-message">
                    <p>JICHENG</p>
                    <p>涂鸦汽车儿童短袖TEE</p>
                    <p>白色</p>
                </div>
                <p class="detail-price">
                    <span>599</span>
                    <span>RMB</span>
                </p>
                <div class="function-btn">
                    <button class="btn-back">返回</button>
                    <button class="btn-buy">购买</button>
                </div>
            </div>
        </div>
        <div class="detail-show">
            <img src="../../public/img/detail/detail_body.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-logo{
    background: #ffffff;
    padding: 32px 30px;
    border-bottom: 4px solid #e3e3e3;
}
.detail-body{
    padding: 36px 30px;
    background: #ffffff;
    display: flex;
}
.detail-body-right{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 36px;
    font-size: 36px;
}
.detail-title{
    width: 145px;
    height: 36px;
    line-height: 36px;
    color: rgb(103,103,103);
    margin-bottom: 20px;
}
.detail-message{
    font-weight: 200;
}
.detail-price{
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 70px;
}
.detail-price span:first-child{
    font-size: 80px;
    color: rgb(128,19,44);
    font-weight: 200;
}
.detail-price span:last-child{
    font-size: 30px;
    align-self: center;
    margin-left: -150px;
    margin-top: -20px;
    font-weight: 200;
}
.function-btn .btn-back,.function-btn .btn-buy{
    width: 197px;
    height: 99px;
    font-size: 32px;
    color: rgb(128,19,44);
    font-weight: 200;
    border-radius: 6px;
    letter-spacing: 5px;
}
.function-btn .btn-back{
    background: #ffffff;
    border: 2px solid rgb(128,19,44);
}
.function-btn .btn-buy{
    background: rgb(128,19,44);
    color: #ffffff;
    margin-left: 19px;
}
.detail-show{
    background: #ffffff;
    display: flex;
    justify-content: center;
}
</style>
