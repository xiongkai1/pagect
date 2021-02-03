import React, { Component } from 'react';
import styles from '../common/commonSearch.less';
import { Menu, Dropdown, Pagination  } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import HotRecommendation from '../../home/components/newArrival/HotRecommendation';
import Fonts from '../../components/fonts/Fonts';

export default class FontSearch extends Component {
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
        ]
    }
    onChange = (pageNumber) => {
    }
    render() {
        let { options } = this.state;
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
                                        字体类型:全部(黑体) <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        字体语系:中文 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        风格:卡通 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        授权:1年 <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                            <div className={styles.selectItemBox}>
                                <Dropdown overlay={renderMenu}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        字体编码:全部(GB2312(6763字)) <DownOutlined />
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
                            <span>自营专区</span>
                            <span className={styles.titleEnglish}>ZIYINGZHUANQU</span>
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.selfSupport}>自营专区入口</div>
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
                        <Fonts isSearch={true}></Fonts>
                    </div>
                    <div className={styles.paginationBox}>
                        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={() => this.onChange} />
                    </div>
                    <HotRecommendation typeActiveKey={2}></HotRecommendation>
                </div>
            </div>
        );
    }
}
