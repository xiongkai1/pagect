import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';
import { getToken } from 'Utils/auth';

/**
 * 店铺列表(开通情况)
 * @param {*} data 
 */
export function selectShopInfoList(data) {
    return http({
        url: '/shopping-center/mallinfo/selectShopInfoList',
        method: HttpMethod.GET,
        headers: {
            token: getToken()
        },
        params: data
    });
}