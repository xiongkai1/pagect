import React, { Component } from 'react';
import styles from './foundPage.less';
import CommonPart from '../components/commonPart/CommonPart';
import cls from 'classnames';
import NewArrival from '../components/newArrival/NewArrival';
import { Carousel } from 'antd';

export default class FoundPage extends Component {
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
            { key: 1, title: '最新' },
            { key: 2, title: '关注' },
            { key: 3, title: '字体' },
            { key: 4, title: '图片' },
            { key: 5, title: '视频' },
            { key: 6, title: '设计元素' },
            { key: 7, title: '办公文档' },
            { key: 8, title: '音乐' },
            { key: 9, title: '店主' }
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
        ]
    }
    changeTypeActiveKey =  (key) => {
        this.setState({
            typeActiveKey: key
        });
    }
    render() {
        let { commontPartList, typeTitle, typeActiveKey, storeList } = this.state;
        return (
            <div className={styles.foundPage}>
                <div className={styles.topBox}>
                    <Carousel autoplay className={styles.carousel}>
                        <div className={styles.carouselDiv}>
                            <img width="100%" height="100%" src={require('../../../images/banner8.png')}/>
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
                        <span className={styles.titleChinese}>发现</span>
                        <span className={styles.titleEnglish}>FAXIAN</span>
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
                <div className={styles.fondStoreBox}>
                    <div className={styles.topBox}>
                        <div className={styles.storeInfo}>
                            <div className={styles.storeAvatar}></div>
                            <div className={styles.followBox}>
                                <span className={styles.followStore}>+关注</span>
                                <span className={styles.storeName}>店小二名称</span>
                            </div>
                        </div>
                        <div className={styles.timeBox}>
                            <span>刚刚</span>
                        </div>
                    </div>
                    <div className={styles.worksBox}>
                        <div className={styles.imgBox}>
                            <img width="100%" height="100%" src={require('../../../images/img1.JPG')}/>
                        </div>
                        <div className={styles.imgBox}>
                            <img width="100%" height="100%" src={require('../../../images/img2.JPG')}/>
                        </div>
                        <div className={styles.imgBox}>
                            <img width="100%" height="100%" src={require('../../../images/img5.JPG')}/>
                        </div>
                        <div className={styles.imgBox}>
                            <img width="100%" height="100%" src={require('../../../images/img8.JPG')}/>
                        </div>
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
