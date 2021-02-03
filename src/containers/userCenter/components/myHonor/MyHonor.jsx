// 我的荣誉页
import React, { Component } from 'react';
import styles from './myHonor.less';
import { Tabs } from 'antd';
import OpenHonor from './components/openHonor/OpenHonor';
import AgentHonor from './components/agentHonor/AgentHonor';
import StoreHonor from './components/storeHonor/StoreHonor';

const { TabPane } = Tabs;
export default class MyHonor extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '开通荣获',
                component: OpenHonor
            },
            {
                key: '2',
                text: '代理商荣誉',
                component: AgentHonor
            },
            {
                key: '3',
                text: '店铺荣誉',
                component: StoreHonor
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myHonor}>
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

