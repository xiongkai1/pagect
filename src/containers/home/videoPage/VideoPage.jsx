import React, { Component } from 'react';
import styles from '../fontsPage/fontPage.less';
import cls from 'classnames';
import CommonPart from '../components/commonPart/CommonPart';
import NewArrival from '../components/newArrival/NewArrival';
import HotRecommendation from '../components/newArrival/HotRecommendation';
import { Row, Col, Select, Input } from 'antd';
import { SEARCH_OPTION } from '../../../constants/common';
import { Link } from 'react-router-dom';
import { Carousel } from 'element-react';
import { commodityClassification } from 'Services/classification';
import { hotList, videoClassificationList, videoNewEntrantsList, videoShotList } from 'Services/videoHomePage';

const { Search } = Input;
const { Option } = Select;

export default class VideoPage extends Component {
    constructor() {
        super();
        commodityClassification({
            type: 3
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
            size: 4
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    hotList: dataList.data
                });

            }
        });

        videoClassificationList({
            current: 1,
            size: 4,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    videoClassificationList: dataList.data
                });

            }
        });

        videoNewEntrantsList({
            current: 1,
            size: 4,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    videoNewEntrantsList: dataList.data
                });

            }
        });

        videoShotList({
            current: 1,
            size: 4,
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
        videoClassificationList: [],
        videoNewEntrantsList: [],
        videoShotList: [],
        commontPartList: [
            { key: 1, imgurl: require('../images/boutique.png'),
                title: '原创精品',
                introduceList: [
                    { id: 1, introduce: '优质视频，创作交易平台' },
                    { id: 2, introduce: '数1000量级别可用4k、HD视频' }] },
            { key: 2, imgurl: require('../images/level.png'),
                title: '大片级别 ',
                introduceList: [
                    { id: 1, introduce: '强悍的视觉效果，震撼的精彩画面' },
                    { id: 2, introduce: '10000+店主，精心为你打造视觉盛宴' }] },
            { key: 3, imgurl: require('../images/shopping.png'),
                title: '时时更新',
                introduceList: [{ id: 1, introduce: '大咖云集，时时更新' },
                    { id: 2, introduce: '精挑细选，为您甄选优质片源 ' }] }
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
            { key: 1, value: require('../../../images/img1.JPG') },
            { key: 2, value: require('../../../images/img2.JPG') },
            { key: 3, value: require('../../../images/img3.JPG') },
            { key: 4, value: require('../../../images/img4.JPG') },
            { key: 5, value: require('../../../images/img8.JPG') },
            { key: 6, value: require('../../../images/img5.JPG') },
            { key: 7, value: require('../../../images/img6.JPG') },
            { key: 8, value: require('../../../images/img7.JPG') },
            { key: 9, value: require('../../../images/img9.JPG') },
            { key: 10, value: require('../../../images/img10.JPG') },
            { key: 11, value: require('../../../images/img11.JPG') },
            { key: 12, value: require('../../../images/img12.JPG') },
            { key: 13, value: require('../../../images/img13.JPG') },
            { key: 14, value: require('../../../images/img14.jpg') },
            { key: 15, value: require('../../../images/img15.jpg') },
            { key: 16, value: require('../../../images/img16.jpg') }
        ],
        storeList: [
            { id: 1, name: '视频厂家' }
        ],
        videoArray: [
            require('../../../vedio/video1.MP4'),
            require('../../../vedio/video1.MP4'),
            require('../../../vedio/video1.MP4')
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
        let { commontPartList, hotActiveKey, hotTypeTitle, fontList, videoArray, fontTypeTitle, storeList,
            hotList, videoClassificationList, videoNewEntrantsList, videoShotList } = this.state;
        let videoType;
        // 拍摄手法
        let shootingTechnique;
        fontTypeTitle.map(item => {

            if (item.code === 'VIDEO_TYPE') {

                videoType = (
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

            if (item.code === 'SHOOTING_TECHNIQUE') {
                shootingTechnique = (
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
                    <div className={styles.videoTopBox}>
                        <img width="100%" height="100%" src={require('../../../images/bannerVideo.png')}/>
                    </div>
                    <div className={styles.topSelectBox}>
                        <Select
                            defaultValue={'视频'}
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
                <div className={styles.slideBox}>
                    <Carousel interval="4000" type="card" indicatorPosition="none" height="450px">
                        {
                            videoArray.map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <video width="100%" height="100%" controls="controls">
                                            <source src={item} type="video/mp4"/>
                                        </video>
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
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
                                    fontList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.fontItemBox}>
                                                    <img width="100%" height="100%" src={item.commodityCoverUrl}/>
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
                        <span>拍摄手法</span>
                        <span className={styles.titleEnglish}>PAISHESHOUFA</span>
                    </div>
                    <div className={styles.itemContent}>
                        {videoType}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    videoShotList.map(item => {
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
                        <span>分类</span>
                        <span className={styles.titleEnglish}>FENLEI</span>
                    </div>
                    <div className={styles.itemContent}>
                        {shootingTechnique}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    videoClassificationList.map(item => {
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
                <HotRecommendation typeActiveKey={4}></HotRecommendation>
            </div>
        );
    }
}
