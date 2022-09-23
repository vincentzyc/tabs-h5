<template>
  <van-popup
    :lazy-render="false"
    position="bottom"
    v-model:show="show"
    :close-on-click-overlay="false"
    @closed="closedPopup"
  >
    <van-picker
      ref="pickerRef"
      swipe-duration="500"
      visible-option-num="15"
      option-height="36"
      :columns="columns"
      :columns-field-names="customFieldName"
      show-toolbar
      title="请选择"
      v-model="selectBelong"
      @cancel="cancel"
      @confirm="confirm"
    />
  </van-popup>
</template>

<script setup lang="ts">
import CITY from "./city.json";
import type { PickerInstance } from "vant";
interface Props {
  show: boolean;
  locationCity: string[];
  showCityAll: string;
}
const customFieldName = {
  text: "n",
  value: "n",
  children: "c",
};

const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "update:show", bool: boolean): void;
  (e: "selected", belong: string[]): void;
}>();

let pickerRef = $ref<PickerInstance>();
let selectBelong = $ref([""]);
let columns = $ref<typeof CITY>([]);

watch(
  () => props.locationCity,
  n => {
    initColumns();
    initBelong(n);
  }
);

function initColumns() {
  const newColumns = CITY.map(l1 => ({
    n: l1.n,
    c: props.showCityAll?.includes(l1.n)
      ? [{ n: "全部" }]
      : l1.c.map(l2 => ({
          n: l2.n,
        })),
  }));
  columns = newColumns;
}

async function initBelong(belong: string[]) {
  const formatBelong = [];
  const province = belong[0];
  const city = belong[1];
  if (province) {
    formatBelong.push(province);
    if (city) formatBelong.push(city);
  }
  selectBelong = formatBelong;
  await nextTick();
  const curProvince = pickerRef.getSelectedOptions()?.[0]?.n;
  const curCity = pickerRef.getSelectedOptions()?.[1]?.n;
  emits("selected", [curProvince, curCity]);
}

function confirm() {
  emits("update:show", false);
}
function cancel() {
  emits("update:show", false);
}

function closedPopup() {
  emits("selected", selectBelong);
}
</script>
