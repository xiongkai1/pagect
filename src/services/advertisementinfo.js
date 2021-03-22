import http, { prepare } from 'Utils/http';
import { HttpMethod, API } from 'Constants/enum';

// 添加投放广告
export function addAdvertisement(data) {
    return http({
        url: '/shopping-center/advertisementinfo/addAdvertisement',
        method: HttpMethod.GET,
        params: data
    });
}

// 查询广告商品类型
export function advertisementExhibition(data) {
    return http({
        url: '/shopping-center/advertisementinfo/advertisementExhibition',
        method: HttpMethod.GET,
        params: data
    });
}

// 商品广告投放列表
export function advertisementList(data) {
    return http({
        url: '/shopping-center/advertisementinfo/advertisementList',
        method: HttpMethod.GET,
        params: data
    });
}

// 商品列表
export function commodityListAll(data) {
    return http({
        url: '/shopping-center/advertisementinfo/commodityList',
        method: HttpMethod.GET,
        params: data
    });
}

// 投放端口选择
export function dropPortSelection(data) {
    return http({
        url: '/shopping-center/advertisementinfo/dropPortSelection',
        method: HttpMethod.GET,
        params: data
    });
}

// 查询广告价格
export function queryAdvertisingPrice(data) {
    return http({
        url: '/shopping-center/advertisementinfo/queryAdvertisingPrice',
        method: HttpMethod.GET,
        params: data
    });
}
