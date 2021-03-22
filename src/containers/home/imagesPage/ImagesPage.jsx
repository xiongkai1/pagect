import React, { Component } from 'react';
import styles from '../fontsPage/fontPage.less';
import cls from 'classnames';
import CommonPart from '../components/commonPart/CommonPart';
import NewArrival from '../components/newArrival/NewArrival';
import HotRecommendation from '../components/newArrival/HotRecommendation';
import { Link } from 'react-router-dom';
import { Row, Col, Carousel, Select, Input } from 'antd';
import { SEARCH_OPTION } from '../../../constants/common';
import { commodityClassification } from 'Services/classification';
import { hotList,
    pictureAnimalList,
    pictureArchitectureList,
    pictureBotanyList,
    pictureBusinessAffairsList,
    pictureCharacterList,
    pictureDeliciousFoodList,
    pictureEducationList,
    pictureFestivalList,
    pictureFinanceList,
    pictureLifeList,
    pictureMedicalCareList,
    pictureNaturalList,
    pictureNewEntrantsList
} from 'Services/pictureHomePage';

const { Search } = Input;
const { Option } = Select;

export default class ImagesPage extends Component {
    constructor() {
        super();
        commodityClassification({
            type: 2
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

        pictureAnimalList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureAnimalList: dataList.data
                });

            }
        });

        pictureArchitectureList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureArchitectureList: dataList.data
                });

            }
        });

        pictureBotanyList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureBotanyList: dataList.data
                });

            }
        });

        pictureBusinessAffairsList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureBusinessAffairsList: dataList.data
                });

            }
        });

        pictureCharacterList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureCharacterList: dataList.data
                });

            }
        });

        pictureDeliciousFoodList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureDeliciousFoodList: dataList.data
                });

            }
        });

        pictureEducationList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureEducationList: dataList.data
                });

            }
        });

        pictureFestivalList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureFestivalList: dataList.data
                });

            }
        });

        pictureFinanceList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureFinanceList: dataList.data
                });

            }
        });

        pictureLifeList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureLifeList: dataList.data
                });

            }
        });

        pictureMedicalCareList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureMedicalCareList: dataList.data
                });

            }
        });

        pictureNaturalList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureNaturalList: dataList.data
                });

            }
        });

        pictureNewEntrantsList({
            current: 1,
            size: 8,
            type: 1
        }).then(e => {
            if (e.data.code === 200) {
                let dataList = e.data.data;

                this.setState({
                    pictureNewEntrantsList: dataList.data
                });

            }
        });

    }
    state = {

        hotList: [],
        pictureAnimalList: [],
        pictureArchitectureList: [],
        pictureBotanyList: [],
        pictureBusinessAffairsList: [],
        pictureCharacterList: [],
        pictureDeliciousFoodList: [],
        pictureEducationList: [],
        pictureFestivalList: [],
        pictureFinanceList: [],
        pictureLifeList: [],
        pictureMedicalCareList: [],
        pictureNaturalList: [],
        pictureNewEntrantsList: [],
        commontPartList: [
            { key: 1, imgurl: require('../images/global.png'),
                title: '全球覆盖',
                introduceList: [
                    { id: 1, introduce: '计划10,000,000级别巨作量' },
                    { id: 2, introduce: '覆盖45个领域，近1000种行业' }] },
            { key: 2, imgurl: require('../images/author.png'),
                title: '直通作者',
                introduceList: [
                    { id: 1, introduce: '一首资源，10000+名作者入驻' },
                    { id: 2, introduce: '购买无差价，省心又省钱，版权有保障' }] },
            { key: 3, imgurl: require('../images/shopping.png'),
                title: '轻松购',
                introduceList: [{ id: 1, introduce: '无需会员，一张可售' },
                    { id: 2, introduce: '每张图片自动生成授权证书' }] }
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
            { key: 8, value: require('../../../images/img7.JPG') }
        ],
        storeList: [
            { id: 1, name: '图片厂家' }
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
        let { commontPartList, hotActiveKey, hotTypeTitle, fontList, fontTypeTitle, storeList, 
            hotList, pictureAnimalList,
            pictureArchitectureList,
            pictureBotanyList,
            pictureBusinessAffairsList,
            pictureCharacterList,
            pictureDeliciousFoodList,
            pictureEducationList,
            pictureFestivalList,
            pictureFinanceList,
            pictureLifeList,
            pictureMedicalCareList,
            pictureNaturalList,
            pictureNewEntrantsList
        } = this.state;

        let NATURAL_LANDSCAPE;
        let DINING;
        let BUILDING;
        let CHARACTER_IMAGE;
        let WAY_OF_LIFE;
        let BUSINESS_OFFICE;
        let EDUCATION_CULTURE;
        let MEDICAL_HEALTH;
        let FINTECH;
        let FESTIVAL_SOLAR_TERMS;
        let ANIMAL;
        let PLANT;

        fontTypeTitle.map(item => {
            // 图片类型
            if (item.code === 'NATURAL_LANDSCAPE') {
                NATURAL_LANDSCAPE = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'DINING') {
                DINING = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'BUILDING') {
                BUILDING = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'CHARACTER_IMAGE') {
                CHARACTER_IMAGE = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'WAY_OF_LIFE') {
                WAY_OF_LIFE = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'BUSINESS_OFFICE') {
                BUSINESS_OFFICE = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'EDUCATION_CULTURE') {
                EDUCATION_CULTURE = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'MEDICAL_HEALTH') {
                MEDICAL_HEALTH = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'FINTECH') {
                FINTECH = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'FESTIVAL_SOLAR_TERMS') {
                FESTIVAL_SOLAR_TERMS = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'ANIMAL') {
                ANIMAL = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
            if (item.code === 'PLANT') {
                PLANT = (
                    <div className={styles.classification}>
                        {
                            item.children.map(item => {
                                
                                console.log(item);
                                return (
                                    <span
                                        key={item.catId}
                                        className={cls(styles.typeItem, hotActiveKey === item.key ? styles.activeItem : null)}
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
                            <img width="100%" height="100%" src={require('../../../images/banner4.png')}/>
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
                            defaultValue={'图片'}
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
                                                <Link to={{ pathname: '/details', state: { id: 2 } }}>
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
                        <span>自然景观</span>
                        <span className={styles.titleEnglish}>ZIRANJINGGUAN</span>
                    </div>
                    <div className={styles.itemContent}>
                        {NATURAL_LANDSCAPE}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureAnimalList.map(item => {
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
                        <span>餐饮美食</span>
                        <span className={styles.titleEnglish}>CANYINMEISHI</span>
                    </div>
                    <div className={styles.itemContent}>
                        {DINING}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureDeliciousFoodList.map(item => {
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
                        <span>建筑</span>
                        <span className={styles.titleEnglish}>JIANZHU</span>
                    </div>
                    <div className={styles.itemContent}>
                        {BUILDING}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureArchitectureList.map(item => {
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
                        <span>人物形象</span>
                        <span className={styles.titleEnglish}>RENWUXINGXINAG</span>
                    </div>
                    <div className={styles.itemContent}>
                        {CHARACTER_IMAGE}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureCharacterList.map(item => {
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
                        <span>生活方式</span>
                        <span className={styles.titleEnglish}>SHENGHUOFANGSHI</span>
                    </div>
                    <div className={styles.itemContent}>
                        {WAY_OF_LIFE}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureLifeList.map(item => {
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
                        <span>商务办公</span>
                        <span className={styles.titleEnglish}>SHANGWUBANGONG</span>
                    </div>
                    <div className={styles.itemContent}>
                        {BUSINESS_OFFICE}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureBusinessAffairsList.map(item => {
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
                        <span>教育文化</span>
                        <span className={styles.titleEnglish}>JIAOYUWENHUA</span>
                    </div>
                    <div className={styles.itemContent}>
                        {EDUCATION_CULTURE}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureEducationList.map(item => {
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
                        <span>医疗健康</span>
                        <span className={styles.titleEnglish}>YILIAOJIANKANG</span>
                    </div>
                    <div className={styles.itemContent}>
                        {MEDICAL_HEALTH}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureMedicalCareList.map(item => {
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
                        <span>金融科技</span>
                        <span className={styles.titleEnglish}>JIRONGKEJI</span>
                    </div>
                    <div className={styles.itemContent}>
                        {FINTECH}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureFinanceList.map(item => {
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
                        <span>节日节气</span>
                        <span className={styles.titleEnglish}>JIERIJIEQI</span>
                    </div>
                    <div className={styles.itemContent}>
                        {FESTIVAL_SOLAR_TERMS}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureFestivalList.map(item => {
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
                        <span>动物/虫</span>
                        <span className={styles.titleEnglish}>DONGWU/CHONG</span>
                    </div>
                    <div className={styles.itemContent}>
                        {ANIMAL}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureAnimalList.map(item => {
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
                        <span>植物</span>
                        <span className={styles.titleEnglish}>植物</span>
                    </div>
                    <div className={styles.itemContent}>
                        {PLANT}
                        <div className={styles.contentBox}>
                            <Row gutter={[16, 16]}>
                                {
                                    pictureBotanyList.map(item => {
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
                <HotRecommendation typeActiveKey={3}></HotRecommendation>
            </div>
        );
    }
}
