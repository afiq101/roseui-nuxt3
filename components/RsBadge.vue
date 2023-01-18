<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  icon: {
    type: String,
    default: "",
  },
  iconSize: {
    type: String,
    default: "20",
  },
});
</script>

<template>
  <div
    class="flex justify-center items-center whitespace-nowrap rounded-lg w-auto text-white px-3 py-1 "
    :class="{
      'bg-blue-500': variant === 'info',
      'bg-primary-400': variant === 'primary',
      'bg-green-500': variant === 'success',
      'bg-warning': variant === 'warning',
      'bg-red-500': variant === 'danger',
    }"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
    ></Icon>
    <slot />
  </div>
</template>
