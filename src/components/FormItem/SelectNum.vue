<template>
  <div class="flex align-middle form-item">
    <div class="form-label">免费选号</div>
    <div @click="openNumPicker()" class="form-input flex-auto flex align-middle disabled-input">
      <div
        class="wg-input normal-color"
        v-if="Array.isArray(phoneItem.item) && phoneItem.item.length > 0"
      >
        <span
          :key="phoneItem.num + key"
          :style="{ color: num.highlight ? '#f15048' : '' }"
          v-for="(num,key) in phoneItem.item"
        >{{ num.numChar }}</span>
      </div>
      <div class="wg-input normal-color" v-else>请选择您的心仪号码</div>
      <!-- <input :value="model" class="wg-input" disabled placeholder="亲,请选择您的心仪号码" type="text" /> -->
    </div>
    <NumPicker ref="domNumPicker" v-model="phoneItem" :belongCity="belongCity" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { checkCity } from '@/composition/business/use-verify-data'
import NumPicker from "@/components/NumPicker/index.vue"
import { NumItems } from '@/components/NumPicker/ts/types';

type PhoneItem = NumItems | Record<string, any>

export default defineComponent({
  name: "FormSelectNum",
  components: {
    NumPicker,
  },
  props: {
    belongCity: {
      type: Array,
      required: true,
    },
    modelValue: {
      required: true,
      type: String,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const domNumPicker = ref()
    const phoneItem = ref<PhoneItem>({})

    watch(() => phoneItem.value, (newValue) => {
      emit("update:modelValue", newValue.num || '');
    })

    watch(() => props.belongCity, () => {
      domNumPicker.value?.resetPhoneList()
      emit("update:modelValue", '')
    })

    const openNumPicker = () => {
      domNumPicker.value?.open()
    }

    return {
      phoneItem, domNumPicker,
      checkCity, openNumPicker
    }
  }
})
</script>