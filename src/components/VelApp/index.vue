<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { ref } from "vue";
defineOptions({
  name: "VelApp",
});
const locale = ref(zhCn);
</script>
<style lang="scss" scoped></style>
