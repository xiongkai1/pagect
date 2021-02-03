import React, { Component } from 'react';
import styles from '../common/commonSearch.less';
import shopKeeperStyle from './shopKeeperSearch.less';
import { Menu, Dropdown, Pagination, Row, Col } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import HotRecommendation from '../../home/components/newArrival/HotRecommendation';

export default class ShopKepperSearch extends Component {
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
                                        类型:字体 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                       区域:湖南-长沙<DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        时间:2020-01-01到2020-12-31 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.selectedItemBox}>字体<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>湖南-长沙<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>2020-01-01到2020-12-31<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.clearOptions}>清除条件</div>
                        </div>
                    </div>
                    <div className={styles.entranceBox}>
                        <div className={styles.boxTitle}>
                            <span>AI智能甄选</span>
                            <span className={styles.titleEnglish}>AIZHINENGZHENXUAN</span>
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.selfSupport}>#热门店主</div>
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
                        <div className={shopKeeperStyle.shopItemBox}>
                            <div className={shopKeeperStyle.shopKeepItemBox}>
                                <div className={shopKeeperStyle.leftBox}>
                                    <div className={shopKeeperStyle.shopAvater}></div>
                                    <div className={shopKeeperStyle.shopBox}>
                                        <span className={shopKeeperStyle.followShop}>+关注</span>
                                        <span>名称名称名称</span>
                                    </div>
                                </div>
                                <span className={shopKeeperStyle.shopTime}>2020-08-08</span>
                                <div className={shopKeeperStyle.shopLocation}>
                                    <img className={shopKeeperStyle.locationImg} src={require('../../home/images/location.png')}/>
                                    <span>湖南-长沙</span>
                                </div>
                                <span>喜欢人数：1222222</span>
                                <div className={shopKeeperStyle.iconBox}>
                                    <img className={shopKeeperStyle.iconImg} src={require('../../home/images/letter.png')}/>
                                    <img className={shopKeeperStyle.iconImg} src={require('../../home/images/forward.png')}/>
                                    <img className={shopKeeperStyle.iconImg} src={require('../../home/images/collection.png')}/>
                                </div>
                                <div className={shopKeeperStyle.leftBox}>
                                    <div className={shopKeeperStyle.interShop}>进入店铺</div>
                                    <img className={shopKeeperStyle.downShow} src={require('../../home/images/down.png')} onClick={() => this.showBox(event)}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                showShopBox ? (
                                    <div className={shopKeeperStyle.hideShopBox}>
                                        <div className={shopKeeperStyle.shopTypeBox}>
                                            <div className={shopKeeperStyle.shopTypeItemBox}></div>
                                            <div className={shopKeeperStyle.shopTypeItemBox}></div>
                                            <div className={shopKeeperStyle.shopTypeItemBox}></div>
                                            <div className={shopKeeperStyle.shopTypeItemBox}></div>
                                            <div className={shopKeeperStyle.shopTypeItemBox}></div>
                                            <span className={shopKeeperStyle.moreShop}>更多》</span>
                                        </div>
                                        <div className={shopKeeperStyle.shopInfoBox}>
                                            <div className={shopKeeperStyle.leftBox}>
                                                <div className={shopKeeperStyle.shopAvater}></div>
                                                <div className={shopKeeperStyle.shopBox}>
                                                    <span className={shopKeeperStyle.followShop}>+关注</span>
                                                    <span>名称名称名称</span>
                                                </div>
                                            </div>
                                            <div className={shopKeeperStyle.honor}>
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