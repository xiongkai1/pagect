// 申请成为页  我要晋升不写在tab里只做跳转
import React, { Component } from 'react';
import styles from './applyToBe.less';
import { Tabs } from 'antd';
import ApplyForOpen from './components/applyForOpen/ApplyForOpen';

const { TabPane } = Tabs;
export default class ApplyToBe extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '申请开通',
                component: ApplyForOpen
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.applyToBe}>
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

