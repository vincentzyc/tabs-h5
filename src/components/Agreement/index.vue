<template>
  <Checkbox v-model="checked" icon-size="14px" checked-color="#666666" label-disabled>
    <p class="agreement-text">
      <span>{{ title }}</span>
      <span v-for="(agr, key) in agrList">
        <span v-if="key > 0">和</span>
        <span class="agreement-title" @click="openAgreement(agr.title, agr.text)">{{ agr.title }}</span>
      </span>
    </p>
  </Checkbox>
  <AgreementPopup v-model:show="showPopup" :text="curText" />
</template>

<script setup lang="ts">
import AgreementPopup from "@/components/AgreementPopup/index.vue";
import { Checkbox } from "vant";
import "vant/lib/Checkbox/style";

defineProps<{
  title: string;
  agrList: {
    title: string;
    text: string;
  }[];
}>();
let checked = $ref(false),
  showPopup = $ref(false),
  curText = $ref("");

function openAgreement(title: string, text: string) {
  showPopup = true;
  curText = text;
}
</script>
