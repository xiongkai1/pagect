import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 商品类型分类
 * @param {*} data 
 */
export function commodityClassification(data) {
    return http({
        url: '/shopping-center/classification/commodityClassification',
        method: HttpMethod.GET,
        params: data
    });
}