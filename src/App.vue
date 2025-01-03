<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
    <el-input v-model="elForm.elV"></el-input>
    <svg-icon name="zddw"></svg-icon>
    <el-button>默认按钮</el-button>
    <p class="bg-slate-200">操你妈逼</p>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
// console.log(window.$message.success("成功！"));
window.$message.success("成功！");
const elForm = reactive({
  elV: "",
});

const num = ref(1);
const handleChange = () => {
  console.log(num.value);
};
</script>
<style lang="scss">
p {
  color: var(--primary-color);
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
