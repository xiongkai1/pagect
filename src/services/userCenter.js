import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 个人中心接口123
 */

export function addUser(user) {
    return http({
        url: '/user',
        method: HttpMethod.POST,
        data: {
            user
        }
    });
}

/**
 * 获取个人信息接口
 * @param {*} data 
 * @Param account 用户账号
 */
export function basicInformation(data) {
    return http({
        url: '/shopping-center/personalCenterData/basicInformation',
        method: HttpMethod.GET,
        params: data
    });
}
/**
 * 修改个人信息接口
 * @param {*} data 
 */
export function updBasicInformation(data) {
    return http({
        url: '/shopping-center/personalCenterData/updBasicInformation',
        method: HttpMethod.POST,
        data
    });
}

/**
 * 获取个人信息接口
 * @param {*} data 
 */
export function contactInformation(data) {
    return http({
        url: '/shopping-center/personalCenterData/contactInformation',
        method: HttpMethod.GET,
        params: data
    });
}

