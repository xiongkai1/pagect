import React, { Component } from 'react';
import styles from './fontPage.less';
import cls from 'classnames';
import CommonPart from '../components/commonPart/CommonPart';
import NewArrival from '../components/newArrival/NewArrival';
import HotRecommendation from '../components/newArrival/HotRecommendation';
import { Link } from 'react-router-dom';
import { Row, Col, Carousel, Select, Input } from 'antd';
import { SEARCH_OPTION } from '../../../constants/common';

const { Search } = Input;
const { Option } = Select;
export default class FontsPage extends Component {
    state = {
        commontPartList: [
            { key: 1, imgurl: require('../images/xinanFonts.png'),
                title: '心安字库',
                introduceList: [
                    { id: 1, introduce: '心安用字，字用心安' },
                    { id: 2, introduce: '心安字库，为您提供安心好字' }] },
            { key: 2, imgurl: require('../images/empower.png'),
                title: '正版授权',
                introduceList: [
                    { id: 1, introduce: '版权保障，即买即售' },
                    { id: 2, introduce: '正版授权，为你保驾护航' }] },
            { key: 3, imgurl: require('../images/moreFonts.png'),
                title: '海量字源',
                introduceList: [{ id: 1, introduce: '一次购买，无限更新' },
                    { id: 2, introduce: '让您安心畅游字库海洋' }] }
        ],
        hotActiveKey: 1,
        hotTypeTitle: [
            { key: 1, title: '最热搜索' },
            { key: 2, title: '最受欢迎(收藏数)' },
            { key: 3, title: '平台推荐' }
        ],
        fontTypeTitle: [
            { key: 1, title: '全体' },
            { key: 2, title: '黑体' },
            { key: 3, title: '魏碑' },
            { key: 4, title: '全体' },
            { key: 5, title: '黑体' },
            { key: 6, title: '魏碑' },
            { key: 7, title: '全体' },
            { key: 8, title: '黑体' },
            { key: 9, title: '魏碑' },
            { key: 10, title: '全体' },
            { key: 11, title: '黑体' },
            { key: 12, title: '魏碑' }
        ],
        fontList: [
            { key: 1, value: require('../../../images/font1.png') },
            { key: 2, value: require('../../../images/font2.png') },
            { key: 3, value: require('../../../images/font3.png') },
            { key: 4, value: require('../../../images/font4.png') }
        ],
        fontList2: [
            { key: 1, value: require('../../../images/font5.png') },
            { key: 2, value: require('../../../images/font6.png') },
            { key: 3, value: require('../../../images/font7.png') },
            { key: 4, value: require('../../../images/font8.png') }
        ],
        fontList3: [
            { key: 1, value: require('../../../images/font9.png') },
            { key: 2, value: require('../../../images/font10.png') },
            { key: 3, value: require('../../../images/font11.png') },
            { key: 4, value: require('../../../images/font12.png') }
        ],
        storeList: [
            { id: 1, name: '字体厂家' }
        ]
    }
    changeHotActiveKey =  (key) => {
        this.setState({
            hotActiveKey: key
        });
    }
    onSearch = (value) => {
        window.location.href = '/search';
    }
    render() {
        let { commontPartList, hotActiveKey, hotTypeTitle, fontList, fontList2, fontList3, fontTypeTitle, storeList } = this.state;
        return (
            <div className={styles.fontsPage}>
                <div className={styles.topBox}>
                    <Carousel autoplay className={styles.carousel}>
                        <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner1.png')}/>
                        </div>
                        <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner2.png')}/>
                        </div>
                        <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner3.png')}/>
                        </div>
                    </Carousel>
                    <div className={styles.topSelectBox}>
                        <Select
                            defaultValue={'字体'}
                        >
                            {
                                SEARCH_OPTION.map(item => {
                                    return <Option key={item.key} value={item.value}>{item.value}</Option>;
                                })
                            }
                        </Select>
                        <Search
                            placeholder={'(请输入关键字)'}
                            onSearch={() => this.onSearch()}
                        />
                    </div>
                </div>
                <div className={styles.populationIntroduceBox}>
                    <CommonPart datas={commontPartList}></CommonPart>
                </div>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>自营入口</span>
                        <span className={styles.titleEnglish}>ZIYINGRUKOU</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.selfSupport}>自营专区入口</div>
                    </div>
                </div>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>热门推荐</span>
                        <span className={styles.titleEnglish}>REMENTUIJIAN</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.classification}>
                            {
                                hotTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeHotActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                            <span className={styles.more}>更多</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.value}/>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </div>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>字体类型</span>
                        <span className={styles.titleEnglish}>ZITILEIXING</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.classification}>
                            {
                                fontTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeHotActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                            <span className={styles.more}>更多</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontList2.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                    <div className={styles.fontItemBox}>
                                                        <img width="100%" height="100%" src={item.value}/>
                                                    </div>
                                                </Link>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </div>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>字体语系</span>
                        <span className={styles.titleEnglish}>ZITIYUXI</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.classification}>
                            {
                                fontTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeHotActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                            <span className={styles.more}>更多</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontList3.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.value}/>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </div>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>风格</span>
                        <span className={styles.titleEnglish}>FENGGE</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.classification}>
                            {
                                fontTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeHotActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                            <span className={styles.more}>更多</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.value}/>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </div>
                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>字体编码/字数</span>
                        <span className={styles.titleEnglish}>ZITIBIANMA/ZISHU</span>
                    </div>
                    <div className={styles.itemContent}>
                        <div className={styles.classification}>
                            {
                                fontTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeHotActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                            <span className={styles.more}>更多</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontList3.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.value}/>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </div>
                <NewArrival storeList={storeList}></NewArrival>
                <HotRecommendation typeActiveKey={2}></HotRecommendation>
            </div>
        );
    }
}
