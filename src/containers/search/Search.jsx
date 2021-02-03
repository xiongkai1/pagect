import styles from './search.less';
import React, { Component } from 'react';
import cls from 'classnames';
import { Input } from 'antd';
import SearchHeader from 'Components/searchHeader/SearchHeader';
import HomeFooter from 'Components/homeFooter/HomeFooter';
import FontSearch from './fontSearch/FontSearch';
import ImageSearch from './imageSearch/ImageSearch';
import VideoSearch from './videoSearch/VideoSearch';
import DesignMaterialSearch from './designMaterialSearch/DesignMaterialSearch';
import OfficeDocumentSearch from './officeDocumentSearch/OfficeDocumentSearch';
import MusicSearch from './musicSearch/MusicSearch';
import FoundPage from '../home/foundPage/FoundPage';
import ShopKepperSearch from './shopKepperSearch/ShopKepperSearch';

const Searchs = Input.Search;
export default class Search extends Component {
    constructor(props) {
        super(props);
        let defaultKey = this.props.match.params.key;
        this.state = {
            activeKey: Number(defaultKey) || 1,
            menuInfo: [
                {
                    key: 1,
                    text: '字体',
                    component: FontSearch
                },
                {
                    key: 2,
                    text: '图片',
                    component: ImageSearch
                },
                {
                    key: 3,
                    text: '视频',
                    component: VideoSearch
                },
                {
                    key: 4,
                    text: '设计素材',
                    component: DesignMaterialSearch
                },
                {
                    key: 5,
                    text: '办公文档',
                    component: OfficeDocumentSearch
                },
                {
                    key: 6,
                    text: '音乐',
                    component: MusicSearch
                },
                {
                    key: 7,
                    text: '发现',
                    component: FoundPage
                },
                {
                    key: 8,
                    text: '店主',
                    component: ShopKepperSearch
                }
            ]
        };
    }
    changeActiveKey = (key) => {
        this.setState({
            activeKey: key
        });
    };
    render() {
        let { menuInfo, activeKey } = this.state;
        return (
            <div className={styles.searchBox}>
                <SearchHeader/>
                <div className={styles.container}>
                    <div className={styles.searchBox}>
                        <div className={styles.inputBox}>
                            <div className={styles.searchInput}>
                                <Searchs
                                    placeholder={'(请输入关键字)'}
                                />
                            </div>
                            <button className={styles.wantOpenShop}>我要开店</button>
                        </div>
                        <div className={styles.typeBox}>
                            {
                                menuInfo.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, activeKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeActiveKey(item.key)}
                                        >
                                            {item.text}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.componentBox}>
                            {
                                menuInfo.map(item => {
                                    return (
                                        <>
                                        {activeKey === item.key && <item.component key={item.key} props={{ ...this.props }}/>}
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <HomeFooter/>
            </div>
        );
    }
}