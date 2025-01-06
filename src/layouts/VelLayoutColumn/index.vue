<template>
  <div class="vel-layout-column" :class="{ fixed: fixedHeader }">
    <vel-column-bar></vel-column-bar>
    <main class="vel-main">
      <header class="vel-layout-header"></header>
      <vel-app-main></vel-app-main>
    </main>
  </div>
</template>
<script lang="ts" setup>
import VelColumnBar from "@/layouts/components/VelColumnBar/index.vue";
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
<style lang="scss" scoped></style>
