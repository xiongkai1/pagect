import React, { Component } from 'react';
import styles from './newArrival.less';
import { Row, Col } from 'antd';
import cls from 'classnames';
import { Link } from 'react-router-dom';


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
        storeActiveKey: 1
    }
    changeTypeActiveKey =  (key) => {
        this.setState({
            typeActiveKey: key
        });
    }
    changeStoreActiveKey = (key) => {
        this.setState({
            storeActiveKey: key
        });
    }
    render() {
        let { storeList } = this.props;
        let { fontList, storeActiveKey } = this.state;
        // let { datas } = this.props;
        return (
            <div className={styles.newArrival}>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>最新入驻</span>
                        <span className={styles.titleEnglish}>ZUIXINRUZHU</span>
                        <span className={styles.wantStore}>我也要开店</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.classification}>
                            {
                                storeList.map(item => {
                                    return (
                                        <span
                                            key={item.id}
                                            className={cls(styles.typeItem, storeActiveKey === item.id ? styles.activeItem : null)}
                                            onClick={() => this.changeStoreActiveKey(item.id)}>
                                            {item.name}
                                        </span>
                                    );
                                })
                            }
                            <span className={styles.more}>更多</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Row gutter={[0, 16]}>
                                {
                                    fontList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.fontItemBox}>
                                                    <div className={styles.storeAvatar}></div>
                                                    <div className={styles.storeBox}>
                                                        <div className={styles.follow}>+关注</div>
                                                        <div className={styles.storeName}>卖图片的小姐姐到这里</div>
                                                        <div className={styles.storeAddressBox}>
                                                            <div className={styles.loction}>湖南长沙</div>
                                                            <span className={styles.goStore}>
                                                            <Link to={{ pathname: '/userCenter/16', state: { id: 1 } }}>
                                                                 店铺》
                                                           </Link>
                                                            </span>
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
            </div>
        );
    }
}
