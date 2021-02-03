// 我的动态页
import React, { Component } from 'react';
import styles from './myDynamic.less';
import { Tabs } from 'antd';
import AddLike from './components/addLike/AddLike';
import FoucsOn from './components/foucsOn/FoucsOn';
import GiveReward from './components/giveReward/GiveReward';
import Forwarding from './components/forwarding/Forwarding';
import Collection from './components/collection/Collection';
import DownloadPage from './components/downloadPage/DownloadPage';
import ToReport from './components/toReport/ToReport';
import IntegralPage from './components/integralPage/IntegralPage';
import FootprintPage from './components/footprintPage/FootprintPage';

const { TabPane } = Tabs;
export default class MyDynamic extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '点赞',
                component: AddLike
            },
            {
                key: '2',
                text: '关注',
                component: FoucsOn
            },
            {
                key: '3',
                text: '打赏',
                component: GiveReward
            },
            {
                key: '4',
                text: '转发',
                component: Forwarding
            },
            {
                key: '5',
                text: '收藏',
                component: Collection
            },
            {
                key: '6',
                text: '下载',
                component: DownloadPage
            },
            {
                key: '7',
                text: '举报',
                component: ToReport
            },
            {
                key: '8',
                text: '积分',
                component: IntegralPage
            },
            {
                key: '9',
                text: '足迹',
                component: FootprintPage
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myDynamic}>
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
    