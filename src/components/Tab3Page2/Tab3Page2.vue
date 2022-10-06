<template>
  <div class="form-wrapper">
    <BaseForm @submit="submitOrder" animteBtn />
  </div>
  <MarqueeSingle class="mg-b10" />
  <Agreement title="填写并提交视为阅读并同意" :agrList="agrList" v-model:checked="checked" />
  <CountDown />
  <img src="@/assets/img/page2/tab3-6.png" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/page2/tab3-2.jpg" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/page2/tab3-3.jpg" alt="产品说明" class="widthfull" />
  <p class="fs12 cccc lh20" @click="showTipPopup()">
    温馨提醒：
    个人擅自买卖实名电话卡属违法行为，请勿将号卡租借、贩卖给他人，如被他人利用发生非法违规行为，您将承担相应法律责任，请您确保规范使用您的号码。查看详情>>>
  </p>
  <img src="@/assets/img/page2/tab3-4.png" alt="产品说明" class="widthfull" />
  <div class="text-center expenses-wrap">
    <span class="expenses-text" @click="showExpenses()">资费详情说明</span>
  </div>
  <van-popup class="agreement-popup" v-model:show="show" round>
    <div class="agreement-wrap">{{ expensesText }}</div>
    <div class="agreement-confirm" @click="close()">我知道了</div>
  </van-popup>
  <van-popup v-model:show="showTip" class="common-popup" style="max-width: 576px" teleport="body">
    <div class="common-wrap">
      <img src="@/assets/img/page2/tab3-5.jpg" alt="温馨提醒" class="widthfull" />
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { expensesText } from "./static-data";

provide("tabIndex", 2);

let show = $ref(false),
  showTip = $ref(false),
  checked = $ref(true),
  agrList = $ref([
    {
      title: "《中国移动用户入网协议》",
      text: "https://h5.lipush.com/h5/index.html?id=7686186763730543422",
    },
    {
      title: "《实名制信息安全责任告知书》",
      text: "https://h5.lipush.com/h5/index.html?id=8683040763730590551",
    },
    {
      title: "《个人信息保护政策》",
      text: "https://h5.lipush.com/h5/index.html?id=5523261663728019648",
    },
    {
      title: "《单独同意书》",
      text: "https://h5.lipush.com/h5/index.html?id=7883210563728253535",
    },
  ]);

function showExpenses() {
  show = true;
}
function close() {
  show = false;
}
function showTipPopup() {
  showTip = true;
}

function submitOrder() {
  checked = true;
}
</script>
