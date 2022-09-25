<template>
  <div class="flex align-middle form-item">
    <div class="form-label">客户姓名</div>
    <div class="form-input flex flex-auto align-middle">
      <input
        @blur="checkName(model)"
        :maxlength="15"
        placeholder="请输入客户姓名"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { checkName } from '@/composition/business/use-verify-data'


export default defineComponent({
  name: "FormName",
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
      checkName,
    }
  }
})
</script>