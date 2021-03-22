import React, { Component } from 'react';
import { Row, Col, Input, Avatar, Select } from 'antd';
import { Carousel } from 'element-react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import styles from './homePage.less';
import 'element-theme-default';
import { SEARCH_OPTION } from '../../../constants/common';

const { Search } = Input;
const { Option } = Select;
export default class HomePage extends Component {
    state = {
        fontList: [
            { key: 1, value: '微软雅黑' },
            { key: 2, value: '宋体' },
            { key: 3, value: '黑体' },
            { key: 4, value: '圆体' },
            { key: 5, value: '楷体' },
            { key: 6, value: '隶书' },
            { key: 7, value: '哥特体' },
            { key: 8, value: '手写' },
            { key: 9, value: '草书' },
            { key: 10, value: '行书' },
            { key: 11, value: '篆体' },
            { key: 12, value: '楷体' },
            { key: 13, value: '细黑' },
            { key: 14, value: '毛笔' },
            { key: 15, value: '书法' },
            { key: 16, value: '魏体' },
            { key: 17, value: '行楷' }
         
        ],
        galleryTypeTitle: [
            { key: 1, title: '古典' },
            { key: 2, title: '摇滚' },
            { key: 3, title: '金属' },
            { key: 4, title: '舒缓' },
            { key: 5, title: '自然' },
            { key: 6, title: '爱情' },
            { key: 7, title: '家庭' },
            { key: 8, title: '乡村' },
            { key: 9, title: '民谣' }
        ],
        galleryList: [
            { key: 1, src: require('../images/img1.jpg') },
            { key: 2, src: require('../images/img2.jpg') },
            { key: 3, src: require('../images/img3.jpg') },
            { key: 4, src: require('../images/img4.jpg') },
            { key: 5, src: require('../images/img5.jpg') },
            { key: 6, src: require('../images/img6.jpg') },
            { key: 7, src: require('../images/img7.jpg') },
            { key: 8, src: require('../images/img8.jpg') },
            { key: 9, src: require('../images/img9.jpg') },
            { key: 10, src: require('../images/img2.jpg') }
        ],
        videoTypeTitle: [
            { key: 1, title: '东方人物' },
            { key: 2, title: '人物' },
            { key: 3, title: '动物' },
            { key: 4, title: '植物' },
            { key: 5, title: '横图' },
            { key: 6, title: '竖图' },
            { key: 7, title: '科技' },
            { key: 8, title: '暴富' },
            { key: 9, title: '医疗' },
            { key: 10, title: '商务' },
            { key: 11, title: '自然风光' }
        ],
        videoList: [
            { key: 1, src: require('../images/img1.jpg') },
            { key: 2, src: require('../images/img1.jpg') },
            { key: 3, src: require('../images/img1.jpg') },
            { key: 4, src: require('../images/img1.jpg') },
            { key: 5, src: require('../images/img1.jpg') },
            { key: 6, src: require('../images/img1.jpg') },
            { key: 7, src: require('../images/img1.jpg') },
            { key: 8, src: require('../images/img1.jpg') },
            { key: 9, src: require('../images/img1.jpg') },
            { key: 10, src: require('../images/img1.jpg') }
        ],
        musicTypeTitle: [
            { key: 1, title: '古典' },
            { key: 2, title: '摇滚' },
            { key: 3, title: '金属' },
            { key: 4, title: '舒缓' },
            { key: 5, title: '自然' },
            { key: 6, title: '爱情' },
            { key: 7, title: '家庭' },
            { key: 8, title: '乡村' },
            { key: 9, title: '民谣' }
        ],
        titleList: [
            { key: 1, title: '设计素材' },
            { key: 2, title: '办公文档' }
        ],
        materialTypeTitle: [
            { key: 1, title: '广告类' },
            { key: 2, title: '元素类' },
            { key: 3, title: '视频类' },
            { key: 4, title: '装修设计类' },
            { key: 5, title: '模型类' },
            { key: 6, title: '插图类' },
            { key: 7, title: '手机类' },
            { key: 8, title: 'UI类' },
            { key: 9, title: '其他' }
        ],
        discoverTypeTitle: [
            { key: 1, title: '最新' },
            { key: 2, title: '关注' },
            { key: 3, title: '字库' },
            { key: 4, title: '图库' },
            { key: 5, title: '视频' },
            { key: 6, title: '设计素材' },
            { key: 7, title: '办公文档' },
            { key: 8, title: '音乐' },
            { key: 9, title: '店主' }
        ],
        cooperationCompanyList: [
            { key: 1, name: '口碑', src: require('../images/img1.jpg') },
            { key: 2, name: '阿里云', src: require('../images/img1.jpg') },
            { key: 3, name: '格力', src: require('../images/img1.jpg') },
            { key: 4, name: '360', src: require('../images/img1.jpg') },
            { key: 5, name: '360', src: require('../images/img1.jpg') },
            { key: 6, name: '淘宝', src: require('../images/img1.jpg') },
            { key: 7, name: '百度', src: require('../images/img1.jpg') },
            { key: 8, name: 'QQ浏览器', src: require('../images/img1.jpg') },
            { key: 9, name: '支付宝', src: require('../images/img1.jpg') },
            { key: 10, name: '中国联通', src: require('../images/img1.jpg') }
        ],
        galleryActiveKey: 1,
        videoActiveKey: 1,
        titleActiveKey: 1,
        materialActiveKey: 1,
        musicActiveKey: 1,
        discoverActiveKey: 1,
        imgArray: [
            require('../../../images/banner2.png'),
            require('../../../images/banner3.png'),
            require('../../../images/banner1.png')
        ],
        videoArray: [
            require('../../../vedio/video1.MP4'),
            require('../../../vedio/video1.MP4'),
            require('../../../vedio/video1.MP4')
        ]
    }
    changeGalleryActiveKey = (key) => {
        this.setState({
            galleryActiveKey: key
        });
    }
    changeVideoActiveKey = (key) => {
        this.setState({
            videoActiveKey: key
        });
    }
    changetTitleActiveKey = (key) => {
        this.setState({
            titleActiveKey: key
        });
    }
    changeMaterialActiveKey = (key) => {
        this.setState({
            materialActiveKey: key
        });
    }
    changeMusicActiveKey = (key) => {
        this.setState({
            musicActiveKey: key
        });
    }
    changeDiscoverActiveKey = (key) => {
        this.setState({
            discoverActiveKey: key
        });
    }
    playMusic = () => {
        this.musicAudio.play();
    }
    stopMusic = () => {
        this.musicAudio.pause();
    }
    onSearch = (value) => {
        window.location.href = '/search';
    }
    render() {
        let { fontList, galleryActiveKey, videoActiveKey, titleActiveKey, musicActiveKey, 
            discoverActiveKey, materialActiveKey, galleryTypeTitle, galleryList, videoTypeTitle, 
            videoList, materialTypeTitle, titleList, musicTypeTitle, discoverTypeTitle, 
            cooperationCompanyList, imgArray, videoArray } = this.state;
        return (
            <div className={styles.homePage}>
                <div className={styles.topBox}>
                    <Carousel interval="4000" arrow="always" height="450px" className={styles.carousel}>
                        {
                            imgArray.map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img width="100%" height="100%" src={item}/>
                                    </Carousel.Item>
                                );
                            })
                        }
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
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>心安字库</span>
                            <span className={styles.titleEnglish}>XINANZIKU</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.moudularContent}>
                        <Row gutter={[48, 16]}>
                            <Col className={styles.gutterBox} span={6}>
                                <div className={styles.selfSupportBox}>自营专区入口</div>
                            </Col>
                            <Col className={styles.gutterBox} span={12}>
                                <div className={styles.fontSearch}>
                                    <Search placeholder="输入关键词"/>
                                </div>
                            </Col>
                            <Col className={styles.gutterBox} span={6}>
                                <div className={styles.otherBox}>
                                    <div className={styles.shopBox}>
                                        <Link className={styles.shopBoxLink} to={{ pathname: '/userCenter/7', state: { id: 1 } }}>
                                          我要开店》
                                        </Link>
                                    </div>
                                    <div className={styles.moreFont}>
                                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                                             更多字体》
                                        </Link>
                                  
                                    </div>
                                </div>
                            </Col>
                            {
                                fontList.map(item => {
                                    return (
                                        <Col key={item.key} className={styles.gutterBox} span={6}>
                                            <Link to={{ pathname: '/details', state: { id: 1 } }}>
                                                <div className={styles.fontItemBox}>
                                                    <div className={styles.showBox}>
                                                        <div className={styles.fontGoodsImg}>
                                                            <img width="100%" height="100%" src={require('../images/img1.jpg')}/>
                                                        </div>
                                                        <div className={styles.fontGoodsName}>
                                                            {item.value}
                                                        </div>
                                                    </div>
                                                    <div className={styles.hideBox}>
                                                        <div className={styles.operationBox}>
                                                            <img className={styles.imgCart}/>
                                                            <img className={styles.imgDetails}/>
                                                            <img className={styles.imgCollection}/>
                                                            <img className={styles.imgDownload}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                           
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                    <div className={styles.moreLoading}>
                   
                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                        加载更多
                        </Link>
                    </div>
                </div>
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>心安图库</span>
                            <span className={styles.titleEnglish}>XINANTUKU</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.galleryIntroduce}>
                        <div className={styles.distribution}>
                            <span className={styles.all}>全域覆盖</span>
                            <span>计划<span className={styles.redFont}>10,000,000</span>级别巨作量</span>
                            <span>覆盖<span className={styles.redFont}>45</span>个领域，近<span className={styles.redFont}>1000</span>种行业</span>
                        </div>
                        <div className={styles.openStore}>
                            <Link className={styles.shopBoxLink} to={{ pathname: '/userCenter/7', state: { id: 1 } }}>
                                   我要开店》
                            </Link>
                        </div>
                    </div>
                    <div className={styles.moudularContent}>
                        <div className={styles.classification}>
                            {
                                galleryTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, galleryActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeGalleryActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.imgMoudularContent}>
                            <div className={styles.imgBox}>
                                {
                                    galleryList.map(item => {
                                        return (
                                            <Link to={{ pathname: '/details/fontDetails', state: { id: 1 } }}>
                                                <div className={styles.imgItemBox} key={item.key}>
                                                    <img width="100%" height="100%" src={item.src}/>
                                                    <div className={styles.hideCommonBox}>
                                                        <div className={styles.download}>
                                                            <img className={styles.imgDownload}/>
                                                        </div>
                                                        <div className={styles.otherOperation}>
                                                            <div className={styles.rowBox}>
                                                                <div className={styles.logoBox}></div>
                                                                <img width="50px" height="20px" src={require('../../../images/followActive.png')}></img>
                                                            </div>
                                                            <div className={styles.rowBox}>
                                                                <img className={styles.imgGood}/>
                                                                <img className={styles.imgCollection}/>
                                                                <img className={styles.imgCart}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.moreLoading}>
                        
                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                        加载更多
                        </Link>
                    </div>
                </div>
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>心安视频</span>
                            <span className={styles.titleEnglish}>XINANSHIPIN</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.swiperBox}>
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
                    <div className={styles.moudularContent}>
                        <div className={styles.classification}>
                            {
                                videoTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, videoActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeVideoActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.moudularContent}>
                            <Row gutter={[16, 16]}>
                                {
                                    videoList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.videoBox}>
                                                    <img width="100%" height="100%" src={item.src}/>
                                                    <div className={styles.hideCommonBox}>
                                                        <div className={styles.download}>
                                                            <img className={styles.imgCart}/>
                                                        </div>
                                                        <div className={styles.otherOperation}>
                                                            <div className={styles.rowBox}></div>
                                                            <div className={styles.rowBox}>
                                                                <img className={styles.imgDownload}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                    <div className={styles.moreLoading}>
                        
                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                        加载更多
                        </Link>
                    </div>
                </div>
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>设计素材     办公文档</span>
                            <span className={styles.titleEnglish}>SHEJISHUCAI    BANGONGWENDANG</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.galleryIntroduce}>
                        <div className={styles.distribution}>
                            <span className={styles.all}>海量模板</span>
                            <span>超<span className={styles.redFont}>10,000,000+</span>模板任您选</span>
                            <span>找海量模板，就上心安元素</span>
                        </div>
                        <div className={styles.openStore}>
                            <Link className={styles.shopBoxLink} to={{ pathname: '/userCenter/7', state: { id: 1 } }}>
                                          我要开店》
                            </Link>
                        </div>
                    </div>
                    <div className={styles.moudularContent}>
                        <div className={styles.modularTitleBox}>
                            {
                                titleList.map(item => {
                                    return (
                                        <span
                                            className={cls(styles.titleItem, titleActiveKey === item.key ? styles.titleActiveItem : null)}
                                            key={item.key}
                                            onClick={() => this.changetTitleActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.classification}>
                            {
                                materialTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, materialActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeMaterialActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.moudularContent}>
                            <Row gutter={[16, 16]}>
                                {
                                    galleryList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.videoBox}>
                                                    <img width="100%" height="100%" src={item.src}/>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                    <div className={styles.moreLoading}>
                        
                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                        加载更多
                        </Link>
                    </div>
                </div>
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>心安音乐</span>
                            <span className={styles.titleEnglish}>XINANYINYUE</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.galleryIntroduce}>
                        <div className={styles.distribution}>
                            <span className={styles.all}>在这里，所有的音符只为编出您的殿堂</span>
                            <span>计划<span className={styles.redFont}>10,000,000</span>首殿堂级音乐</span>
                            <span>覆盖<span className={styles.redFont}>45</span>个领域，近<span className={styles.redFont}>1000</span>种行业</span>
                        </div>
                        <div className={styles.openStore}>
                            <Link className={styles.shopBoxLink} to={{ pathname: '/userCenter/7', state: { id: 1 } }}>
                                          我要开店》
                            </Link>
                        </div>
                    </div>
                    <div className={styles.moudularContent}>
                        <div className={styles.classification}>
                            {
                                musicTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, musicActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeMusicActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.moudularContent}>
                            <Row gutter={[16, 16]}>
                                {
                                    fontList.map(item => {
                                        return (
                                            <Col key={item.key} className={styles.gutterBox} span={6}>
                                                <div className={styles.musicItemBox} onMouseOver={() => this.playMusic()} onMouseOut={() => this.stopMusic()}>
                                                    <audio ref={el => this.musicAudio = el}>
                                                        <source src={require('../../../music/music1.mp3')} type="audio/mpeg" />
								                    </audio>
                                                    <div className={styles.avatar}></div>
                                                    <div className={styles.showBox}>
                                                        <div className={styles.musicinfoBox}>
                                                            <span>歌曲名称</span>
                                                            <span>03'05''</span>
                                                        </div>
                                                        <span className={styles.musicAuthor}>艺术家：查理-康</span>
                                                    </div>
                                                    <div className={styles.hideBox}>
                                                        <div className={styles.operationBox}>
                                                            <img className={styles.imgDetails}/>
                                                            <img className={styles.imgGood}/>
                                                            <img className={styles.imgCollection}/>
                                                            <img className={styles.imgCart}/>
                                                            <img className={styles.imgDownload}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                    <div className={styles.moreLoading}>
                        
                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                        加载更多
                        </Link>
                    </div>
                </div>
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>发现</span>
                            <span className={styles.titleEnglish}>FAXIAN</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.moudularContent}>
                        <div className={styles.classification}>
                            {
                                discoverTypeTitle.map(item => {
                                    return (
                                        <span
                                            key={item.key}
                                            className={cls(styles.typeItem, discoverActiveKey === item.key ? styles.activeItem : null)}
                                            onClick={() => this.changeDiscoverActiveKey(item.key)}>
                                            {item.title}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.moudularContent}>
                            <div className={styles.discoverBox}>
                                <div className={styles.discoverItemBox}>
                                    <div className={styles.discoverStore}>
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        <div className={styles.storeInfo}>
                                            <span className={styles.follow}>+关注</span>
                                            <span>店小二名称</span>
                                        </div>
                                    </div>
                                    <div className={styles.storeContent}>
                                        <div className={styles.contentIten}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.moreLoading}>
                        
                        <Link className={styles.shopBoxLink} to={{ pathname: '/home/fonts', state: { id: 1 } }}>
                        加载更多
                        </Link>
                    </div>
                </div>
                <div className={styles.modularBox}>
                    <div className={styles.modularTitle}>
                        <span className={styles.line}></span>
                        <div className={styles.titleBox}>
                            <span className={styles.titleChinese}>合作客户</span>
                            <span className={styles.titleEnglish}>HEZUOKEHU</span>
                        </div>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.cooperationBox}>
                        {
                            cooperationCompanyList.map(item => {
                                return (
                                    <div key={item.key} className={styles.cooperationItem}>
                                        <img width="60px" height="60px" src={item.src}/>
                                        <span className={styles.companyName}>{item.name}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
