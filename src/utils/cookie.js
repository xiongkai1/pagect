/*
 * @Description: 
 * @Author: wangc
 * @LastEditors: wangc
 * @Date: 2020-08-20 10:22:10
 * @LastEditTime: 2020-08-21 09:28:24
 */
import Cookies from 'js-cookie';
import { COOKIE_PREFIX } from 'Constants/common';

const CookieProxy = {
    set(name, value, options) {
        return Cookies.set(COOKIE_PREFIX + name, value, options);
    },
    get(name) {
        return Cookies.get(COOKIE_PREFIX + name);
    },
    remove(name) {
        return Cookies.remove(COOKIE_PREFIX + name);
    }
};

export default CookieProxy;