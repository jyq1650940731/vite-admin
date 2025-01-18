<template>
  <div class="vel-tabs">123</div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "VelTabs",
});
</script>
<style lang="scss" scoped>
.vel-tabs {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  min-height: var(--base-tabs-height);
  padding-right: var(--base-padding);
  padding-left: var(--base-padding);
  user-select: none;
  background: var(--el-color-white);
  border-top: 1px solid #f6f6f6;
}
</style>
