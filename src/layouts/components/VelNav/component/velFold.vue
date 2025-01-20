<template>
  <div class="vel-fold">
    <i class="fold-unfold" :class="!collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "VelFold",
});
import { useSettingsStore } from "@/stores/modules/settings";
const settingsStore = useSettingsStore();
const { collapse } = storeToRefs(settingsStore);
const { toggleCollapse } = settingsStore;
</script>
<style lang="scss" scoped>
.fold-unfold {
  color: var(--el-color-grey);
  font-size: var(--base-font-size-bigger);
  cursor: pointer;
}
</style>
