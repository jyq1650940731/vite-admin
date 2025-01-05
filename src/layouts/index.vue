<template>
  <div class="vite-admin-wrapper"><vel-layout-column></vel-layout-column></div>
</template>
<script lang="ts" setup>
import VelLayoutColumn from "./VelLayoutColumn/index.vue";
defineOptions({ name: "ValLayout" });
</script>
<style lang="scss" scoped>
.vite-admin-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  [class*="vel-layout-"] {
    &.fixed {
      padding-top: calc(var(--base-nav-height) + var(--base-tabs-height));
    }
  }
}
</style>
