// 导入WxRequest库和基础URL配置
import WxRequest from 'wx-request-plus';
import {baseURL} from "./apiUrl"

/**
 * 创建HTTP请求实例
 * 配置基础URL、超时时间和默认请求头
 */
// 推荐方式: 使用静态工厂方法创建实例
const http = WxRequest.create({
  baseURL: baseURL, // 设置基础URL
  timeout: 5000, // 设置请求超时时间为5秒
  headers: {
    'Content-Type': 'application/json' // 设置默认请求头
  }
});

/**
 * 请求拦截器
 * 在发送请求前对请求配置进行处理
 */
http.interceptors.request.use(
  config => {
    // 添加token到请求头
    config.headers = { 
      ...config.headers,
      'Authorization': `Bearer ${wx.getStorageSync('token')}` // 从本地存储获取token并添加到Authorization头
    };
    // 对GET请求默认启用缓存
    if (config.method?.toUpperCase() === 'GET' && config.cache === undefined) {
      config.cache = true; // 为GET请求启用缓存
    }
    return config; // 返回处理后的配置
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 * 在接收到响应后对响应数据进行处理
 */
http.interceptors.response.use(
  response => {
    console.log(response,12345)
    // 如果响应状态码为401(未授权)，则跳转到登录页面
    if(response.data?.code==401) {
      wx.redirectTo({
        url: '/pages/login/login', // 跳转到登录页面
      })
      return
    }
    return response.data // 返回响应数据
  },
  error => {
    console.log(error,666)
    // 根据错误类型处理不同错误
    switch(error.type) {
      case ErrorType.TIMEOUT:
        console.error('请求超时', error.config.url); // 请求超时错误
        break;
      case ErrorType.NETWORK:
        console.error('网络连接错误', error.config.url); // 网络连接错误
        break;
      case ErrorType.SERVER:
        console.error('服务器错误', error.status, error.config.url); // 服务器错误
        break;
      case ErrorType.CLIENT:
        console.error('客户端错误', error.status, error.config.url); // 客户端错误
        break;
    }
    
    // 继续抛出错误供调用方处理
    return Promise.reject(error);
  }
);

// 导出配置好的HTTP请求实例
export default http;