import axios from 'axios'

// 根据不同环境设置 API 基础 URL
const baseURL = import.meta.env.VITE_API_BASE_URL

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL, // 设置基础 URL
  timeout: 10000, // 请求超时设置
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么，例如添加 token
    // config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做处理
    return response.data
  },
  (error) => {
    // 对响应错误做处理
    return Promise.reject(error)
  },
)

export default axiosInstance
