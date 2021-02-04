import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 获取个人信息接口
 * @param {*} data 
 * @Param cityId 城市id
 * @param provinceId 省ID

 */
export function physicalAddress(data) {
    return http({
        url: '/shopping-center/useraddress/physicalAddress',
        method: HttpMethod.GET,
        params: data
    });
}

