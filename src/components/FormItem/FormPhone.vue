<template>
  <div class="flex align-middle form-item">
    <div class="form-label">联系电话</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkPhone(model)"
        :maxlength="11"
        placeholder="输入有效联系电话并保持畅通"
        type="tel"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { checkPhone } from "@/composition/business/use-verify-data";

export default defineComponent({
  name: "FormPhone",
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const model = computed<string>({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });
    return {
      model,
      checkPhone,
    };
  },
});
</script>
