import React, { Component } from 'react';
import styles from './fontPage.less';
import cls from 'classnames';
import CommonPart from '../components/commonPart/CommonPart';
import NewArrival from '../components/newArrival/NewArrival';
import HotRecommendation from '../components/newArrival/HotRecommendation';
import { Link } from 'react-router-dom';
import { Row, Col, Carousel, Select, Input, message } from 'antd';
import { SEARCH_OPTION } from '../../../constants/common';

import { commodityClassification } from 'Services/classification';
import { fontCodeNumberList, fontLanguageFamilyList, fontNewEntrantsList, fontStyleList, fontTypeList, hotList } from 'Services/fontHomePage';

const { Search } = Input;
const { Option } = Select;
export default class FontsPage extends Component {
    constructor() {
        super();
        commodityClassification({
            type: 1
        }).then(res => {
            if (res.data.code === 200) {
                let dataLog = res.data.data[0].children;
                this.setState({
                    fontTypeTitle: dataLog
                });
            } else {
                message.error(res.data.msg);
            }
        });

        fontCodeNumberList({
            current: 1,
            size: 4,
            typeCode: 1
        }).then(e => {
            
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    fontCodeNumber: dataList.data
                });

            }

        });

        fontLanguageFamilyList({
            current: 1,
            size: 4,
            typeCode: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    fontLanguageFamily: dataList.data
                });

            }
        });

        // 最新入驻商家
        fontNewEntrantsList().then(e => {

        });

        fontStyleList({
            current: 1,
            size: 4,
            typeCode: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    fontStyle1: dataList.data
                });

            }
        });

        fontTypeList({
            current: 1,
            size: 4,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    fontType1: dataList.data
                });

            }
        });

        hotList({
            current: 1,
            size: 4,
            typeCode: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    hot: dataList.data
                });

            }
        });

    }
    state = {
        fontCodeNumber: [],
        fontLanguageFamily: [],
        fontNewEntrants: [],
        fontStyle1: [],
        fontType1: [],
        hot: [],

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
        let { commontPartList, hotActiveKey, hotTypeTitle, fontList, fontList2, fontList3, fontTypeTitle, storeList,  
            fontCodeNumber, fontLanguageFamily, fontNewEntrants, fontStyle1, fontType1, hot } = this.state;

        let fontType;
        let fontLanguageSystem;
        let fontStyle;
        let fontCoding;
        fontTypeTitle.map(item => {
            // 字体类型
            if (item.code === 'FONT_TYPE') {
                fontType = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                console.log(item);
                                return (
                                    <span
                                        style={{ 'cursor': 'pointer' }}
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.catId ? styles.activeItem : null)}
                                        onClick={() => this.changeHotActiveKey(item.catId)}>
                                        {item.name}
                                    </span>
                                );
                            })
                        }
                        <span className={styles.more}>更多</span>
                    </div>
                );
            }
            // 字体语系
            if (item.code === 'FONT_LANGUAGE_SYSTEM') {
                fontLanguageSystem = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                return (
                                    <span
                                        style={{ 'cursor': 'pointer' }}
                                        // key={i++}
                                        className={cls(styles.typeItem, hotActiveKey === item.catId ? styles.activeItem : null)}
                                        onClick={() => this.changeHotActiveKey(item.catId)}>
                                        {item.name}
                                    </span>
                                );
                            })
                        }
                        <span className={styles.more}>更多</span>
                    </div>
                );
            }
            // 风格
            if (item.code === 'FONT_STYLE') {
                fontStyle = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                return (
                                    <span
                                        style={{ 'cursor': 'pointer' }}
                                        // key={i++}
                                        className={cls(styles.typeItem, hotActiveKey === item.catId ? styles.activeItem : null)}
                                        onClick={() => this.changeHotActiveKey(item.catId)}>
                                        {item.name}
                                    </span>
                                );
                            })
                        }
                        <span className={styles.more}>更多</span>
                    </div>
                );
            }

            if (item.code === 'FONT_CODING') {
                fontCoding = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                return (
                                    <span
                                        style={{ 'cursor': 'pointer' }}
                                        // key={i++}
                                        className={cls(styles.typeItem, hotActiveKey === item.catId ? styles.activeItem : null)}
                                        onClick={() => this.changeHotActiveKey(item.catId)}>
                                        {item.name}
                                    </span>
                                );
                            })
                        }
                        <span className={styles.more}>更多</span>
                    </div>
                );
            }
        });

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
                                    hot.map(item => {
                                        return (
                                             
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                    <div className={styles.fontItemBox}>
                                                        <img width="100%" height="100%" src={item.commodityCoverUrl}/>
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
                        <span>字体类型</span>
                        <span className={styles.titleEnglish}>ZITILEIXING</span>
                    </div>
                    <div className={styles.itemContent}>

                        {fontType}

                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontType1.map(item => {
                                        return (
                                            
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                    <div className={styles.fontItemBox}>
                                                        <img width="100%" height="100%" src={item.commodityCoverUrl}/>
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
                        {fontLanguageSystem}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontLanguageFamily.map(item => {
                                        return (
                                            
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                    <div className={styles.fontItemBox}>
                                                        <img width="100%" height="100%" src={item.commodityCoverUrl}/>
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
                        <span>风格</span>
                        <span className={styles.titleEnglish}>FENGGE</span>
                    </div>
                    <div className={styles.itemContent}>
                        {
                            fontStyle
                        /* <div className={styles.classification}>
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
                        </div> */}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontStyle1.map(item => {
                                        return (
                                            
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                    <div className={styles.fontItemBox}>
                                                        <img width="100%" height="100%" src={item.commodityCoverUrl}/>
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
                        <span>字体编码/字数</span>
                        <span className={styles.titleEnglish}>ZITIBIANMA/ZISHU</span>
                    </div>
                    <div className={styles.itemContent}>
                        {
                            fontCoding
                        /* <div className={styles.classification}>
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
                        </div> */}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 0]}>
                                {
                                    fontCodeNumber.map(item => {
                                        return (
                                            
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                    <div className={styles.fontItemBox}>
                                                        <img width="100%" height="100%" src={item.commodityCoverUrl}/>
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
                <NewArrival storeList={storeList}></NewArrival>
                <HotRecommendation typeActiveKey={2}></HotRecommendation>
            </div>
        );
    }
}
