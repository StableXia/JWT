import axios from 'axios';
import { ElMessage } from 'element-plus';
import { getToken } from '../utils';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;

  return config;
});

instance.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    ElMessage.error(res.data.message);
    return Promise.reject(res);
  }
  return res.data;
});

export default instance;
