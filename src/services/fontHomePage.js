import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 字体编码数字列表
 * @param {*} data 
 */
export function fontCodeNumberList(data) {
    return http({
        url: '/shopping-center/classification/commodityClassification',
        method: HttpMethod.GET,
        params: data
    });
}