<template>
  <div class="select-number-wrapper">
    <div class="search-number-wrapper">
      <BelongCity
        v-if="showBelongCity"
        :locationCity="locationCity"
        @selected="handleSelectedBelong"
        :showCityAll="showCityAll"
      />
      <SearchNumber v-if="showSearchNumber" @search="handleSearch" />
      <NumberRule v-if="showNumberRule" @selected="handleSelectedRule" :ruleItems="ruleItems" />
    </div>
    <PhoneList :list="phoneList" @handleSelectedNum="lockNumber" />
    <TogglePage
      v-show="phoneList.length > 0"
      :pageIndex="pageIndex"
      :nextLoading="nextLoading"
      @prepage="handlePrepage"
      @nextpage="handleNextpage"
    />
  </div>
</template>

<script setup lang="ts">
import { PageIdLocation, TypeNumItem } from "@/api/types/common";
import "./css/index.styl";
import { useMainStore } from "@/pinia";
import { CommonApi } from "@/api";
import { closeLoading, openLoading } from "@/utils/loading";
import { showToast } from "vant";
import { reportMatomo } from "@/utils/report";

const tabIndex = inject("tabIndex");

let isNumInit = false;

const props = defineProps<{
  ruleItems?: {
    label: string;
    value: string;
  }[];
  showBelongCity?: boolean;
  showSearchNumber?: boolean;
  showNumberRule?: boolean;
}>();

const emit = defineEmits<{
  (e: "selected", numItem: TypeNumItem, selectedBelong: string[]): void;
}>();

const mainStore = useMainStore();

watch(
  () => mainStore.cjData,
  n => {
    if (tabIndex !== mainStore.activeTab) return;
    if (n) {
      initBelong(n);
    }
  }
);

const defaultNum = 8;

let allNums: TypeNumItem[] = [];
let selectedBelong = ["", ""];
let searchNum = "";
let numRule = props.ruleItems?.[0].value || "ALL1";

let pageIndex = $ref(1);
let locationCity = $ref([""]);
let showCityAll = $ref("");
let phoneList = $ref<TypeNumItem[]>([]);
let nextLoading = $ref(false);

function getNumParams() {
  if (!mainStore.cjData) return null;
  const numParams = {
    province: selectedBelong[0] || "",
    city: selectedBelong[1] || "",
    pid: mainStore.cjData.pid || mainStore.pid,
    productCode: mainStore.cjData.productCode || "",
    sysOrderId: mainStore.cjData.pageId || "",
    prettyType: numRule,
    searchNum: searchNum,
  };
  return numParams;
}

function initBelong(cjData: PageIdLocation) {
  if (isNumInit) return;
  if (cjData) {
    locationCity = [cjData.province, cjData.city];
    showCityAll = cjData.belongCity;
    isNumInit = true;
  }
}

function handleSelectedBelong(belong: string[]) {
  selectedBelong = belong;
  getNumber();
}

function handleSearch(num: string) {
  searchNum = num;
  getNumber();
  reportMatomo("点击搜索号码", num);
}

function handleSelectedRule(rule: string) {
  numRule = rule;
  getNumber();
  reportMatomo("选择规则", rule);
}

function handlePrepage() {
  pageIndex--;
  setPhoneList(pageIndex);
  reportMatomo("上一页");
}

function handleNextpage() {
  pageIndex++;
  setPhoneList(pageIndex);
  reportMatomo("下一页");
}

function setPhoneList(pageIndex: number) {
  const startIndex = (pageIndex - 1) * defaultNum;
  const endIndex = pageIndex * defaultNum;
  const pagePhoneList = allNums.slice(startIndex, endIndex);
  if (Array.isArray(pagePhoneList) && pagePhoneList.length === 0) {
    nextLoading = true;
    return getNumber();
  }
  phoneList = pagePhoneList.filter(v => !v.isLock);
}

async function lockNumber(numItem: TypeNumItem, key: number) {
  if (!mainStore.cjData) return;
  openLoading("拼命抢号中...");
  const param = {
    pid: mainStore.cjData.pid || mainStore.pid,
    handleNo: numItem.num,
    productCode: mainStore.cjData.productCode || "",
    sysOrderId: mainStore.cjData.pageId || "",
    province: selectedBelong[0] || "",
    city: selectedBelong[1] || "",
  };
  const res = await CommonApi.lockNumber(param);
  closeLoading();
  if (res?.code === "0") {
    handleSelectedNum(numItem);
  } else {
    showToast("您下手太慢了，该号码已被别的用户选取！");
    phoneList.splice(key, 1);
    if (Array.isArray(allNums)) {
      const numsLength = allNums.length;
      for (let index = 0; index < numsLength; index++) {
        const element = allNums[index];
        if (element.num === numItem.num) {
          element.isLock = true;
          break;
        }
      }
    }
  }
}

function handleSelectedNum(numItem: TypeNumItem) {
  emit("selected", numItem, selectedBelong);
  reportMatomo("选择号码", numItem.num);
}

function resetData() {
  pageIndex = 1;
  allNums = [];
  phoneList = [];
  nextLoading = false;
  closeLoading();
}

async function getNumber() {
  pageIndex = 1;
  const param = getNumParams();
  openLoading("拼命加载中...");
  let res = await CommonApi.getPrettyMixItem(param);
  if (res.data && Array.isArray(res.data.numItem) && res.data.numItem.length > 0) {
    allNums = res.data.numItem;
    phoneList = allNums.slice(0, defaultNum);
    nextLoading = false;
    closeLoading();
  } else {
    resetData();
  }
}

onMounted(() => {
  if (mainStore.cjData) initBelong(mainStore.cjData);
});
</script>
