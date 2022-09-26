<template>
  <div class="flex align-middle form-item">
    <div class="form-label">身份证号</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkIDCard(model)"
        :maxlength="18"
        placeholder="输入办理人身份证（已加密）"
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