import React, { Component } from 'react';
import styles from './orderDetail.less';
import TEST_IMG from 'Images/testImg.jpg';

export default class OrderDetail extends Component {
    render() {
        let { handleGoBack, orderType = 1 } = this.props; // orderType: 1我的订单  2代理商订单  3店铺订单
        return (
            <div className={styles.detailContainer}>
                <div className={styles.detailHeader}>
                    <div className={styles.backBtn} onClick={handleGoBack}>返回</div>
                    <div>订单信息</div>
                </div>
                <div className={styles.firstPart}>
                    <div className={styles.leftPart}>
                        <img src={TEST_IMG}/>
                    </div>
                    <div className={styles.centerPart}>
                        <div className={styles.prise}>
                            <div className={styles.currentPrise}>
                                ￥2500
                                { orderType === 2 ? <span>代理价</span> : <span>优惠价</span> }
                            </div>
                            <div className={styles.oldPrise}>
                                市场价￥
                                <span>3000</span>
                            </div>
                        </div>
                        <div className={styles.infoPart}>
                            <div className={styles.title}>产品信息</div>
                            <div className={styles.info}>
                                <div>
                                     ID: <span>T0821782374812</span>
                                </div>
                                <div>
                                     产品名称: <span>2宝</span>
                                </div>
                                <div>
                                     产品描述: <span>fuck off pls</span>
                                </div>
                                <div>
                                     产品大小: <span>18MB</span>
                                </div>
                                <div>
                                     产品格式: <span>JPG</span>
                                </div>
                                <div>
                                     产品时长: <span>/</span>
                                </div>
                                <div>
                                     产品类型: <span>图片</span>
                                </div>
                                <div>
                                     EXIF信息: <span>查看</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {orderType !== 2 && <div className={styles.rightPart}>
                        <div className={styles.infoPart}>
                            <div className={styles.info}>
                                <div>
                                     ID: <span>T0821782374812</span>
                                </div>
                                <div>
                                     授权牌样式下载: <span>下载</span>
                                </div>
                                <div>
                                     发票: <span>索要发票</span>
                                </div>
                                <div>
                                     产品区块链存取证明: <span>下载</span>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className={styles.secondPart}>
                    <div className={styles.centerPart}>
                        <div className={styles.infoPart}>
                            <div className={styles.title}>订单信息</div>
                            <div className={styles.info}>
                                <div>
                                     订单ID: <span>T0821782374812</span>
                                </div>
                                <div>
                                     订单时间: <span>2020-12-27 10:46:12</span>
                                </div>
                                <div>
                                     付款时间: <span>2020-12-27 10:46:12</span>
                                </div>
                                <div>
                                     支付方式: <span>微信扫描支付</span>
                                </div>
                                <div>
                                     购买数量: <span>1</span>
                                </div>
                                <div>
                                     付款金额: <span>8888.00</span>
                                </div>
                                <div>
                                     授权类型: <span>图-RF</span>
                                </div>
                                <div>
                                     授权时间: <span>1年</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {orderType !== 3 ? <div className={styles.thridPart}>
                    <div className={styles.centerPart}>
                        <div className={styles.infoPart}>
                            <div className={styles.title}>卖方信息</div>
                            <div className={styles.info}>
                                <div>
                                     店铺编号: <span>T0821782374812</span>
                                </div>
                                <div className={styles.shopName}>
                                 店铺名称: <span>呵呵</span> <div className={styles.focus}><span>+</span>关注TA</div> <span className={styles.toShop}>{'进入TA的店铺>>'}</span>
                                </div>
                                <div>
                                     开店时间: <span>2025年5月1日</span>
                                </div>
                                <div>
                                     所在区域: <span>北京</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :  <div className={styles.thridPart}>
                    <div className={styles.centerPart}>
                        <div className={styles.infoPart}>
                            <div className={styles.title}>个人信息</div>
                            <div className={styles.info}>
                                <div>
                                 买方ID: <span>T0821782374812</span>
                                </div>
                                <div>
                                名称: <span>滚</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoPart}>
                            <div className={styles.title}>店铺信息</div>
                            <div className={styles.info}>
                                <div>
                                 店铺编号: <span>T0821782374812</span>
                                </div>
                                <div className={styles.shopName}>
                                 店铺名称: <span>呵呵</span> <div className={styles.focus}><span>+</span>关注TA</div> <span className={styles.toShop}>{'进入TA的店铺>>'}</span>
                                </div>
                                <div>
                                 开店时间: <span>2025年5月1日</span>
                                </div>
                                <div>
                                 所在区域: <span>北京</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoPart}>
                            <div className={styles.title}>使用信息</div>
                            <div className={styles.info}>
                                <div>
                                 个人: <span>小明</span>
                                </div>
                                <div>
                                 公司信息: <span>呵呵有限公司（FHS67867858）</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
