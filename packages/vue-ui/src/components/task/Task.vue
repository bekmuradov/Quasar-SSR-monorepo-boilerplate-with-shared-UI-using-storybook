<script setup lang="ts">
export type Color = 'yellow' | 'green' | 'blue' | 'accent';
interface ComponentProps {
  modelValue: boolean;
  label: string;
  dark?: boolean;
  color?: Color;
}

defineProps<ComponentProps>()

interface ComponentEmits {
  (event: 'update:model-value', val: boolean): void;
}
const emit = defineEmits<ComponentEmits>()
</script>

<template>
  <div>
    <q-checkbox
      :model-value="modelValue"
      :label="label"
      :dark="dark"
      :color="color"
      @update:model-value="emit('update:model-value', modelValue)"
    />
  </div>
</template>

<style scoped>

</style>
