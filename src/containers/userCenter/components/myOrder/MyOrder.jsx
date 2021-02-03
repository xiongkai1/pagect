import React, { Component } from 'react';
import styles from './myOrder.less';
import { Tabs } from 'antd';
import OrderInfo from './components/orderInfo/OrderInfo';
import AgentOrder from './components/agentOrder/AgentOrder';
import ShopOrder from './components/shopOrder/ShopOrder';
import InvoiceManagement from './components/invoiceManagement/InvoiceManagement';

const { TabPane } = Tabs;
export default class MyOrder extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '订单信息',
                component: OrderInfo
            },
            {
                key: '2',
                text: '代理商订单',
                component: AgentOrder
            },
            {
                key: '3',
                text: '店铺订单',
                component: ShopOrder
            },
            {
                key: '4',
                text: '发票管理',
                component: InvoiceManagement
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myOrder}>
                <Tabs defaultActiveKey={activeKey}>
                    {
                        tabInfo.map(item => {
                            return (
                                <TabPane tab={item.text} key={item.key}>
                                    <item.component activeKey={activeKey}/>
                                </TabPane>
                            );
                        })
                    }
                </Tabs>
            </div>
        );
    }
}
