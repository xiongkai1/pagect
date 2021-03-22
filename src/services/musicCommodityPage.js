import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 热门推荐列表
 * @param {*} data 
 */
export function hotList(data) {
    return http({
        url: '/shopping-center/musicCommodityPage/hotList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 音乐情感列表
 * @param {*} data 
 */
export function musicEmotionList(data) {
    return http({
        url: '/shopping-center/musicCommodityPage/musicEmotionList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 音乐乐器列表
 * @param {*} data 
 */
export function musicInstrumentsList(data) {
    return http({
        url: '/shopping-center/musicCommodityPage/musicInstrumentsList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 最新入驻商家
 * @param {*} data 
 */
export function musicNewEntrantsList(data) {
    return http({
        url: '/shopping-center/musicCommodityPage/musicNewEntrantsList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 音乐风格列表
 * @param {*} data 
 */
export function musicStyleList(data) {
    return http({
        url: '/shopping-center/musicCommodityPage/musicStyleList',
        method: HttpMethod.GET,
        params: data
    });
}

