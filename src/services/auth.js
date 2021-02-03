import http, { prepare } from 'Utils/http';
import { HttpMethod, API } from 'Constants/enum';

/**
 *  用户相关接口
*/

// 注册-手机验证-获取手机验证码
export function getPhoneCode(data) {
    return http({
        url: '/shopping-center/mallUser/selectPhone',
        method: HttpMethod.GET,
        params: data
    });
}

// 注册-手机验证-确认验证
export function phoneVerification(data) {
    return http({
        url: '/shopping-center/mallUser/codeVerification',
        method: HttpMethod.GET,
        params: data
    });
}

// 注册-基本验证-获取邮箱验证码
export function getEmailCode(data) {
    return http({
        url: '/shopping-center/mallUser/sendEmailCode',
        method: HttpMethod.GET,
        params: data
    });
}

// 注册-基本验证-确认验证/添加基本信息
export function addBaseInfo(data) {
    return http({
        url: '/shopping-center/mallUser/basicInformation',
        method: HttpMethod.POST,
        data
    });
}

// 登录-账户登录
export function accountLogin(data) {
    return http({
        url: '/shopping-center/mallUser/accountLogin',
        method: HttpMethod.GET,
        params: data
    });
}

