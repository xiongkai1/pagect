import React, { useState, useEffect } from 'react';

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
            text: '月度'
        },
        {
            key: '4',
            text: '季度'
        },
        {
            key: '5',
            text: '年度'
        }
    ];

    const tableTabInfo = [
        {
            key: '1',
            text: '团队情况'
        }
    ];

    const [activeDaysKey, setActiveDaysKey] = useState('1');
    const [activeTableKey, setActiveTableKey] = useState('1');

    const searchOptions = [
        {
            text: '店铺ID查询',
            key: 1,
            value: '店铺ID查询'
        }
    ];

    const [basicData, setBasicData] = useState({
        turnover: 863986,
        shopTotal: 3453
    });

    const [areaData, setAreaData] = useState([
        {
            key: 1,
            area: '长沙',
            value: 97
        },
        {
            key: 2,
            area: '成都',
            value: 50
        },
        {
            key: 3,
            area: '上海',
            value: 25
        },
        {
            key: 4,
            area: '北京',
            value: 23
        },
        {
            key: 5,
            area: '深圳',
            value: 14
        }
    ]);

    const columns = [
        {
            title: '头像|店铺名|店铺号',
            dataIndex: 'shopInfo',
            key: 'shopInfo',
            ellipsis: true,
            align: 'center',
            render: (text) => {
                return <span>{text ? text : '/'}</span>;
            }
        }, 
        {
            title: '开通板块',
            dataIndex: 'plate',
            key: 'plate',
            ellipsis: true,
            align: 'center',
            /* eslint-disable */ 
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '作品数',
                dataIndex: 'works',
                key: 'works',
                align: 'center',
                // width: '30%',
                ellipsis: true,
                render: (text) => {
                    return <span>{text ? text : '/'}</span>;
                }
            }, 
            {
                title: '地区',
                dataIndex: 'area',
                key: 'area',
                align: 'center',
                // width: '30%',
                ellipsis: true,
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
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                align: 'center',
                render: (text) => {
                    return <span>详情</span>;
                }
            } 
        ]

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

    return {
        daysTabInfo,
        tableTabInfo,
        activeDaysKey,
        searchOptions,
        activeTableKey,
        basicData,
        areaData,
        rowSelection,
        pagination,
        columns,

        changeDaysTab,
        changeTableTab
    };
}