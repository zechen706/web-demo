import axios from 'axios'
import qs from 'qs'
// import app from '../main';

const axiosWrap = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://siyi.hidongtv.com/' : '',
  // baseURL: 'http://siyi.hidongtv.com',
  headers: {
    // 'token': getQueryString('token')
    // 'Content-type': 'application/x-www-form-urlencoded'
  },
  timeout: 10000
  // 默认参数为json

  /* transformRequest: [function (data) {
      if (data instanceof FormData) {
        return data
      }

      // 转换 form data
      return qs.stringify(data)
    }] */

  // paramsSerializer: function (params) {
  //     /* 自定义链接参数解析方式（如果必要的话） */
  // }
})

/* 过滤请求 */
axiosWrap.interceptors.request.use((config) => {
  // loading()
  return config
})

/* 统一 过滤响应 */
axiosWrap.interceptors.response.use((result) => {
  return result.data
  // if (result.data.success) {
  //     return result.data.data
  // } else {
  //     app.$toast.center('网络异常');
  //     return Promise.reject()
  // }
}, err => {
  return Promise.reject(err)
})

export default axiosWrap
