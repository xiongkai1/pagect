// 店铺系统-店铺排行榜页
import React, { Component } from 'react';
import styles from './shopRank.less';
import { Tabs } from 'antd';
import MyShopRank from './components/myShopRank/MyShopRank';

const { TabPane } = Tabs;
export default class ShopRank extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '排行榜',
                component: MyShopRank
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.shopRank}>
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

