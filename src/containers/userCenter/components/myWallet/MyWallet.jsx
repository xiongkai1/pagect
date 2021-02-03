// 个人中心系统-我的钱包页
import React, { Component } from 'react';
import styles from './myWallet.less';
import { Tabs } from 'antd';
import WalletInfo from './components/walletInfo/WalletInfo';
import WithdrawInfo from './components/withdrawInfo/WithdrawInfo';
import RechargeInfo from './components/rechargeInfo/RechargeInfo';
import WalletManagement from './components/walletManagement/WalletManagement';

const { TabPane } = Tabs;
export default class MyWallet extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '钱包情况',
                component: WalletInfo
            },
            {
                key: '2',
                text: '我要提现',
                component: WithdrawInfo
            },
            {
                key: '3',
                text: '我要充值',
                component: RechargeInfo
            },
            {
                key: '4',
                text: '账户管理',
                component: WalletManagement
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myWallet}>
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

