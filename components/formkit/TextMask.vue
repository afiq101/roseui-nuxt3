<script setup>
import { vMaska } from "maska";

/* eslint-disable */
const props = defineProps({
  context: Object,
});

const mask = String(props.context.mask);
const tokens = ref(props.context.attrs.maskOptions?.tokens || "");
const eager = ref(props.context.attrs.maskOptions?.eager || false);
const reversed = ref(props.context.attrs.maskOptions?.reversed || false);

// console.log(props.context);

function handleInput(e) {
  props.context.node.input(e.target.value);
}
</script>

<template>
  <ClientOnly>
    <input
      @input="handleInput"
      :class="context.classes.input"
      :value="props.context._value"
      :placeholder="props.context.attrs.placeholder"
      :disabled="props.context.attrs.disabled"
      :readonly="props.context.attrs.readonly"
      :data-maska-tokens="tokens"
      :data-maska-eager="eager"
      :data-maska-reversed="reversed"
      :data-maska="mask"
      v-maska
    />
  </ClientOnly>
</template>
