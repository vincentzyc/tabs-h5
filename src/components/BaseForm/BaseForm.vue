<template>
  <div>
    <div class="form-wrap">
      <FormBelongCity ref="domFormBelongCity" v-model="formData.belongCity"></FormBelongCity>
      <FormSelectNum
        :belongCity="formData.belongCity"
        id="handleNo"
        ref="domFormSelectNum"
        v-model="formData.handleNo"
      ></FormSelectNum>
      <FormName id="custName" v-model="formData.custName"></FormName>
      <FormPhone
        @input="showOtherForm(formData.contactNumber)"
        id="contactNumber"
        v-model="formData.contactNumber"
      ></FormPhone>
      <div v-show="formData.showForm">
        <FormIDCard id="idCardNo" v-model="formData.idCardNo"></FormIDCard>
      </div>
      <FormCity id="addressArr" v-model="formData.addressArr"></FormCity>
      <FormAddress id="address" v-model="formData.address"></FormAddress>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, watch } from "vue";
import Check from "@/utils/business/form-check";
import { useMainStore } from "@/pinia";
import { showToast } from "vant";
import { closeLoading, openLoading } from "@/utils/loading";
import { CommonApi } from "@/api";
import FormBelongCity from "../FormItem/BelongCity.vue";
import FormSelectNum from "../FormItem/SelectNum.vue";
import FormAddress from "../FormItem/Address.vue";
import FormIDCard from "../FormItem/IDCard.vue";
import FormPhone from "../FormItem/Phone.vue";
import FormName from "../FormItem/Name.vue";
import FormCity from "../FormItem/City.vue";
import { checkOut, successCallback } from "@/composition/business/use-verify-data";
import { reportMatomo } from "@/utils/matomo";

export default defineComponent({
  name: "BaseForm",
  components: {
    FormBelongCity,
    FormSelectNum,
    FormName,
    FormAddress,
    FormIDCard,
    FormPhone,
    FormCity,
  },
  setup() {
    const mainStore = useMainStore();
    // const cjData = computed(() => store.state.cjData);
    // const autoRegion = computed(() => store.state.autoRegion);

    const domFormBelongCity = ref();
    const formData = reactive({
      addressArr: [],
      belongCity: [],
      showForm: false,
      handleNo: "",
      custName: "",
      city: "",
      district: "",
      province: "",
      address: "",
      contactNumber: "",
      idCardNo: "",
    });
    const showOtherForm = (v: string) => {
      if (formData.showForm) return;
      if (Check.checkPhone(v) === true) formData.showForm = true;
    };

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

    // watch(
    //   () => autoRegion.value,
    //   newValue => {
    //     domFormBelongCity.value?.initCityPicker(newValue);
    //   }
    // );

    const submitOrder = async () => {
      var tip = checkOut(formData); //校验页面信息
      if (tip !== true) {
        showToast(tip);
        return false;
      }
      openLoading("正在提交");
      let fingerNum = "";
      // eslint-disable-next-line no-undef
      if (murmur) fingerNum = murmur;
      if (fingerNum) reportMatomo(`获取到指纹-${fingerNum}`);

      const params = {
        url: window.location.href || "",
        pageId: mainStore.cjData?.pageId || "",
        pid: mainStore.cjData?.pid || "",
        fingerNum: fingerNum,
        ...formData,
      };
      reportMatomo("点击提交按钮");
      // 调接口提交
      let res = await CommonApi.submitForm<Record<string, any>>(params);
      reportMatomo("提交接口返回", JSON.stringify(res));
      if (res.responseCode === "0") {
        if (res.subMediaCode === "1") {
          reportMatomo(`不上报媒体-subMediaCode=${res.subMediaCode}`);
          return successCallback(res, formData.contactNumber);
        }
        successCallback(res, formData.contactNumber);
      } else {
        closeLoading();
        showToast(res.msg);
      }
    };
    // onMounted(async () => {
    //   await nextTick()
    //   domFormBelongCity.value?.initCityPicker()
    // })
    return {
      formData,
      domFormBelongCity,
      submitOrder,
      checkOut,
      showOtherForm,
    };
  },
});
</script>
<style lang="stylus">
@import './style.styl';
</style>
