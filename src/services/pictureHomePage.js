
import http, { prepare } from 'Utils/http';
import { HttpMethod } from 'Constants/enum';

/**
 * 热门推荐列表
 * @param {*} data 
 */
export function hotList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/hotList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片动物昆虫列表
 * @param {*} data 
 */
export function pictureAnimalList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureAnimalList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片建筑列表
 * @param {*} data 
 */
export function pictureArchitectureList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureArchitectureList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片植物列表
 * @param {*} data 
 */
export function pictureBotanyList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureBotanyList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片商务办公列表
 * @param {*} data 
 */
export function pictureBusinessAffairsList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureBusinessAffairsList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片人物形象列表
 * @param {*} data 
 */
export function pictureCharacterList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureCharacterList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片餐饮美食列表
 * @param {*} data 
 */
export function pictureDeliciousFoodList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureDeliciousFoodList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片教育文化列表
 * @param {*} data 
 */
export function pictureEducationList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureEducationList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片节日节气列表
 * @param {*} data 
 */
export function pictureFestivalList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureFestivalList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片金融科技列表
 * @param {*} data 
 */
export function pictureFinanceList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureFinanceList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片生活方式列表
 * @param {*} data 
 */
export function pictureLifeList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureLifeList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片生活方式列表
 * @param {*} data 
 */
export function pictureMedicalCareList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureMedicalCareList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片自然美景列表
 * @param {*} data 
 */
export function pictureNaturalList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureNaturalList',
        method: HttpMethod.GET,
        params: data
    });
}

/**
 * 图片生活方式列表
 * @param {*} data 
 */
export function pictureNewEntrantsList(data) {
    return http({
        url: '/shopping-center/pictureHomePage/pictureNewEntrantsList',
        method: HttpMethod.GET,
        params: data
    });
}

