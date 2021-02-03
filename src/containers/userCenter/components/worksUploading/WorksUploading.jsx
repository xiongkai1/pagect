// 店铺系统-上传作品页
import React, { Component } from 'react';
import styles from './worksUploading.less';
import { Tabs } from 'antd';
import FontUploading from './components/fontUploading/FontUploading';
import ImageUploading from './components/imageUploading/ImageUploading';
import VideoUploading from './components/videoUploading/VideoUploading';
import MaterialUploading from './components/materialUploading/MaterialUploading';
import DocumentUploading from './components/documentUploading/DocumentUploading';
import MusicUploading from './components/musicUploading/MusicUploading';

const { TabPane } = Tabs;
export default class WorksUploading extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '字体',
                component: FontUploading
            },
            {
                key: '2',
                text: '图片',
                component: ImageUploading
            },
            {
                key: '3',
                text: '视频',
                component: VideoUploading
            },
            {
                key: '4',
                text: '设计素材',
                component: MaterialUploading
            },
            {
                key: '5',
                text: '办公文档',
                component: DocumentUploading
            },
            {
                key: '6',
                text: '音乐',
                component: MusicUploading
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.worksUploading}>
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

