// 店铺系统-我的店铺页
import React, { Component } from 'react';
import styles from './myShop.less';
import { Tabs } from 'antd';
import MyShopSystem from './components/myShopSystem/MyShopSystem';

const { TabPane } = Tabs;
export default class MyShop extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '我的店铺系统',
                component: MyShopSystem
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myShop}>
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

