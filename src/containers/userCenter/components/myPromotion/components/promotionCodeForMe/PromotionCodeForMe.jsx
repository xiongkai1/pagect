import React, { Component } from 'react';
import styles from './promotionCodeForMe.less';
import { Pagination } from 'antd';
import cls from 'classnames';

export default class PromotionCodeForMe extends Component {
    state = {
        listData: [
            { 
                id: 1,
                date: '9-10',
                content: 'message1'
            },
            { 
                id: 2,
                date: '9-10',
                content: 'message1'
            },
            { 
                id: 3,
                date: '9-10',
                content: 'message1'
            },
            { 
                id: 4,
                date: '9-10',
                content: 'message1'
            },
            { 
                id: 5,
                date: '9-10',
                content: 'message1'
            }
        ],
        paginationParams: {
            pageNum: 1,
            pageSize: 10,
            pageCount: 0,
            total: 5
        },
        showListLayout: true
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
    changeLayout = () => {
        this.setState({
            showListLayout: !this.state.showListLayout
        });
    }
    render() {
        let { listData, paginationParams, showListLayout } = this.state;
        let { pageNum, pageSize, pageCount, total } = paginationParams;
        return (
            <div className={styles.promotionCodeForMe}>
                <div className={styles.changeLayoutIcon} onClick={this.changeLayout}>
                    <div className={cls(styles.iconContainer, showListLayout ? styles.notListIcon : styles.listIcon)} ></div>
                    <span>列表</span>
                </div>
                {showListLayout ? <div className={styles.listContainer}>
                    {
                        listData.map(item => {
                            return (
                                <div className={styles.row} key={item.id}>
                                    <div className={styles.date}>{item.date}</div>
                                    <div className={styles.content}>{item.content}</div>
                                    <div className={styles.download}>
                                        <div></div>
                                    </div>
                                    <div className={styles.share}>
                                        <div></div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div> : 
                    <div className={styles.dataContainer}>
                        {
                            listData.map(item => {
                                return (
                                    <div className={styles.item} key={item.id}>
                                        <div className={styles.date}>{item.date}</div>
                                        <div className={styles.content}>{item.content}</div>
                                        <div className={styles.btnsPart}>
                                            <div className={styles.download}>
                                                <div></div>
                                            </div>
                                            <div className={styles.share}>
                                                <div>
                                                </div></div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                }
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
        );
    }
}
