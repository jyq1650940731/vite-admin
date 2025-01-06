// 默认的接口地址，
export const baseURL = import.meta.env.MODE === "development" ? "/vel-dev-server" : "/vel-pro-server";
// 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
export const contentType = "application/json;charset=UTF-8";
// 最长请求时间
export const requestTimeout = 10000;
// 操作正常code，支持String、Array、int多种类型
export const successCode = [200, 0, "200", "0"];
// 数据状态的字段名称
export const statusName = "code";
// 状态信息的字段名称
export const messageName = "msg";

// intelligence(前端导出路由)和 all(后端导出路由)两种方式
export const authentication = "all";
