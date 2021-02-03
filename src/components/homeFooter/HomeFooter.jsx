import styles from './homeFooter.less';
import React from 'react';

/**
 * @desc 页面底部组件
 */
export default function HomeFooter() {

    return (
        <div className={styles.homeFooter}>
            <div className={styles.footerTopBox}>
                <div className={styles.logoBox}>
                    <img width="165px" height="50px" src={require('./images/footerLogo.png')}/>
                    <span className={styles.introduceText}>心安元素，一款字体、图片、音频、视频和设计元素的版权交易平台！
                    </span>
                </div>
                <div className={styles.footerTopRight}>
                    <div className={styles.openShopBox}>
                        <span className={styles.openShopping}>我要开店》</span>
                        <span className={styles.contactText}>联系</span>
                        <span className={styles.contactInformation}>0731-00000000</span>
                        <span className={styles.contactInformation}>18908478801</span>
                        <span className={styles.contactInformation}>QQ:50882688</span>
                        <span className={styles.contactInformation}>50882688@qq.com</span>
                    </div>
                    <div className={styles.topAbout}>
                        <div className={styles.itemBox}>
                            <span className={styles.contactText}>问题说明</span>
                            <span className={styles.contactInformation}>常见问题</span>
                            <span className={styles.contactInformation}>购买问题</span>
                            <span className={styles.contactInformation}>代理问题</span>
                            <span className={styles.contactInformation}>入驻</span>
                            <span className={styles.contactInformation}>下载</span>
                            <span className={styles.contactInformation}>版权</span>
                        </div>
                        <div className={styles.itemBox}>
                            <span className={styles.contactText}>商务合作</span>
                            <span className={styles.contactInformation}>意见反馈</span>
                            <span className={styles.contactInformation}>在线客服</span>
                            <span className={styles.contactInformation}>加入心安元素</span>
                            <span className={styles.contactInformation}>联系心安元素</span>
                            <span className={styles.contactInformation}>合作客户</span>
                        </div>
                        <div className={styles.itemBox}>
                            <span className={styles.contactText}>心安元素</span>
                            <span className={styles.contactInformation}>关于心安元素</span>
                            <span className={styles.contactInformation}>公司新闻</span>
                            <span className={styles.contactInformation}>心安元素活动</span>
                            <span className={styles.contactInformation}>行业新闻</span>
                        </div>
                        <div className={styles.itemBox}>
                            <span className={styles.contactText}>关于心安元素</span>
                            <span className={styles.contactInformation}>心安元素公众号</span>
                            <span className={styles.contactInformation}>心安元素APP（安卓）</span>
                            <span className={styles.contactInformation}>心安元素APP（苹果）</span>
                            <span className={styles.contactInformation}>心安元素微博</span>
                            <span className={styles.contactInformation}>心安早语</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottomBox}>
                {/* <span className={styles.bootomTop}>心安元素集团 心安元素  心安字库  心安元素微博  心安小店</span> */}
                <span>©2020湖南心安元素数字科技有限公司 版权所有</span>
                <span>湘ICP备：2020022655号</span>
                <span>湘公网安备：31010502004420号</span>
            </div>
        </div>
    );
}