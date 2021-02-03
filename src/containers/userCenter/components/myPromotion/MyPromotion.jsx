// 推广二维码页
import React, { Component } from 'react';
import styles from './myPromotion.less';
import { Tabs } from 'antd';
import MyPromotionCode from './components/myPromotionCode/MyPromotionCode';
import PromotionCodeForMe from './components/promotionCodeForMe/PromotionCodeForMe';

const { TabPane } = Tabs;
export default class MyPromotion extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '我的推广码',
                component: MyPromotionCode
            },
            {
                key: '2',
                text: '为我制作的推广码',
                component: PromotionCodeForMe
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myPromotion}>
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

