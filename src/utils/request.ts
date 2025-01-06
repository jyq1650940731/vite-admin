// const CODE_MESSAGE = {
//   200: "服务器成功返回请求数据",
//   201: "新建或修改数据成功",
//   202: "一个请求已经进入后台排队(异步任务)",
//   204: "删除数据成功",
//   400: "发出信息有误",
//   401: "用户没有权限(令牌失效、用户名、密码错误、登录过期)",
//   402: "令牌过期",
//   403: "用户得到授权，但是访问是被禁止的",
//   404: "访问资源不存在",
//   406: "请求格式不可得",
//   410: "请求资源被永久删除，且不会被看到",
//   500: "服务器发生错误",
//   502: "网关错误",
//   503: "服务不可用，服务器暂时过载或维护",
//   504: "网关超时",
// };
import axios from "axios";
import { requestTimeout, contentType } from "@/config";
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
});

//拦截请求
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

//拦截响应
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    //处理错误
    Promise.reject(new Error(error));
  },
);

export default instance;
