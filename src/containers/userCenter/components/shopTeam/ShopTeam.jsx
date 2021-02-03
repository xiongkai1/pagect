// 店铺系统-店铺团队页
import React, { Component } from 'react';
import styles from './shopTeam.less';
import { Tabs } from 'antd';
import MyShopTeam from './components/myShopTeam/MyShopTeam';

const { TabPane } = Tabs;
export default class ShopTeam extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '我的店铺团队',
                component: MyShopTeam
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.shopTeam}>
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

