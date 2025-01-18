<template>
  <div class="virtual-container">
    <el-button @click="handleList">渲染1w条数据</el-button>
    <vir-list class="vir-list" :list="list" :size="60" :shownumber="10"></vir-list>
  </div>
</template>
<script lang="ts" setup>
import VirList from "./components/VirList.vue";
import { ref } from "vue";
import type { ListType } from "@/views/scenario/types/index";
defineOptions({
  name: "VirtualList",
});
const list = ref(<ListType[]>[]);
const getList = () => {
  list.value = Array(10000)
    .fill("")
    .map((item: string, index: number) => {
      return {
        id: index,
        content: "数据列表" + index,
      };
    });
};
const handleList = () => {
  let now = Date.now();
  getList();
  console.log("JS运行时间：", Date.now() - now);
  setTimeout(() => {
    console.log("总运行时间：", Date.now() - now);
  }, 0);
};
</script>
