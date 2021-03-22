import React, { Component } from 'react';
import styles from '../fontsPage/fontPage.less';
import cls from 'classnames';
import CommonPart from '../components/commonPart/CommonPart';
import NewArrival from '../components/newArrival/NewArrival';
import HotRecommendation from '../components/newArrival/HotRecommendation';
import { Row, Col, Carousel, Select, Input } from 'antd';
import { SEARCH_OPTION } from '../../../constants/common';
import { Link } from 'react-router-dom';
import { commodityClassification } from 'Services/classification';
import { hotList, musicEmotionList, musicInstrumentsList, musicNewEntrantsList, musicStyleList } from 'Services/musicCommodityPage';

const { Search } = Input;
const { Option } = Select;

export default class MusicPage extends Component {
    constructor() {
        super();
        commodityClassification({
            type: 6
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

        hotList({
            current: 1,
            size: 16
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    hotList: dataList.data
                });

            }
        });

        musicEmotionList({
            current: 1,
            size: 16,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    videoClassificationList: dataList.data
                });

            } 
        });

        musicInstrumentsList({
            current: 1,
            size: 16,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    videoNewEntrantsList: dataList.data
                });

            } 
        });

        musicNewEntrantsList({
            current: 1,
            size: 16,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    videoShotList: dataList.data
                });

            } 
        });
        musicStyleList({
            current: 1,
            size: 16,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    videoShotList: dataList.data
                });

            } 
        });
    }
    state = {
        hotList: [],
        musicEmotionList: [],
        musicInstrumentsList: [],
        musicNewEntrantsList: [],
        musicStyleList: [],
        commontPartList: [
            { key: 1, imgurl: require('../images/template.png'),
                title: '海量模板',
                introduceList: [
                    { id: 1, introduce: '超10000+模板任您选' },
                    { id: 2, introduce: '找海量模板，就上安心元素' }] },
            { key: 2, imgurl: require('../images/relaxeduse.png'),
                title: '轻松巧用 ',
                introduceList: [
                    { id: 1, introduce: '一键下载，快速编辑' },
                    { id: 2, introduce: '让设计变成一种享受' }] },
            { key: 3, imgurl: require('../images/design.png'),
                title: '设计更高效',
                introduceList: [{ id: 1, introduce: '助力高效办公' },
                    { id: 2, introduce: '从此脱离修修补补' }] }
        ],
        hotActiveKey: 1,
        hotTypeTitle: [
            { key: 1, title: '最热搜索' },
            { key: 2, title: '最受欢迎(收藏数)' },
            { key: 3, title: '平台推荐' }
        ],
        fontTypeTitle: [
            // { key: 1, title: '常规' },
            // { key: 2, title: '航拍' },
            // { key: 3, title: '延时' },
            // { key: 4, title: '慢动作' },
            // { key: 5, title: '微距' },
            // { key: 6, title: '红外' },
            // { key: 7, title: '跟踪' },
            // { key: 8, title: '计时' },
            // { key: 9, title: '其他' }
        ],
        fontList: [
            { key: 1, value: require('../../../images/img1.JPG') },
            { key: 2, value: require('../../../images/img2.JPG') },
            { key: 3, value: require('../../../images/img3.JPG') },
            { key: 4, value: require('../../../images/img4.JPG') },  { key: 1, value: require('../../../images/img1.JPG') },
            { key: 2, value: require('../../../images/img2.JPG') },
            { key: 3, value: require('../../../images/img3.JPG') },
            { key: 4, value: require('../../../images/img4.JPG') }
        ],
        storeList: [
            { id: 1, name: '音乐店家' }
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
        let { commontPartList, hotActiveKey, hotTypeTitle, fontList, fontTypeTitle, storeList
            , hotList,
            musicEmotionList, 
            musicInstrumentsList,
            musicNewEntrantsList,
            musicStyleList
        } = this.state;

        let STYLE;
        let EMOTION;
        let MUSICAL_INSTRUMENTS;
        let RHYTHM;

        fontTypeTitle.map(item => {
            if (item.code === 'STYLE') {

                STYLE = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                return (
                                    <span
                                        style={{ 'cursor': 'pointer', 'marginRight': '20px' }}
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
            if (item.code === 'EMOTION') {

                EMOTION = (
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

            if (item.code === 'MUSICAL_INSTRUMENTS') {

                MUSICAL_INSTRUMENTS = (
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
            if (item.code === 'RHYTHM') {

                RHYTHM = (
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
                            <img width="100%" height="100%" src={require('../../../images/banner7.png')}/>
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
                            defaultValue={'音乐'}
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
                            <Row gutter={[16, 16]}>
                                {
                                    hotList.map(item => {
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
                        {STYLE}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    fontList.map(item => {
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
                        <span>情感</span>
                        <span className={styles.titleEnglish}>QINGGAN</span>
                    </div>
                    <div className={styles.itemContent}>
                        {EMOTION} 
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    fontList.map(item => {
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
                        <span>乐器</span>
                        <span className={styles.titleEnglish}>YUEQI</span>
                    </div>
                    <div className={styles.itemContent}>
                        {MUSICAL_INSTRUMENTS}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    fontList.map(item => {
                                        return (
                                            <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.commodityCoverUrl}/>
                                                </div>
                                            </Link>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.pageItem}>
                    <div className={styles.itemTitle}>
                        <span>节奏</span>
                        <span className={styles.titleEnglish}>RHYTHM</span>
                    </div>
                    <div className={styles.itemContent}>
                        {MUSICAL_INSTRUMENTS}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    fontList.map(item => {
                                        return (
                                            <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.commodityCoverUrl}/>
                                                </div>
                                            </Link>
                                        );
                                    })
                                }
                            </Row>
                            
                        </div>
                    </div>
                </div>
                <NewArrival storeList={storeList}></NewArrival>
                <HotRecommendation typeActiveKey={7}></HotRecommendation>
            </div>
        );
    }
}
