import axios from 'axios';

axios.defaults.baseURL = '';

const passCode = 200;

/**
 * 异步请求拦截器
 */
axios.interceptors.request.use(config => {
  return config;
}, err => Promise.reject(err));

/** 
 * 异步响应拦截器
 */
axios.interceptors.response.use(response => {
  let rspData = response.data;
  if (rspData.code == passCode) {
    return Promise.resolve(rspData.data);
  }
  return Promise.resolve(response);

}, err => Promise.reject(err));

export default axios;
