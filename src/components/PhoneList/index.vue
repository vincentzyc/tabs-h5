<template>
  <div class="phone-list" v-if="phoneList.length > 0">
    <ul class="flex flex-wrap space-between">
      <li class="phone-item" v-for="phone in phoneList">
        <div class="flex flex-center flex-column phone-number">
          <p class="num-char">
            <strong :style="getHighlight(num.highlight)" v-for="num in phone.item">{{ num.numChar }}</strong>
          </p>
          <div class="flex align-middle space-around phone-info">
            <del class="phone-price">{{ getShowMoney(phone.showMoney) }}</del>
            <p class="phone-text"> {{ phone.showMsg }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="empty-tip" v-else>
    哎呦，没有适合您的号码！
    <p><small style="color: #ccc">建议缩短号码字数，例如：88</small></p>
  </div>
</template>

<script setup lang="ts">
// import phoneList from "./num";

type TypePhoneList = {
  productCode: string;
  num: string;
  showMsg: string;
  showMoney: string;
  item: {
    numChar: string;
    highlight: string;
  }[];
}[];

let phoneList = $ref<TypePhoneList>([]);

function getShowMoney(txt: string) {
  if (typeof txt !== "string" || txt === "") return "";
  if (txt.includes("元")) return txt;
  return txt + "元";
}
function getHighlight(highlight: string) {
  if (highlight === "0") return {};
  if (highlight === "1") return { color: "#fd3134" };
}
</script>
