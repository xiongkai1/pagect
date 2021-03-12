import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 商品id查询
 */
// 通过 post data 传参
export function shopCommodityIdQuery(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopCommodityIdQuery',
        method: HttpMethod.GET,
        params: {
            data
        }
    });
}
// 店铺商品信息分页查询
export function shopCommodityList(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopCommodityList',
        method: HttpMethod.GET,
        params: data
            
    });
}

/**
 * 上下架商品
 * @param {*} data 
 */
export function shopCommodityUpAndDownFrame(data) {
    return prepare({
        url: '/shopping-center/commodityinfo/shopCommodityUpAndDownFrame',
        method: HttpMethod.PUT,
        params: {
            data
        }
    });
}

/**
 * 店铺商品添加(字体)
 * @param {*} data 
 */
export function shopFontUpload(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopFontUpload',
        method: HttpMethod.POST,
        data
    });
}
/* 
* 店铺商品添加(图片)
* @param {*} data 
*/
export function shopPictureUpload(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopPictureUpload',
        method: HttpMethod.POST,
        data
    });
}

/**
 * 店铺商品添加(视频)
 * @param {*} data 
 */
export function shopVideoUpload(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopVideoUpload',
        method: HttpMethod.POST,
        data
    });
}

/**
 * 店铺商品添加(办公文档)
 * @param {*} data 
 */
export function shopOfficeUpload(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopOfficeUpload',
        method: HttpMethod.POST,
        data
    });
}

/**
 * 店铺商品添加(设计元素)
 * @param {*} data 
 */
export function shopDesignMaterialUpload(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopDesignMaterialUpload',
        method: HttpMethod.POST,
        data
    });
}

/**
 * 店铺商品添加(音乐)
 * @param {*} data 
 */
export function shopMusicUpload(data) {
    return http({
        url: '/shopping-center/commodityinfo/shopMusicUpload',
        method: HttpMethod.POST,
        data
    });
}

