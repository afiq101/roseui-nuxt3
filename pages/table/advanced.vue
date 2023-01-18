<script setup>
import data from "./data.js";
definePageMeta({
  title: "Table Advanced",
});

const showCode1 = ref(false);

</script>

<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header> Advanced</template>
      <template #body>
        <rs-table
          :data="data"
          :options-advanced="{
            sortable: true,
            responsive: true,
          }"
          advanced
        >
        </rs-table>
        <div class="flex justify-end mt-2">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg"
            @click="showCode1 ? (showCode1 = false) : (showCode1 = true)"
          >
            Show Code
          </button>
        </div>
        <ClientOnly>
          <transition name="fade">
            <div class="z-0" v-show="showCode1" v-highlight>
              <SimpleBar style="height: 400px">
                <pre class="language-html shadow-none">
            <code>
              &lt;template&gt;
                &lt;rs-table
                  :data="data"
                  :options-advanced="{
                    sortable: true,
                    responsive: true,
                  }"
                  advanced
                &gt;
                &lt;/rs-table&gt;
              &lt;/template&gt;
    
              &lt;script setup&gt;
                import data from "./data.js";
              &lt;/script&gt;
            </code>
          </pre>
              </SimpleBar>
            </div>
          </transition>
        </ClientOnly>
      </template>
    </rs-card>
  </div>
</template>
