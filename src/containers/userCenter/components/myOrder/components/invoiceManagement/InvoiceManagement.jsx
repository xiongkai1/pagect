import React, { Component } from 'react';
import styles from './invoiceManagement.less';
import { Tabs } from 'antd';
import InvoiceInfo from './components/invoiceInfo/InvoiceInfo';
import SendAddress from './components/sendAddress/SendAddress';
import ElectronicAddress from './components/electronicAddress/ElectronicAddress';

const { TabPane } = Tabs;
export default class InvoiceManagement extends Component {
    state ={
        tabInfo: [
            {
                key: '1',
                text: '发票信息',
                component: InvoiceInfo
            },
            {
                key: '2',
                text: '寄送地址',
                component: SendAddress
            },
            {
                key: '3',
                text: '电子地址',
                component: ElectronicAddress
            }
        ],
        activeKey: '1'
    }
    changeActiveKey = (key) => {
        this.setState({
            activeKey: key
        });
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.invoiceManagement} >
                <Tabs defaultActiveKey={activeKey} onChange={this.changeActiveKey} activeKey={activeKey}>
                    {
                        tabInfo.map(item => {
                            return (
                                <TabPane tab={item.text} key={item.key}>
                                    <item.component changeParenrActiveKey={this.changeActiveKey}/>
                                </TabPane>
                            );
                        })
                    }
                </Tabs>
            </div>
        );
    }
}
