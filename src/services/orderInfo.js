import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';
import { getToken } from 'Utils/auth';

/**
 * 创建支付订单
 * @param {*} data 
 */
export function create(data) {
    return http({
        url: '/shopping-center/orderInfo/create',
        method: HttpMethod.POST,
        headers: {
            token: getToken()
        },
        data
    });
}