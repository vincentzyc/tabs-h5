<template>
  <div class="phone-list" v-if="list.length > 0">
    <ul class="flex flex-wrap space-between">
      <li class="phone-item" v-for="(numItem, key) in list" @click="handleSelectedNum(numItem, key)">
        <div
          class="flex flex-center flex-column phone-number"
          :class="{ isactive: selectNumItem?.num === numItem.num }"
        >
          <p class="num-char">
            <strong :style="getHighlight(num.highlight)" v-for="num in numItem.item">{{ num.numChar }}</strong>
          </p>
          <div class="flex align-middle space-around phone-info">
            <del class="phone-price">{{ getShowMoney(numItem.showMoney) }}</del>
            <p class="phone-text"> {{ numItem.showMsg }}</p>
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
import { TypeNumItem } from "@/api/types/common";

defineProps<{
  list: TypeNumItem[];
}>();

const emits = defineEmits<{
  (e: "handleSelectedNum", numItem: TypeNumItem, key: number): void;
}>();

let selectNumItem = $ref<TypeNumItem | null>(null);

function getShowMoney(txt: string) {
  if (typeof txt !== "string" || txt === "") return "";
  if (txt.includes("元")) return txt;
  return txt + "元";
}
function getHighlight(highlight: string) {
  if (highlight === "0") return {};
  if (highlight === "1") return { color: "#fd3134" };
}
function handleSelectedNum(numItem: TypeNumItem, key: number) {
  selectNumItem = numItem;
  emits("handleSelectedNum", numItem, key);
}
</script>
