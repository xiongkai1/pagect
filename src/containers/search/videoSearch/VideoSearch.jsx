import React, { Component } from 'react';
import styles from '../common/commonSearch.less';
import { Menu, Dropdown, Pagination, Radio } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import HotRecommendation from '../../home/components/newArrival/HotRecommendation';
import Switch from '../../../components/switch/Switch';

export default class VideoSearch extends Component {
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
        selectId: 1
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
    selectedAll = () => {
        this.setState({ selectId: 0 });
    }
    render() {
        let { options, imgList, selectId } = this.state;
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
                                构图：
                                <Radio.Group onChange={this.onChangeRadio} value={this.state.value}>
                                    <Radio value={1}>横</Radio>
                                    <Radio value={2}>竖</Radio>
                                </Radio.Group>
                            </div>
                            <div className={styles.selectItemBox}>
                                分辨率：
                                <Radio.Group onChange={this.onChangeRadio} value={this.state.value}>
                                    <Radio value={1}>4K</Radio>
                                    <Radio value={2}>HD</Radio>
                                </Radio.Group>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        分类：风景 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        用途：片头片尾 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        长景：AE <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.selectedItemBox}>黑体<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>黑体<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>黑体<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.selectedItemBox}>黑体<CloseOutlined style={{ fontSize: '12px' }}/></div>
                            <div className={styles.clearOptions}>清除条件</div>
                        </div>
                    </div>
                    <div className={styles.entranceBox}>
                        <div className={styles.boxTitle}>
                            <span>AI智能甄选</span>
                            <span className={styles.titleEnglish}>AIZHINENGZHENXUAN</span>
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.selfSupport}>山河湖海</div>
                        </div>
                    </div>
                    <div className={styles.sortBox}>
                        <div className={styles.sortItemBox}>搜索结果:897609</div>
                        <div className={styles.sortItemBox}>
                            <Switch selectId={selectId} changeSlide={this.changeSlide} selectedAll={this.selectedAll}></Switch>
                        </div>
                        <div className={styles.sortItemBox}>排序:销量↑↓</div>
                        <div className={styles.sortItemBox}>价格↑↓</div>
                        <div className={styles.sortItemBox}>收藏数↑↓</div>
                        <div className={styles.sortItemBox}>时间↑↓</div>
                    </div>
                    <div className={styles.goodsBox}> 
                        <div className={styles.imgBox}>
                            {
                                imgList.map(item => {
                                    return (
                                        <div key={item.key} className={styles.imgItemBox}>
                                            <img  width="100%" height="100%" src={item.src}/>
                                            <div className={styles.hideBox}>
                                                <span className={styles.download}>111111</span>
                                                <div className={styles.otherOperation}>
                                                    <span>11111</span>
                                                    <span>22222</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.paginationBox}>
                        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={() => this.onChange} />
                    </div>
                    <HotRecommendation typeActiveKey={3}></HotRecommendation>
                </div>
            </div>
        );
    }
}