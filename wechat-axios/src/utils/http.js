import {getStorageSync} from 'remax/wechat';
// 需要注意的是这点，axios引用的axios.min.js而不是官网文档中的axios
import axios from 'axios/dist/axios.min';
import mpAdapter from "axios-miniprogram-adapter";

/***
 * 使用process.env.NODE_ENV判断开发或者生产环境
 * 'http://127.0.0.1:8008/api' 为你开发的服务器地址'https://remaxjs.org/api'为你线上的地址
 * 其实使用'axios-miniprogram-adapter'的原理是使用了axios的adapter作为桥接,所以我们需要配置一下adapter
 * 需要注意一下的是wechat和toutiao的小程序都不支持patch方法，所以不要在axios-miniprogram-adapter中使用patch方法
 */
const baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8008/api' : 'https://remaxjs.org/api';
const service = axios.create({
    adapter: mpAdapter,
    baseURL
});

// http request 拦截器
service.interceptors.request.use(
    config => {
        try {
            let value = getStorageSync('token');
            let {token} = value;
            if (value) {
                config.headers.token = token;
            }
        } catch (e) {
            // Do something when catch error
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http response 拦截器
service.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(err);
    }
);
export default service;
