import React, { Component } from 'react';
import styles from './shopKeeperPage.less';
import CommonPart from '../components/commonPart/CommonPart';
import cls from 'classnames';
import { Carousel } from 'antd';
import NewArrival from '../components/newArrival/NewArrival';

export default class ShopKeeperPage extends Component {
    state = {
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
        typeTitle: [
            { key: 1, title: '全部' },
            { key: 2, title: '字体' },
            { key: 3, title: '图片' },
            { key: 4, title: '视频' },
            { key: 5, title: '设计元素' },
            { key: 6, title: '办公文档' },
            { key: 7, title: '音乐' }
        ],
        typeActiveKey: 1,
        fontList: [
            { key: 1, value: '' },
            { key: 2, value: '' },
            { key: 3, value: '' },
            { key: 4, value: '' },
            { key: 5, value: '' },
            { key: 6, value: '' },
            { key: 7, value: '' },
            { key: 8, value: '' }
        ],
        storeList: [
            { id: 1, name: '字体店家' },
            { id: 2, name: '图片店家' },
            { id: 3, name: '视频店家' },
            { id: 4, name: '设计素材店家' },
            { id: 5, name: '办公文档店家' },
            { id: 6, name: '音乐店家' }
        ],
        showShopBox: false
    }
    changeTypeActiveKey =  (key) => {
        this.setState({
            typeActiveKey: key
        });
    }
    showBox = (event) => {
        let a = event.target.src.indexOf('80/');
        let imgSrc = event.target.src.slice(a + 2);
        if (imgSrc === require('../images/down.png')) {
            event.target.src = require('../images/up.png');
            this.setState({
                showShopBox: true
            });
        } else {
            event.target.src = require('../images/down.png');
            this.setState({
                showShopBox: false
            });
        }
    }
    render() {
        let { commontPartList, typeTitle, typeActiveKey, fontList, storeList, showShopBox } = this.state;
        return (
            <div className={styles.shopKeeperPage}>
                <div className={styles.topBox}>
                    <Carousel autoplay className={styles.carousel}>
                        <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner9.png')}/>
                        </div>
                        {/* <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner2.png')}/>
                        </div>
                        <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner3.png')}/>
                        </div> */}
                    </Carousel>
                </div>
                <div className={styles.populationIntroduceBox}>
                    <CommonPart datas={commontPartList}></CommonPart>
                </div>
                <div className={styles.modularTitle}>
                    <span className={styles.line}></span>
                    <div className={styles.titleBox}>
                        <span className={styles.titleChinese}>店主</span>
                        <span className={styles.titleEnglish}>DIANZHU</span>
                    </div>
                    <span className={styles.line}></span>
                </div>
                <div className={styles.typeTitleBox}>
                    {
                        typeTitle.map(item => {
                            return (
                                <span
                                    key={item.key}
                                    className={cls(styles.typeTitleItem, typeActiveKey === item.key ? styles.activeTitleItem : null)}
                                    onClick={() => this.changeTypeActiveKey(item.key)}>
                                    {item.title}
                                </span>
                            );
                        })
                    }
                </div>
                <div className={styles.shopKeepBox}>
                    <div className={styles.shopItemBox}>
                        <div className={styles.shopKeepItemBox}>
                            <div className={styles.leftBox}>
                                <div className={styles.shopAvater}></div>
                                <div className={styles.shopBox}>
                                    <span className={styles.followShop}>+关注</span>
                                    <span>名称名称名称</span>
                                </div>
                            </div>
                            <span className={styles.shopTime}>2020-08-08</span>
                            <div className={styles.shopLocation}>
                                <img className={styles.locationImg} src={require('../images/location.png')}/>
                                <span>湖南-长沙</span>
                            </div>
                            <span>喜欢人数：1222222</span>
                            <div className={styles.iconBox}>
                                <img className={styles.iconImg} src={require('../images/letter.png')}/>
                                <img className={styles.iconImg} src={require('../images/forward.png')}/>
                                <img className={styles.iconImg} src={require('../images/collection.png')}/>
                            </div>
                            <div className={styles.leftBox}>
                                <div className={styles.interShop}>进入店铺</div>
                                <img className={styles.downShow} src={require('../images/down.png')} onClick={() => this.showBox(event)}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            showShopBox ? (
                                <div className={styles.hideShopBox}>
                                    <div className={styles.shopTypeBox}>
                                        <div className={styles.shopTypeItemBox}>
                                            <img width="240px" height="100%" src={require('../../../images/img1.JPG')}/>
                                        </div>
                                        <div className={styles.shopTypeItemBox}>
                                            <img width="80px" height="100%" src={require('../../../images/img4.JPG')}/>
                                        </div>
                                        <div className={styles.shopTypeItemBox}>
                                            <img width="80px" height="100%" src={require('../../../images/img6.JPG')}/>
                                        </div>
                                        <div className={styles.shopTypeItemBox}>
                                            <img width="150px" height="100%" src={require('../../../images/img2.JPG')}/>
                                        </div>
                                        <div className={styles.shopTypeItemBox}>
                                            <img width="80px" height="100%" src={require('../../../images/img9.JPG')}/>
                                        </div>
                                        <span className={styles.moreShop}>更多》</span>
                                    </div>
                                    <div className={styles.shopInfoBox}>
                                        <div className={styles.leftBox}>
                                            <div className={styles.shopAvater}></div>
                                            <div className={styles.shopBox}>
                                                <span className={styles.followShop}>+关注</span>
                                                <span>名称名称名称</span>
                                            </div>
                                        </div>
                                        <div className={styles.honor}>
                                            <span>荣誉</span>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className={styles.buttoBox}>
                    <button className={styles.loadingMore}>加载更多</button>
                </div>
                <div className={styles.pageItem}>
                    <NewArrival storeList={storeList}></NewArrival>
                </div>
            </div>
        );
    }
}
