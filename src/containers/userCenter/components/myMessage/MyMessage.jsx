// 我的消息页
import React, { Component } from 'react';
import styles from './myMessage.less';
import { Tabs } from 'antd';
import SystemMessage from './components/systemMessage/SystemMessage';
import PersonalMessage from './components/personalMessage/PersonalMessage';
import FeedbackMessage from './components/feedbackMessage/FeedbackMessage';

const { TabPane } = Tabs;
export default class MyMessage extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '系统消息',
                component: SystemMessage
            },
            {
                key: '2',
                text: '我的私信',
                component: PersonalMessage
            },
            {
                key: '3',
                text: '举报反馈信息',
                component: FeedbackMessage
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.myMessage}>
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

