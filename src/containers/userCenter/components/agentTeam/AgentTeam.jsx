// 代理系统-代理团队页
import React, { Component } from 'react';
import styles from './agentTeam.less';
import { Tabs } from 'antd';
import MyTeam from './components/myTeam/MyTeam';
import TeamSales from './components/teamSales/TeamSales';

const { TabPane } = Tabs;
export default class AgentTeam extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '我的团队',
                component: MyTeam
            },
            {
                key: '2',
                text: '团队销量',
                component: TeamSales
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.agentTeam}>
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

