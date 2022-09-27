<template>
  <div class="number-rule">
    <ul class="flex flex-wrap space-between">
      <li
        :class="['rule-item', ruleItem.value === selectRule ? 'active' : '']"
        v-for="ruleItem in ruleItems"
        @click="handleSelectRule(ruleItem)"
        >{{ ruleItem.label }}</li
      >
      <li v-for="column in 4"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "selected", rule: string): void;
}>();

interface Props {
  ruleItems?: {
    label: string;
    value: string;
  }[];
}

const props = withDefaults(defineProps<Props>(), {
  ruleItems: () => [
    {
      label: "全部",
      value: "ALL1",
    },
    {
      label: "AAA+",
      value: "AAA+",
    },
    {
      label: "ABCBA",
      value: "ABCBA",
    },
    {
      label: "AABA",
      value: "AABA",
    },
    {
      label: "AABB",
      value: "AABB",
    },
    {
      label: "ABAA",
      value: "ABAA",
    },
    {
      label: "ABAB",
      value: "ABAB",
    },
    {
      label: "尾号8",
      value: "尾号8",
    },
  ]
});

let selectRule = $ref(props.ruleItems[0].value);

function handleSelectRule(ruleItem: any) {
  selectRule = ruleItem.value;
  emits("selected", selectRule);
}
</script>
