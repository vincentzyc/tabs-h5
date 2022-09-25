<template>
  <div class="flex align-middle form-item">
    <div class="form-label">归属地</div>
    <div @click="openCityPicker()" class="form-input flex-auto flex align-middle disabled-input">
      <input :value="showValue" class="wg-input" disabled placeholder="请选择归属地" type="text" />
    </div>
  </div>
  <CityPicker @closePicker="closePicker" ref="domCityPicker" v-model="model" :level="2" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { checkCity } from '@/composition/business/use-verify-data'
import CityPicker from "@/components/CityPicker/index.vue"
import { reportMatomo } from '@/utils/matomo';

export default defineComponent({
  name: "FormBelongCity",
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
    const domCityPicker = ref()
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
    const initCityPicker = (defaultCity: string[]) => {
      if (Array.isArray(defaultCity) && defaultCity.length > 0) {
        domCityPicker.value?.initCity('', defaultCity, true);  //初始化地址选择组件
      } else {
        domCityPicker.value?.initCity('', true);  //初始化地址选择组件
      }
    }
    const openCityPicker = () => {
      domCityPicker.value?.open()
      reportMatomo('打开归属地选号弹窗')
    }
    const closePicker = (val: string[]) => {
      if (Array.isArray(val) && val.length === 2) {
        emit("update:modelValue", val);
        reportMatomo('归属地选号-归属地-selectQCellCore',val.join(','))
      }
    }
    return {
      model, showValue, domCityPicker,
      initCityPicker, checkCity, openCityPicker, closePicker
    }
  }
})
</script>