<template>
      <div class="flex align-middle form-item">
        <div class="form-label">联系方式</div>
        <div class="form-input flex-auto flex align-middle">
          <input
            @blur="checkPhone(model)"
            v-bind="$attrs"
            :maxlength="11"
            placeholder="请输入手机号码"
            type="tel"
            v-model.trim="model"
          />
        </div>
      </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { checkPhone } from '@/composition/business/use-verify-data'


export default defineComponent({
  name: "FormPhone",
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
      checkPhone,
    }
  }
})
</script>