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
      :columns="columns"
      :columns-field-names="customFieldName"
      show-toolbar
      v-model="selectCity"
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
  locationCity: string[];
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  level: 3,
  locationCity: () => [""],
});

const emits = defineEmits<{
  (e: "update:show", bool: boolean): void;
  (e: "selected", belong: string[]): void;
}>();

const customFieldName = {
  text: "n",
  value: "n",
  children: "c",
};

let columns = $ref<any[]>([]);
let selectCity = $ref([""]);

function initCity() {
  if (props.level == 2) return (columns = CITY.map(l1 => ({ n: l1.n, c: l1.c.map(l2 => ({ n: l2.n })) })));
  if (props.level == 1) return (columns = CITY.map(l1 => ({ n: l1.n })));
  return (columns = CITY);
}

initCity();

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
  emits("selected", selectCity);
}
</script>
