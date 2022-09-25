<template>
  <div class="flex align-middle form-item">
    <div class="form-label">身份证</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkIDCard(model)"
        :maxlength="18"
        placeholder="未满16周岁请勿下单"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { checkIDCard } from '@/composition/business/use-verify-data'

export default defineComponent({
  name: "FormIDCard",
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
      checkIDCard,
    }
  }
})
</script>