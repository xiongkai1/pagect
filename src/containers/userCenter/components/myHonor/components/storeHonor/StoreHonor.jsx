import React, { Component } from 'react';
import styles from './storeHonor.less';

export default function StoreHonor() {
    const honorList = [
        {
            key: 1,
            icon: 'A',
            activeIcon: 'B'
        },
        {
            key: 2,
            icon: 'A',
            activeIcon: 'B'
        },
        {
            key: 3,
            icon: 'A',
            activeIcon: 'B'
        },
        {
            key: 4,
            icon: 'A',
            activeIcon: 'B'
        },
        {
            key: 5,
            icon: 'A',
            activeIcon: 'B'
        },
        {
            key: 6,
            icon: 'A',
            activeIcon: 'B'
        },
        {
            key: 7,
            icon: 'A',
            activeIcon: 'B'
        }
    ];
    const tabHeader = ['月度', '季度', '年度', '操作'];
    const tabSidebar = ['销量排名', '作品数排名', '点赞数排名', '店铺收藏数排名', '作品收藏数排名'];
    const tabContent = [
        {
            month: 34123,
            season: 28378,
            year: 86321,
            icon: '￥'
        },
        {
            month: 53232,
            season: 28378,
            year: 86321,
            icon: 'Z'
        },
        {
            month: 63453,
            season: 28378,
            year: 86321,
            icon: 'Z'
        },
        {
            month: 25235,
            season: 28378,
            year: 86321,
            icon: 'D'
        },
        {
            month: 52355,
            season: 28378,
            year: 86321,
            icon: 'D'
        }
    ];
    return (
        <div className={styles.storeHonor}>
            <div className={styles.topPart}>
                <div className={styles.partTitle}>代理商信息</div>
                <div className={styles.honorList}>
                    <div className={styles.labelName}>开通荣誉</div>
                    <div className={styles.listContainer}>
                        {
                            honorList.map(item => {
                                return (
                                    <div className={styles.listItem} key={item.key}>{item.icon}</div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.secondPart}>
                <div className={styles.partTitle}>荣誉/时间</div>
                <ul className={styles.tabHeader}>
                    {
                        tabHeader.map(item => {
                            return <li key={item}>{item}</li>;
                        })
                    }
                </ul>
                <ul className={styles.tabSidebar}>
                    {
                        tabSidebar.map(item => {
                            return <li key={item}>{item}</li>;
                        })
                    }
                </ul>
                <div className={styles.tabContent}>
                    {
                        tabContent.map((item, index) => {
                            return (
                                <div className={styles.row} key={index}>
                                    <div className={styles.month}><span>{item.icon}</span>{item.month}</div>
                                    <div className={styles.season}><span>{item.icon}</span>{item.season}</div>
                                    <div className={styles.year}><span>{item.icon}</span>{item.year}</div>
                                    <div className={styles.operation}>
                                        <div className={styles.imgContainer}>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
