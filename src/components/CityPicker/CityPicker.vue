<template>
  <van-popup
    :lazy-render="false"
    position="bottom"
    v-model:show="show"
    :close-on-click-overlay="false"
    @closed="closedPopup"
  >
    <van-picker
      swipe-duration="500"
      visible-option-num="15"
      option-height="36"
      :columns="columns"
      :columns-field-names="customFieldName"
      show-toolbar
      title="请选择"
      @cancel="cancel"
      @change="onChange"
      @confirm="confirm"
    />
  </van-popup>
</template>

<script setup lang="ts">
import CITY from "./city.json";
import type { PickerCancelEventParams, PickerChangeEventParams, PickerConfirmEventParams } from "vant";

interface Props {
  show: boolean;
  level?: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  level: 3,
});

const emits = defineEmits<{
  (e: "update:show", bool: boolean): void;
}>();

const customFieldName = {
  text: "n",
  value: "n",
  children: "c",
};

let columns = $ref<any[]>([]);

function initCity() {
  if (props.level == 2) return (columns = CITY.map(l1 => ({ n: l1.n, c: l1.c.map(l2 => ({ n: l2.n })) })));
  if (props.level == 1) return (columns = CITY.map(l1 => ({ n: l1.n })));
  return (columns = CITY);
}

initCity();
console.log(JSON.stringify(columns))

function confirm(v: PickerConfirmEventParams) {
  console.log(v);
  emits("update:show", false);
}
function cancel(v: PickerCancelEventParams) {
  console.log(v);
  emits("update:show", false);
}

function onChange(value: PickerChangeEventParams) {
  console.log(value);
}
function closedPopup() {
  console.log("关闭弹窗");
}
</script>
