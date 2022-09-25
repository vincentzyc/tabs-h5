<template>
  <div class="flex align-middle form-item">
    <div class="form-label">收货地址</div>
    <div @click="openCityPicker()" class="form-input flex-auto flex align-middle disabled-input">
      <input :value="showValue" class="wg-input" disabled placeholder="请选择省份/地市/县区" type="text" />
    </div>
    <CityPicker @closePicker="closePicker" ref="domCityPicker" v-model="model" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { checkCity } from '@/composition/business/use-verify-data'
import { useStore } from '@/store';
import { CommonApi } from '@/api';
import CityPicker from "@/components/CityPicker/index.vue"

export default defineComponent({
  name: "FormCity",
  components: {
    CityPicker,
  },
  props: {
    modelValue: {
      required: true,
      type: Array,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const store = useStore()
    const cjData = computed(() => store.state.cjData)
    const autoRegion = computed(() => store.state.autoRegion)
    const domCityPicker = ref()
    const hadInitCity = ref(false)
    const model = computed<any>({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    })
    const showValue = computed(() => {
      return model.value.length > 0 ? model.value.join(' ') : ''
    })
    const initCityPicker = async () => {
      if (!hadInitCity.value && cjData.value?.productCode) {
        const res = await CommonApi.getCityInfo({ productCode: cjData.value?.productCode || '' })
        if (Array.isArray(res) && res.length > 0) {
          if (autoRegion.value.length > 0) {
            domCityPicker.value?.initCity(res, autoRegion.value);  //初始化地址选择组件
          } else {
            domCityPicker.value?.initCity(res);  //初始化地址选择组件
          }
          hadInitCity.value = true
        }
      }
    }
    const openCityPicker = () => {
      initCityPicker()
      domCityPicker.value?.open()
    }
    const closePicker = (val: string[]) => {
      if (Array.isArray(val) && val.length === 3) {
        emit("update:modelValue", val);
        checkCity(val)
      }
    }
    return {
      model, showValue, domCityPicker,
      initCityPicker, checkCity, openCityPicker, closePicker
    }
  }
})
</script>