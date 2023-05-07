<template>
  <div class="form-wrap">
    <FormName id="custName" v-model="formData.custName"></FormName>
    <FormPhone id="contactNumber" v-model="formData.contactNumber"></FormPhone>
    <div v-show="showOtherForm && formData.showForm">
      <FormIDCard id="idCardNo" v-model="formData.idCardNo"></FormIDCard>
      <FormCity id="addressArr" :locationCity="mainStore.locationCity" v-model="formData.addressArr"></FormCity>
      <FormAddress id="address" v-model="formData.address"></FormAddress>
    </div>
    <img
      v-if="animteBtn"
      src="@/assets/img/button.png"
      alt="提交按钮"
      class="breathlamp widthfull"
      @click="submitOrder()"
    />
    <van-button
      @click="submitOrder()"
      type="primary"
      block
      round
      class="submit-button"
      color="linear-gradient(#eb4e4b,#e30023)"
      v-else
      >立即领取</van-button
    >
  </div>
</template>

<script lang="ts" setup>
import Check from "@/utils/business/form-check";
import { useMainStore } from "@/pinia";
import { showToast } from "vant";
import { closeLoading, openLoading } from "@/utils/loading";
import { CommonApi } from "@/api";
import { checkOut } from "@/composition/business/use-verify-data";
import { reportMatomo } from "@/utils/report";
import { PageIdLocation } from "@/api/types/common";
import './style.less';

const FormCity = defineAsyncComponent(() => import("@/components/FormItem/FormCity.vue"));

const toutiaoDefaultLink = "https://h5.lipush.com/h5/index.html?id=2021080216415100047"; // M001

const gdtDefaultLink = "https://h5.lipush.com/h5/index.html?id=3804505262428528861"; // M002

const props = defineProps<{
  handleNo?: string;
  animteBtn?: boolean;
}>();

const emit = defineEmits<{
  (e: "submit"): void;
}>();

const mainStore = useMainStore();

const formData = reactive({
  addressArr: [],
  showForm: false,
  custName: "",
  city: "",
  district: "",
  province: "",
  address: "",
  contactNumber: "",
  idCardNo: "",
});

const showOtherForm = computed(() => {
  if (formData.showForm) return true;
  if (Check.checkPhone(formData.contactNumber) === true) {
    formData.showForm = true;
    return true;
  }
  return false;
});

watch(
  () => formData.addressArr,
  newValue => {
    if (Array.isArray(newValue) && newValue.length === 3) {
      formData.city = newValue[1];
      formData.district = newValue[2];
      formData.province = newValue[0];
    }
  }
);

const submitOrder = async () => {
  var tip = checkOut(formData); //校验页面信息
  if (tip !== true) {
    showToast(tip);
    throw new Error(tip)
    return false;
  }
  openLoading("正在提交");

  let fingerNum = "";
  // eslint-disable-next-line no-undef
  if (typeof murmur !== "undefined" && murmur) {
    // eslint-disable-next-line no-undef
    fingerNum = murmur;
    reportMatomo(`获取到指纹-${fingerNum}`);
  }

  const params = {
    url: window.location.href || "",
    pageId: mainStore.cjData?.pageId || "",
    pid: mainStore.cjData?.pid || "",
    productCode: mainStore.cjData?.productCode || "",
    fingerNum: fingerNum,
    handleNo: props.handleNo || "",
    ...formData,
  };

  reportMatomo("点击提交按钮");
  emit("submit");
  // 调接口提交
  let res = await CommonApi.submitForm<Record<string, any>>(params);
  reportMatomo("提交接口返回", JSON.stringify(res));
  if (res.responseCode === "0") {
    successCallback({ resData: res, mediaCode: mainStore.cjData?.mediaCode });
  } else {
    const newParam = { pid: params.pid, url: window.location.href };
    let newRes = await CommonApi.pageIdLocation(newParam);
    updateAllCjData(newRes);
    closeLoading();
    showToast(res.msg);
  }
};

async function successCallback(resData: Record<string, any>) {
  let realLink = "";
  setTimeout(() => {
    closeLoading();
    if (resData?.url) {
      realLink = resData.url;
    } else if (resData.mediaCode === "M002") {
      realLink = gdtDefaultLink;
    } else {
      realLink = toutiaoDefaultLink;
    }
    window.location.href = realLink;
  }, 300);
}

function updateAllCjData(newRes: PageIdLocation) {
  if (mainStore.cjAllData?.tabInfo) {
    for (const iterator of mainStore.cjAllData?.tabInfo) {
      if (iterator.tabId === mainStore.cjData?.tabId) {
        iterator.pageId = newRes.pageId;
        break;
      }
    }
  }
  if (mainStore.cjAllData) mainStore.setCjAllData(mainStore.cjAllData);
  if (mainStore.cjData) mainStore.cjData.pageId = newRes.pageId;
  mainStore.setCjData(mainStore.cjData);
}
</script>