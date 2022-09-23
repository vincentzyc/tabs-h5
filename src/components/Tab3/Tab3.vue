<template>
  <div>移动</div>
  <Agreement title="填写并提交视为阅读并同意" :agrList="agrList" />
  <img src="@/assets/img/tab3-2.jpg" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/tab3-3.jpg" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/tab3-4.png" alt="产品说明" class="widthfull" />
  <div class="text-center expenses-wrap">
    <span class="expenses-text" @click="showExpenses()">资费详情说明</span>
  </div>
  <van-popup class="center-popup" v-model:show="show" round>
    <div class="popup-wrap">{{ expensesText }}</div>
  </van-popup>
</template>

<script setup lang="ts">
import { expensesText } from "./static-data";
let show = $ref(false),
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
</script>
