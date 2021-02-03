import React, { Component } from 'react';
import styles from '../../myDynamic.less';
import { Pagination } from 'antd';
import cls from 'classnames';
import TEST_IMG from 'Images/testImg.jpg';

export default class Forwarding extends Component {
    state = {
        activeKey: '1',
        tabInfo: [
            {
                key: '1',
                text: '默认排序'
            },
            {
                key: '2',
                text: '转发'
            },
            {
                key: '3',
                text: '我转发的'
            }
        ],
        listData: [
            {
                id: 1,
                operateTime: '2020-12-06',
                operatorThumb: TEST_IMG,
                operator: '点赞者1',
                beOperated: '被点赞者1',
                operateWork: '《被点赞作品》',
                beOperatedThumb: TEST_IMG,
                beOperatedCount: 29342,
                from: '小程序'
            },
            {
                id: 2,
                operateTime: '2020-12-06',
                operatorThumb: TEST_IMG,
                operator: '点赞者2',
                beOperated: '被点赞者2',
                operateWork: '《被点赞作品》',
                beOperatedThumb: TEST_IMG,
                beOperatedCount: 29342,
                from: 'App'
            },
            {
                id: 3,
                operateTime: '2020-12-06',
                operatorThumb: TEST_IMG,
                operator: '点赞者1',
                beOperated: '被点赞者1',
                operateWork: '《被点赞作品》',
                beOperatedThumb: TEST_IMG,
                beOperatedCount: 29342,
                from: '小程序'
            },
            {
                id: 4,
                operateTime: '2020-12-06',
                operatorThumb: TEST_IMG,
                operator: '点赞者2',
                beOperated: '被点赞者2',
                operateWork: '《被点赞作品》',
                beOperatedThumb: TEST_IMG,
                beOperatedCount: 29342,
                from: 'App'
            },
            {
                id: 5,
                operateTime: '2020-12-06',
                operatorThumb: TEST_IMG,
                operator: '点赞者2',
                beOperated: '被点赞者2',
                operateWork: '《被点赞作品》',
                beOperatedThumb: TEST_IMG,
                beOperatedCount: 29342,
                from: 'App'
            }
        ],
        paginationParams: {
            pageNum: 1,
            pageSize: 5,
            pageCount: 1,
            total: 5
        }
    }
    changeActiveKey = (key) => {
        this.setState({
            activeKey: key
        }, () => {
            // todo 刷新列表
        });
    }    
    // 翻页操作
    handlePageChange = (pagination) => {
        const { paginationParams } = this.state;
        if (paginationParams.pageSize !== pagination.pageSize) {
            this.setState({
                pagination: {
                    ...paginationParams,
                    pageNum: 1,
                    pageSize: pagination.pageSize
                }
                
            }, () => {
                // this.fetchDataList(); 刷新列表
            });
        } else {
            this.setState({
                pagination: {
                    ...paginationParams,
                    pageNum: pagination.current,
                    pageSize: pagination.pageSize
                }
            
            }, () => {
                // this.fetchDataList();
            });
        }
    }
    render() {
        let { activeKey, tabInfo, listData, paginationParams } = this.state;
        let { pageNum, pageSize, pageCount, total } = paginationParams;
        return (
            <div className={styles.addLike}>
                <div className={styles.dynamicHeader}>
                    {
                        tabInfo.map(item => {
                            return (
                                <div 
                                    key={item.key} 
                                    className={cls(styles.tabItem, activeKey === item.key ? styles.activeItem : null)}
                                    onClick={() => this.changeActiveKey(item.key)}
                                >
                                    {item.text}
                                </div>
                            );
                        })
                    }
                </div>
                <div className={styles.dynamicContent}>
                    <ul className={styles.dynamicList}>
                        {
                            listData.length > 0 ? listData.map(item => {
                                return (
                                    <li key={item.id} className={styles.itemRow}>
                                        <span className={styles.operateTime}>{item.operateTime}</span>
                                        <img className={styles.operatorThumb} src={item.operatorThumb}/>
                                        <div className={styles.operatInfo}>
                                            <span>{item.operator}</span>
                                            转发了
                                            <span>{item.beOperated}</span>
                                            的
                                            <span>{item.operateWork}</span>
                                        </div>
                                        <img src={item.beOperatedThumb}/>
                                        <div className={styles.addLikeInfo}>
                                            <div className={styles.beOperatedCount}>{item.beOperatedCount}</div>
                                            次
                                        </div>
                                        <div className={styles.from}>来自<span>{item.from}</span>端口</div>
                                    </li>
                                );
                            }) : '暂无数据'
                        }
                    </ul>
                    {total > 0 ? <div className={styles.paginationPart}>
                        <span>共{pageCount}页</span>
                        <Pagination 
                            defaultCurrent={pageNum} 
                            total={total} 
                            showSizeChanger={true}
                            onChange={this.handlePageChange}
                        />
                    </div> : null }
                </div>
            </div>
        );
    }
}
