// 我的购物车页
import React, { Component } from 'react';
import styles from './shppingCart.less';
import { Tabs } from 'antd';
import GoodsInfo from './components/goodsInfo/GoodsInfo';
import CollectionGoods from './components/collectionGoods/CollectionGoods';

const { TabPane } = Tabs;
export default class ShoppingCart extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '全部商品',
                component: GoodsInfo
            },
            {
                key: '2',
                text: '我收藏的宝贝',
                component: CollectionGoods
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.shoppingCart}>
                <Tabs defaultActiveKey={activeKey}>
                    {
                        tabInfo.map(item => {
                            return (
                                <TabPane tab={item.text} key={item.key}>
                                    <item.component/>
                                </TabPane>
                            );
                        })
                    }
                </Tabs>
            </div>
        );
    }
}
