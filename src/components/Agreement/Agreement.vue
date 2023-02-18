<template>
  <van-checkbox v-model="isChecked" icon-size="14px" checked-color="#cccccc" label-disabled @click="handleClick">
    <p class="agreement-text">
      <span>{{ title }}</span>
      <span v-for="(agr, key) in agrList">
        <span v-if="key > 0">和</span>
        <span class="agreement-title" @click="openAgreement(agr.title, agr.text)">{{ agr.title }}</span>
      </span>
    </p>
  </van-checkbox>
  <AgreementPopup v-model:show="showPopup" :text="curText" />
</template>

<script setup lang="ts">
import { reportMatomo } from "@/utils/report";

const props = defineProps<{
  title: string;
  checked: boolean;
  agrList: {
    title: string;
    text: string;
  }[];
}>();

const emits = defineEmits<{
  (e: "update:checked", bool: boolean): void;
}>();

const isChecked = $computed({
  get: () => props.checked,
  set: v => emits("update:checked", v),
});

let showPopup = $ref(false),
  curText = $ref("");

function openAgreement(title: string, text: string) {
  showPopup = true;
  curText = text;
}
function handleClick() {
  props.checked ? reportMatomo("勾选协议") : reportMatomo("取消勾选协议");
}
</script>
