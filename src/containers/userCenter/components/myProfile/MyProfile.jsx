// 我的资料页
import React, { Component } from 'react';
import styles from './myProfile.less';
import { Tabs } from 'antd';
import BaseInfo from './components/baseInfo/BaseInfo';
import ContactInfo from './components/contactInfo/ContactInfo';
import AgentInfo from './components/agentInfo/AgentInfo';
import StoreInfo from './components/storeInfo/StoreInfo';
import BindingInfo from './components/bindingInfo/BindingInfo';
import VerifyInfo from './components/verifyInfo/VerifyInfo';

const { TabPane } = Tabs;
export default class MyProfile extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '基本信息',
                component: BaseInfo
            },
            {
                key: '2',
                text: '联系信息',
                component: ContactInfo
            },
            {
                key: '3',
                text: '代理商信息',
                component: AgentInfo
            },
            {
                key: '4',
                text: '店铺信息',
                component: StoreInfo
            },
            {
                key: '5',
                text: '绑定信息',
                component: BindingInfo
            },
            {
                key: '6',
                text: '验证信息',
                component: VerifyInfo
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myProfile}>
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
