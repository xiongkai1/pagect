import http, { prepare } from 'Utils/http';
import { HttpMethod, API } from 'Constants/enum';

/**
 * 首页字体相关接口
*/

/**
 * 字体编码数字列表
 * @param {*} data 
 * @param current 当前页码
 * @param size 一页显示条数
 * @param keywordSearch 关键字搜索条件
 * @param typeCode 查询具体类型
 * token 令牌
 */
export function fontCodeNumberList(data) {
    return http({
        url: '/shopping-center/fontHomePage/fontCodeNumberList',
        method: HttpMethod.GET,
        params: data
    });
}

