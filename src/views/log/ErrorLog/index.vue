<template>
  <div class="errorlog-container">
    <!-- 同步错误 -->
    <el-button style="marginright: 20px" @click="handleSyncError">同步错误</el-button>

    <!-- 异步错误 -->
    <el-button style="marginright: 20px" @click="handleAsyncError">异步错误</el-button>

    <!-- promise错误 -->
    <el-button style="marginright: 20px" @click="handlePromiseError(1)">promise错误</el-button>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "ErrorLog",
});
const handleSyncError = () => {
  try {
    // undefined.map();
  } catch (error) {
    console.log(error, "---- 捕获到同步错误 ---");
  }
};
const handleAsyncError = () => {
  //异步错误无法被trycatch捕获;
  try {
    setTimeout(() => {
      // undefined.map();
    }, 0);
  } catch (error) {
    console.log(error, "-----异步错误-----");
  }
};
const handlePromiseError = (val: number) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val === 2) {
        resolve("成功");
      } else {
        reject("失败");
      }
    });
  });
  p.then((res) => {
    console.log({ res });
  }).catch((err) => {
    console.log({ err });
  });
  Promise.reject("promise error");
};
</script>
<style lang="scss" scoped></style>
