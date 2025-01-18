<template>
  <div class="vel-nav">123</div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "VelNav",
});
</script>
<style lang="scss" scoped>
.vel-nav {
  position: relative;
  height: var(--base-nav-height);
  padding-right: var(--base-padding);
  padding-left: var(--base-padding);
  overflow: hidden;
  user-select: none;
  background: var(--el-color-white);
  box-shadow: var(--base-box-shadow);
}
</style>
