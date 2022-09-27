<template>
  <div class="flex align-middle form-item">
    <div class="form-label">收货城市</div>
    <div @click="openCityPicker()" class="form-input flex-auto flex align-middle disabled-input">
      <div class="wg-input" :class="{ placeholder: !showValue }">{{ showValue ? showValue : "请选择收货城市" }}</div>
    </div>
    <CityPicker @selected="closePicker" :locationCity="locationCity" ref="domCityPicker" v-model:show="showPicker" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { checkCity } from "@/composition/business/use-verify-data";

export default defineComponent({
  name: "FormCity",
  props: {
    modelValue: {
      required: true,
      type: Array,
    },
    locationCity: {
      required: true,
      type: Array,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const domCityPicker = ref();
    const showPicker = ref(false);
    const showValue = computed(() => {
      return props.modelValue.length > 0 ? props.modelValue.join(" ") : "";
    });

    const openCityPicker = () => {
      showPicker.value = true;
    };
    const closePicker = (val: string[]) => {
      if (Array.isArray(val) && val.length === 3) {
        emit("update:modelValue", val);
        checkCity(val);
      }
    };
    return {
      showPicker,
      showValue,
      domCityPicker,
      checkCity,
      openCityPicker,
      closePicker,
    };
  },
});
</script>
