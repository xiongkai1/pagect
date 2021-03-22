import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 字体编码数字列表
 * @param {*} data 
 */
export function fontCodeNumberList(data) {
    return http({
        url: '/shopping-center/fontHomePage/fontCodeNumberList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 字体语系列表
 * @param {*} data 
 */
export function fontLanguageFamilyList(data) {
    return http({
        url: '/shopping-center/fontHomePage/fontLanguageFamilyList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 最新入驻商家
 * @param {*} data 
 */
export function fontNewEntrantsList(data) {
    return http({
        url: '/shopping-center/fontHomePage/fontNewEntrantsList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 字体风格列表
 * @param {*} data 
 */
export function fontStyleList(data) {
    return http({
        url: '/shopping-center/fontHomePage/fontStyleList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 字体类型列表
 * @param {*} data 
 */
export function fontTypeList(data) {
    return http({
        url: '/shopping-center/fontHomePage/fontTypeList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 热门推荐列表
 * @param {*} data 
 */
export function hotList(data) {
    return http({
        url: '/shopping-center/fontHomePage/hotList',
        method: HttpMethod.GET,
        params: data
    });
}