import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 字体编码数字列表
 * @param {*} data 
 */
export function authorizedPrice(data) {
    return http({
        url: '/shopping-center/commoditypriceinfo/authorizedPrice',
        method: HttpMethod.GET,
        params: data
    });
}