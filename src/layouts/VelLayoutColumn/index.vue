<template>
  <div class="vel-layout-column" :class="{ fixed: fixedHeader }">
    <vel-column-bar></vel-column-bar>
    <div class="vel-main">
      <header
        class="vel-layout-header"
        :class="{
          'fixed-header': fixedHeader,
        }"
      >
        <vel-nav></vel-nav>
        <vel-tabs></vel-tabs>
      </header>
      <vel-app-main></vel-app-main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VelColumnBar from "@/layouts/components/VelColumnBar/index.vue";
import VelNav from "@/layouts/components/VelNav/index.vue";
import VelTabs from "@/layouts/components/VelTabs/index.vue";
defineOptions({
  name: "VelLayoutColumn",
});
defineProps({
  fixedHeader: {
    type: Boolean,
    default() {
      return true;
    },
  },
});
</script>
