
import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 热门推荐列表
 * @param {*} data 
 */
export function hotList(data) {
    return http({
        url: '/shopping-center/videoHomePage/hotList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 视频分类列表
 * @param {*} data 
 */
export function videoClassificationList(data) {
    return http({
        url: '/shopping-center/videoHomePage/videoClassificationList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 最新入驻商家
 * @param {*} data 
 */
export function videoNewEntrantsList(data) {
    return http({
        url: '/shopping-center/videoHomePage/videoNewEntrantsList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 视频拍摄手法列表
 * @param {*} data 
 */
export function videoShotList(data) {
    return http({
        url: '/shopping-center/videoHomePage/videoShotList',
        method: HttpMethod.GET,
        params: data
    });
}