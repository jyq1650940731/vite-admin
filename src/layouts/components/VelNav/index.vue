<template>
  <div class="vel-nav">
    <el-row :gutter="15">
      <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="4">
        <div class="left-panel">
          <vel-fold></vel-fold>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import velFold from "./component/velFold.vue";
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
  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: var(--base-nav-height);

    :deep() {
      .fold-unfold {
        margin-right: var(--base-margin);
      }
    }
  }
}
</style>
