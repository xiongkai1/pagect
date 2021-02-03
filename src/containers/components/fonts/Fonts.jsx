import React, { Component } from 'react';
import styles from './fonts.less';
import { Button  } from 'antd';

export default class Fonts extends Component {
    render() {
        let { isSearch } = this.props;
        return (
            <div className={styles.goodsItemBox}>
                <div className={styles.leftBox}>
                    <div className={styles.goodsImage}>
                        <h2>作品封面</h2>
                    </div>
                    <div className={styles.goodsIntroduce}>
                        <div className={styles.goodsPriceBox}>
                            <div className={styles.nowPrice}>￥2000.00<span className={styles.priceIntroduce}>优惠价</span></div>
                            <div><span className={styles.oldPrice}>￥2800.00</span><span className={styles.priceIntroduce}>市场价</span></div>
                        </div>
                        <div className={styles.goodsInfoBox}>
                            <div className={styles.goodsName}>蝉羽巴比熊</div>
                            <div className={styles.goodsShowStyle}>
                                <span className={styles.styleItem}>数字:18975564203</span>
                                <span className={styles.styleItem}>字体类型:手写体</span>
                                <span className={styles.styleItem}>语系:中文</span>
                                <span className={styles.styleItem}>字数:6763</span>
                                <span className={styles.goodsDetails}>详情》</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.goodsRightBox}>
                    {
                        isSearch ? <div>
                            <div className={styles.storeInfoBox}>
                                <img className={styles.storeAvatar} src=""/>
                                <div className={styles.storeBox}>
                                    <span className={styles.follow}>+关注</span>
                                    <span>店小二名称</span>
                                </div>
                            </div>
                            <div className={styles.storeHonour}>荣誉</div>
                            <div className={styles.operationBox}>
                                <button>收藏</button>
                                <button>加入购物车</button>
                                <button>下载</button>
                            </div>
                        </div> :
                            <div>
                                <div className={styles.operationBox}>
                                    <img className={styles.imgCart}/>
                                    <img className={styles.imgDetails}/>
                                    <img className={styles.imgCollection}/>
                                    <img className={styles.imgDownload}/>
                                </div>
                                <Button type="primary" shape="round" size="large">
                                    下载
                                </Button>
                            </div>
                    }
                </div>
            </div>
        );
    }
}