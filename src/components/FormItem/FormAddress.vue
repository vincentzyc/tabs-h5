<template>
  <div class="flex align-middle form-item border-bnone">
    <div class="form-label">详细地址</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkAddress(model)"
        :maxlength="50"
        placeholder="街道/镇+村/小区/楼+门牌号"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { checkAddress } from '@/composition/business/use-verify-data'


export default defineComponent({
  name: "FormAddress",
  props: {
    modelValue: {
      required: true,
      type: String,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const model = computed<string>({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    })
    return {
      model,
      checkAddress,
    }
  }
})
</script>