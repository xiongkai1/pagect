import React, { Component } from 'react';
import styles from '../common/commonSearch.less';
import musicStyle from './musicSearch.less';
import { Menu, Dropdown, Pagination, Row, Col } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import HotRecommendation from '../../home/components/newArrival/HotRecommendation';

export default class MusicSearch extends Component {
    state= {
        options: [
            {
                key: 1,
                text: '我的资料'
            },
            {
                key: 2,
                text: '我的订单'
            },
            {
                key: 3,
                text: '我的购物车'
            }
        ],
        imgList: [
            { key: 1, src: require('../../home/images/img1.jpg') },
            { key: 2, src: require('../../home/images/img2.jpg') },
            { key: 3, src: require('../../home/images/img3.jpg') },
            { key: 4, src: require('../../home/images/img4.jpg') },
            { key: 5, src: require('../../home/images/img5.jpg') },
            { key: 6, src: require('../../home/images/img6.jpg') },
            { key: 7, src: require('../../home/images/img7.jpg') },
            { key: 8, src: require('../../home/images/img8.jpg') },
            { key: 9, src: require('../../home/images/img9.jpg') },
            { key: 10, src: require('../../home/images/img1.jpg') }
        ],
        value: 0,
        selectId: 1,
        showShopBox: false
    }
    onChange = () => { // pageNumber
    }
    onChangeRadio = (e) => {
        // console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        });
    }
    changeSlide = () => {
        this.state.selectId === 1 ? this.setState({ selectId: 2 }) : this.setState({ selectId: 1 });
    }
    showBox = (event) => {
        let a = event.target.src.indexOf('80/');
        let imgSrc = event.target.src.slice(a + 2);
        if (imgSrc === require('../../home/images/down.png')) {
            event.target.src = require('../../home/images/up.png');
            this.setState({
                showShopBox: true
            });
        } else {
            event.target.src = require('../../home/images/down.png');
            this.setState({
                showShopBox: false
            });
        }
    }
    render() {
        let { options, showShopBox } = this.state;
        const renderMenu =  (
            <Menu>
                {
                    options.map(item => {
                        return (
                            <Menu.Item key={item.key}>
                                {item.text}
                            </Menu.Item>
                        );
                    })
                }
            </Menu>
        );
        return (
            <div className={styles.fontSearchBox}>
                <div className={styles.containerBox}>
                    <div className={styles.selectTopBox}>
                        <div className={styles.leftBox}>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        分类:流行 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        情感:宽广磅礴<DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        乐器:人声 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        节奏:非常慢(0-60bpm)<DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.selectedItemBox}>流行<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>宽广磅礴<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>人声<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>非常慢(0-60bpm)<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.clearOptions}>清除条件</div>
                        </div>
                    </div>
                    <div className={styles.entranceBox}>
                        <div className={styles.boxTitle}>
                            <span>AI智能甄选</span>
                            <span className={styles.titleEnglish}>AIZHINENGZHENXUAN</span>
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.selfSupport}>#摇滚</div>
                        </div>
                    </div>
                    <div className={styles.sortBox}>
                        <div className={styles.sortItemBox}>搜索结果:897609</div>
                        <div className={styles.sortItemBox}>排序:销量↑↓</div>
                        <div className={styles.sortItemBox}>价格↑↓</div>
                        <div className={styles.sortItemBox}>收藏数↑↓</div>
                        <div className={styles.sortItemBox}>时间↑↓</div>
                    </div>
                    <div className={styles.goodsBox}> 
                        <div className={musicStyle.shopItemBox}>
                            <div className={musicStyle.shopKeepItemBox}>
                                <div className={musicStyle.leftBox}>
                                    <div className={musicStyle.shopAvater}></div>
                                    <div className={musicStyle.shopBox}>
                                        <span className={musicStyle.musicName}>康定情歌（歌名）</span>
                                        <span>店家:<a>kk(链接到音乐店面)</a></span>
                                    </div>
                                </div>
                                <span>05:08</span>
                                <div className={musicStyle.audioBox}>
                                    这是音频
                                </div>
                                <div className={musicStyle.iconBox}>
                                    <img className={musicStyle.iconImg} src={require('../../home/images/letter.png')}/>
                                    <img className={musicStyle.iconImg} src={require('../../home/images/forward.png')}/>
                                    <img className={musicStyle.iconImg} src={require('../../home/images/collection.png')}/>
                                    <img className={musicStyle.iconImg} src={require('../../home/images/collection.png')}/>
                                </div>
                                <div className={musicStyle.leftBox}>
                                    <div className={musicStyle.interShop}>下载</div>
                                    <img className={musicStyle.downShow} src={require('../../home/images/down.png')} onClick={() => this.showBox(event)}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                showShopBox ? (
                                    <div className={musicStyle.hideShopBox}>
                                        <div className={musicStyle.shopTypeBox}>
                                            <div className={musicStyle.musicIntroduce}>
                                                <span>歌曲介绍</span>
                                                <span className={musicStyle.introduceContent}>康定情歌》又叫《跑马溜溜的山上》，是原西康地区具有代表性的传统民歌，经吴文季、江定仙编曲，由喻宜萱1947年4月19日在南京演唱。此后《康定情歌》在全国流传，而且声名远扬海外，得到各</span>
                                            </div>
                                            <div className={musicStyle.musicStyleBox}>
                                                <div className={musicStyle.introTopBox}>
                                                    <span>曲种:中文</span>
                                                    <span>曲风:流行</span>
                                                    <span>情感:怀旧</span>
                                                    <span>场景:清晨</span>
                                                    <span>主体:综艺</span>
                                                </div>
                                                <div className={musicStyle.introBottompBox}>
                                                    <span>关键词:</span>
                                                    <div className={musicStyle.keyWordBox}>
                                                        <span className={musicStyle.keyWord}>草原歌曲</span>
                                                        <span className={musicStyle.keyWord}>四川民谣</span>
                                                        <span className={musicStyle.keyWord}>中国民谣</span>
                                                        <span className={musicStyle.keyWord}>民谣</span>
                                                        <span className={musicStyle.keyWord}>最多可选十个关键词</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={musicStyle.shopInfoBox}>
                                            <div className={musicStyle.leftBox}>
                                                <div className={musicStyle.shopAvater}></div>
                                                <div className={musicStyle.shopBox}>
                                                    <span className={musicStyle.followShop}>+关注</span>
                                                    <span>名称名称名称</span>
                                                </div>
                                            </div>
                                            <div className={musicStyle.honor}>
                                                <span>荣誉</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className={styles.paginationBox}>
                        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={() => this.onChange} />
                    </div>
                    <HotRecommendation typeActiveKey={4}></HotRecommendation>
                </div>
            </div>
        );
    }
}