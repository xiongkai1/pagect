import React, { useState, useEffect } from 'react';
import styles from './myShopSystem.less';
import { Checkbox } from 'antd';

export default function(props) {

    const daysTabInfo = [
        {
            key: '1',
            text: '今日'
        },
        {
            key: '2',
            text: '昨日'
        },
        {
            key: '3',
            text: '近7天'
        },
        {
            key: '4',
            text: '近30天'
        },
        {
            key: '5',
            text: '近60天'
        }
    ];

    const tableTabInfo = [
        {
            key: '1',
            text: '开通情况'
        },
        {
            key: '2',
            text: '作品数'
        },
        {
            key: '3',
            text: '订单'
        },
        {
            key: '4',
            text: '浏览量'
        },
        {
            key: '5',
            text: '打赏笔数'
        }
    ];

    const [activeDaysKey, setActiveDaysKey] = useState('1');
    const [activeTableKey, setActiveTableKey] = useState('3');

    const [basicData, setBasicData] = useState({
        turnover: 863986,
        rank: 283,
        diff: 'inc',
        attention: 23423443,
        collection: 232423,
        view: 523435235,
        like: 265342,
        exceptional: 9932,
        forwarding: 234234
    });

    const columns = [
        [
            {
                title: '开通板块',
                dataIndex: 'plate',
                key: 'plate',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '板块状态',
                dataIndex: 'status',
                key: 'status',
                ellipsis: true,
                align: 'center',
                /* eslint-disable */ 
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '开通时间',
                dataIndex: 'openDate',
                key: 'openDate',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '到期时间',
                dataIndex: 'endDate',
                key: 'endDate',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: (text) => {
                    return <span>详情</span>;
                }
            } 
        ],
        [
            {
                title: '板块',
                dataIndex: 'plate',
                key: 'plate',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '作品数量',
                dataIndex: 'works',
                key: 'works',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '上架在售',
                dataIndex: 'shelves',
                key: 'shelves',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '未上架在仓',
                dataIndex: 'notOn',
                key: 'notOn',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: (text) => {
                    return <span>详情</span>;
                }
            } 
        ],
        [
            {
                title: '订单编号',
                dataIndex: 'orderNo',
                key: 'orderNo',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '账单类型',
                dataIndex: 'type',
                key: 'type',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '金额',
                dataIndex: 'prise',
                key: 'prise',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '商品ID',
                dataIndex: 'id',
                key: 'id',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '账单时间',
                dataIndex: 'orderTime',
                key: 'orderTime',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '付款方式',
                dataIndex: 'payWay',
                key: 'payWay',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '当前状态',
                dataIndex: 'currentStatus',
                key: 'currentStatus',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: (text) => {
                    return <span>详情</span>;
                }
            } 
        ],
        [
            {
                title: '板块',
                dataIndex: 'plate',
                key: 'plate',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '浏览量',
                dataIndex: 'viewCount',
                key: 'viewCount',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: (text) => {
                    return <span>详情</span>;
                }
            } 
        ],
        [
            {
                title: '板块',
                dataIndex: 'plate',
                key: 'plate',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '打赏笔数',
                dataIndex: 'exceptionalCount',
                key: 'exceptionalCount',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '打赏金额',
                dataIndex: 'exceptionalMoney',
                key: 'exceptionalMoney',
                ellipsis: true,
                align: 'center',
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: (text) => {
                    return <span>详情</span>;
                }
            } 
        ]
    ];

    // 切换日期tab
    const changeDaysTab = (key) => {
        setActiveDaysKey(key);
    };

    // 切换表格tab
    const changeTableTab = (key) => {
        setActiveTableKey(key);
    };

    // 复选框
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
    };
    
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    // 翻页
    const [pageParams, setPageParams] = useState({
        pageNum: 1,
        pageSize: 2,
        total: 0
    });

    // 分页参数配置
    const { pageNum, pageSize, total } = pageParams;

    const pagination = {
        current: pageNum,
        total,
        pageSize,
        onChange: (page) => {
            pageParams.pageNum = page;
            setPageParams({
                ...pageParams
            });
            fetchList();
        },
        onShowSizeChange: (current, size) => {
            pageParams.pageNum = 1;
            pageParams.pageSize = size;
            setPageParams({
                ...pageParams
            });
            fetchList();
        }
    };

    // 根据筛选条件搜索列表数据
    const fetchList = () => {
        // getDataList({
        //     startReportTime: reportStartTime,
        //     endReportTime: reportEndTime,
        //     startSummaryTime: summaryStartTime,
        //     endSummaryTime: summaryEndTime,
        //     pageNum: pageParams.pageNum,
        //     pageSize: pageParams.pageSize,
        //     reportName: searchValue
        // }).then(res => {
        //     let { data, pageNum, pageSize, totalCount } = res;
        //     data && setDatasource(data);
        //     setPageParams({
        //         pageNum,
        //         pageSize,
        //         total: totalCount
        //     });
        // }).finally(() => {
        //     setListLoading(false);
        // });
    };

    // 渲染统计行
    const renderStatisticsRow = (key) => {
        switch(key) {
            case '1': 
            return(
                <div className={styles.statisticsRow}>
                    <div>
                        <Checkbox/>
                    </div>
                    <div>
                            已选择：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                    </div>
                    <div>
                            已开通：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                    </div>
                    <div>
                            未开通：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                    </div>
                </div>
            );
            case '2': 
            return(
                <div className={styles.statisticsRow}>
                <div>
                    <Checkbox/>
                </div>
                <div>
                        作品数：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                </div>
                <div>
                        在售：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                </div>
                <div>
                        在仓：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                </div>
            </div>
            );
            case '3': 
            return(
                <div className={styles.statisticsRow}>
                <div>
                    <Checkbox/>
                </div>
                    <div>
                            已选择：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                    </div>
                    <div>
                            金额：<span style={{ color: '#099e52' }}>87983.77</span>
                    </div>
                </div>
            );
            case '4': 
            return(
                <div className={styles.statisticsRow}>
                <div>
                    <Checkbox/>
                </div>
                    <div>
                            浏览量：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>
                    </div>
                </div>
            );
            case '5': 
            return(
                <div className={styles.statisticsRow}>
                <div>
                    <Checkbox/>
                </div>
                    <div>
                            笔数：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>320</span>
                    </div>
                    <div>
                            金额：<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>2345235.0</span>
                    </div>
                </div>
            );
        }
    }

    return {
        daysTabInfo,
        tableTabInfo,
        activeDaysKey,
        activeTableKey,
        basicData,
        rowSelection,
        pagination,
        columns,

        changeDaysTab,
        changeTableTab,
        renderStatisticsRow
    };
}