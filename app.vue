<script setup>
useHead({
  title: "RoseUI - NuxtJS Admin Dashboard Template",
  description: "Home page",
  htmlAttrs: {
    lang: "en",
  },
});

const loading = ref(true);

onMounted(() => {
  // Hide loading indicator if not hydrating
  setTimeout(() => {
    loading.value = false;
  }, 1000);

  // Get theme from localStorage
  let theme = localStorage.getItem("theme") || "rose";
  document.documentElement.setAttribute("data-theme", theme);
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Loading v-if="loading" />
      <NuxtPage :key="$route.fullPath" v-else />
    </NuxtLayout>
  </div>
</template>
