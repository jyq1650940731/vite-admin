<template>
  <el-scrollbar :height="scrollHeight" @scroll="handleScroll" class="vir-scroll-view">
    <ul class="vir-list">
      <li class="vir-list-item" v-for="item in showData" :key="item.id" :style="{ height: size + 'px' }">
        {{ item.content }}
      </li>
    </ul>
    <div class="bar" :style="{ height: barHeight }"></div>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import type { ListType } from "@/views/scenario/types/index";
import { reactive, computed } from "vue";
defineOptions({
  name: "VirList",
});
const props = defineProps({
  //需要渲染的数据
  list: {
    type: Array as PropType<ListType[]>,
    required: true,
  },
  //每条结点高度
  size: {
    type: Number,
    required: true,
  },
  //每次渲染的结点个数
  shownumber: {
    type: Number,
    required: true,
  },
  scrollHeight: {
    type: Number,
    require: true,
  },
});
//
const state = reactive({
  start: 0, //起始位置
  end: props.shownumber, //结束位置
});

const showData = computed(() => props.list.slice(state.start, state.end));
const scrollHeight = computed(() => props.size * props.shownumber + "px");
const barHeight = computed(() => props.list.length * props.size + "px");
const handleScroll = ({ scrollTop }: { scrollTop: number }) => {
  state.start = Math.floor(scrollTop / props.size);
  state.end = state.start + props.shownumber;
  console.log({ scrollTop, start: state.start });
};
</script>
<style lang="scss" scoped>
.vir-scroll-view {
  position: relative;
  .vir-list {
    position: absolute;
    width: 100%;
    left: 0;
  }
  .bar {
    position: relative;
  }
}
</style>
