// 店铺系统-作品管理页
import React, { Component } from 'react';
import styles from './worksManagement.less';
import { Tabs } from 'antd';
import FontShop from './components/fontUploading/FontUploading';
import ImageShop from './components/imageUploading/ImageUploading';
import VideoShop from './components/videoUploading/VideoUploading';
import MaterialShop from './components/materialUploading/MaterialUploading';
import DocumentShop from './components/documentUploading/DocumentUploading';
import MusicShop from './components/musicUploading/MusicUploading';

const { TabPane } = Tabs;
export default class WorksManagement extends Component {
    state = {
        tabInfo: [
            {
                key: '1',
                text: '字体店',
                component: FontShop
            },
            {
                key: '2',
                text: '图片店',
                component: ImageShop
            },
            {
                key: '3',
                text: '视频店',
                component: VideoShop
            },
            {
                key: '4',
                text: '设计素材店',
                component: MaterialShop
            },
            {
                key: '5',
                text: '办公文档店',
                component: DocumentShop
            },
            {
                key: '6',
                text: '音乐店',
                component: MusicShop
            }
        ],
        activeKey: '1'
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.worksManagement}>
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

