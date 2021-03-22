import React, { Component } from 'react';
import styles from './newArrival.less';
import { Row, Col } from 'antd';
import cls from 'classnames';

export default class FontsPage extends Component {
    state = {
        fontList: [
            { key: 1, value: '' },
            { key: 2, value: '' },
            { key: 3, value: '' },
            { key: 4, value: '' },
            { key: 5, value: '' },
            { key: 6, value: '' },
            { key: 7, value: '' },
            { key: 8, value: '' }
        ],
        typeTitle: [
            { key: 1, title: '全部' },
            { key: 2, title: '字体' },
            { key: 3, title: '图片' },
            { key: 4, title: '视频' },
            { key: 5, title: '设计元素' },
            { key: 6, title: '办公文档' },
            { key: 7, title: '音乐' },
            { key: 8, title: '店主' }
        ],
        goodsList: [
            { key: 1, value: '' },
            { key: 2, value: '' },
            { key: 3, value: '' },
            { key: 4, value: '' }
        ],
        typeActiveKey: 1
    }
    changeTypeActiveKey =  (key) => {
        this.setState({
            typeActiveKey: key
        });
    }
    render() {
        let { typeActiveKey } = this.props;
        let { typeTitle, goodsList } = this.state;
        // let { datas } = this.props;
        return (
            <div className={styles.newArrival}>
                <div className={styles.pageItem}>
                    <div className={styles.recommendationTitle}>
                        <div className={styles.typeTitle}>
                            <span className={styles.platform}>平台热荐</span>
                            {
                                typeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeTitleItem, typeActiveKey === item.key ? styles.activeTitleItem : null)}
                                            onClick={() => this.changeTypeActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <span className={styles.here}>我也要出现在这里</span>
                    </div>
                    <div className={styles.goodsBox}>
                        <Row gutter={[16, 16]}>
                            {
                                goodsList.map(item => {
                                    return (
                                        <Col key={item.key} className={styles.gutterBox} span={6}>
                                            <div className={styles.goodsItemBox}>
                                                <div className={styles.goodsImg}></div>
                                                <div className={styles.goodsInfo}>
                                                    <div className={styles.leftInfo}>
                                                        <div className={styles.goodsStoreAvatar}></div>
                                                        <div className={styles.followStore}>+关注</div>
                                                    </div>
                                                    <div className={styles.rightInfo}>
                                                        <span>商品标题标题商品标题标题</span>
                                                        <span className={styles.goodsPrice}>￥2000.00<span className={styles.discount}>优惠价</span></span>
                                                        <span>销量:92375</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
