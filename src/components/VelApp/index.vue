<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
defineOptions({
  name: "VelApp",
});
const locale = ref(zhCn);
</script>
<style lang="scss" scoped></style>
