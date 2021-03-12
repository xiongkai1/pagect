import http, { prepare, ContentType } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';
import { getToken } from 'Utils/auth';
import sendFile from '@sinoui/http-send-file';

// import reqwest from 'reqwest';y

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

/**
 * 获取分片id
 * @param {*} data 
 */
export function claimUploadId(data) {
    return http({
        url: '/shopping-center/oss/claimUploadId',
        method: HttpMethod.GET,
        headers: {
            token: getToken()
        },
        params: data
    });
}

/**
 * 获取分片地址
 */
export function completeMultipartUpload(data) {
    return http({
        url: '/shopping-center/oss/completeMultipartUpload',
        method: HttpMethod.GET,
        headers: {
            token: getToken()
        },
        params: data
    });
}

export function partUploader(data) {
    return http({
        url: '/shopping-center/oss/partUploader',
        method: HttpMethod.POST,
        // processData: null,        
        headers: {
            token: getToken()
        },
        data
    });
}
