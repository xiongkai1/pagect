import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 字体编码数字列表
 * @param {*} data 
 */
export function listProfit() {
    return http({
        url: '/shopping-center/dictItem/list',
        method: HttpMethod.GET,
        params: {
            'dictCode': 'PROFIT_SHARING'
        }

    });
}