// 店铺系统-我要上广告页
import React, { Component } from 'react';
import styles from './onAdvertising.less';
import { Tabs } from 'antd';
import Advertising from './components/advertising/Advertising';
import PutOnAdvertising from './components/putOnAdvertising/PutOnAdvertising';

const { TabPane } = Tabs;
export default class OnAdvertising extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '我要上广告',
                component: Advertising
            },
            {
                key: '2',
                text: '投放中的广告',
                component: PutOnAdvertising
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.onAdvertising}>
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

