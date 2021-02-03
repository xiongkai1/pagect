import 'Images/favicon.ico';
import 'Styles/main.less';
import http from 'Utils/http';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { getToken } from 'Utils/auth';

// set http default options
http.settings({
    proxyPath: __DEV__ && '/proxy',     // 代理根路径
    isDev: __DEV__,                    // 显示请求,响应日志
    requestInterceptor(config) {
        const token = getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        
        return config;
    }
    // afterResponse(resolve, reject, response, options) {
    //     var { data, status } = response;
    //     const { showError } = options;
    //     switch (status) {
    //         case 200:
    //             if (data.code === 200) {
    //                 resolve(data);
    //             } 
    //             else if (data?.code === 5008) { // token 失效
    //                 message.error('登录已过期，请重新登录', () => {
    //                     location.href = `/login?callback=${encodeURIComponent(location.href)}`;
    //                 });
    //             } 
    //             else {
    //                 showError !== false && data.msg && message.error(data.msg);
    //                 reject(data);
    //             }
    //             break;
    //         default:   // throw a error.
    //             message.error('服务器请求失败');
    //             break;
    //     }
    // }
});

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);